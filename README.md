<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Bio-Cycle-X API

API desenvolvida em NestJS para projeto na faculdade UNIFG onde consiste em um: 
Gerenciamento de usuários, depósitos de lixo reciclável, trocas (trades) por itens, itens e estações de depósito.

## Pré-requisitos

- [Node.js (v18+)](https://nodejs.org/)
- [npm (v9+)](https://www.npmjs.com/get-npm)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [PostgreSQL (SGBD) - Download oficial](https://www.postgresql.org/download/)
  - Alternativamente, você pode usar a extensão [PostgreSQL para VS Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-postgresql) para gerenciar o banco de dados diretamente pelo editor:
    1. Abra o VS Code
    2. Vá em "Extensões" (Ctrl+Shift+X)
    3. Busque por "PostgreSQL"
    4. Instale a extensão oficial da Microsoft

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd bio-cycle-x
   ```

2. **Suba o banco de dados digitando o seguinte comando no seu terminal:**
   ```bash
   docker compose up -d
   ```
   Isso irá criar um container Postgres acessível em `localhost:25060` com usuário `admin` e senha `admin`.

3. **Instale as dependências:**
   ```bash
   npm install
   ```
5. **Rode a aplicação:**
   ```bash
   npm run start:dev
   ```

6. **Acesse a documentação Swagger onde exibirá a documentação para cada rota:**
   - [http://localhost:3000/api](http://localhost:3000/api)

---

## Principais Rotas

### Usuário
- `POST /users/register` — Cria um novo usuário
  - Body: `{ "name": string, "email": string, "password": string }`
- `POST /users/login` — Login do usuário
  - Body: `{ "email": string, "password": string }`
- `GET /users/:id` — Busca usuário por ID
- `PUT /users/:id` — Atualiza usuário
- `DELETE /users/:id` — Remove usuário

### Depósito
- `POST /deposit` — Cria um depósito
- `POST /deposit/make` — Realiza um depósito e soma pontos ao usuário
  - Body: `{ "userId": number, "depositStationId": number, "category": string, "weightInKg": number, ... }`
- `GET /deposit/usuario/:userId` — Lista depósitos de um usuário

### Trade
- `POST /trade` — Cria uma trade
- `POST /trade/make` — Realiza uma trade (subtrai score e estoque)
  - Body: `{ "userId": number, "itemId": number, "quantity": number }`
- `GET /trade/usuario/:userId` — Lista trades de um usuário

### Item
- `POST /item` — Cria um item
- `GET /item/:id` — Busca item por ID
- `PUT /item/:id` — Atualiza item
- `DELETE /item/:id` — Remove item

### Estação de Depósito
- `POST /deposit-station` — Cria uma estação
- `GET /deposit-station/:id` — Busca estação por ID
- `PUT /deposit-station/:id` — Atualiza estação
- `DELETE /deposit-station/:id` — Remove estação

---

## Exemplo de dados iniciais (script SQL)

Você pode popular o banco de dados com alguns itens para troca e pontos de coleta em Recife executando o script abaixo no pgAdmin, na extensão PostgreSQL do VS Code ou outro cliente conectado ao banco:

```sql
INSERT INTO item (name, description, price, stock, tradeEnabled) VALUES
  ('Copo Térmico BioCycle', 'Copo térmico ecológico, 350ml', 120, 50, true),
  ('Squeeze Reutilizável', 'Garrafa squeeze 500ml, livre de BPA', 90, 40, true),
  ('Ecobag BioCycle', 'Sacola ecológica resistente', 60, 100, true),
  ('Kit Canudo Inox', 'Kit com 2 canudos de inox + escova', 80, 30, true),
  ('Camiseta BioCycle', 'Camiseta sustentável, algodão orgânico', 150, 20, true);

INSERT INTO deposit_station (name, address, description, latitude, longitude, category, status) VALUES
  ('Estação Boa Viagem - Plástico', 'Av. Boa Viagem, 1000, Recife', 'Coleta de plásticos', -8.1192, -34.8941, 'Reciclável', true),
  ('Estação Derby - Papel', 'Praça do Derby, 200, Recife', 'Coleta de papel', -8.0586, -34.8942, 'Reciclável', true),
  ('Estação Casa Forte - Vidro', 'Rua Casa Forte, 300, Recife', 'Coleta de vidro', -8.0277, -34.9076, 'Reciclável', true),
  ('Estação Pina - Metal', 'Av. Herculano Bandeira, 400, Recife', 'Coleta de metais', -8.1041, -34.8813, 'Reciclável', true),
  ('Estação Recife Antigo - Eletrônicos', 'Rua do Bom Jesus, 500, Recife', 'Coleta de eletrônicos', -8.0632, -34.8711, 'Eletrônico', true);
```

> Basta copiar e colar o script acima em seu gerenciador de banco de dados conectado ao Postgres do projeto.

---

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
