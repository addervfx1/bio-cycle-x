import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { LoginDto } from './dto/login-dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um usuário pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  async findOne(@Param('id') id: number): Promise<User | null> {
    return await this.userService.findOne(id);
  }

  @Post('/register')
  @ApiOperation({ summary: 'Registra um novo usuário' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso.' })
  async create(@Body() createUserDto: CreateUserDto): Promise<{accessToken: string, refreshToken: string} | null> {
    return await this.userService.create(createUserDto);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Realiza login do usuário' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.' })
  async login(@Body() loginDto: LoginDto): Promise<{accessToken: string, refreshToken: string, userId: number} | null> {
    return await this.userService.login(loginDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um usuário' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.' })
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User | null> {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um usuário' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Usuário removido com sucesso.' })
  async remove(@Param('id') id: number): Promise<void> {
    return await this.userService.remove(id);
  }
}
