import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BioCycleXModule } from './bio-cycle-x/bio-cycle-x.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 25060,
      username: 'admin',
      password: 'admin',
      database: 'biocyclex',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BioCycleXModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
