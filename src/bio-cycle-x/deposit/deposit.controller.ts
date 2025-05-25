import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Deposit } from './entities/deposit.entity';
import { DepositService } from './deposit.service';
import { UpdateDepositDto } from './dto/update-deposit-dto';
import { CreateDepositDto } from './dto/create-deposit-dto';



@ApiTags('deposit')
@Controller('deposit')
export class DepositController {
  constructor(private readonly activityService: DepositService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os depósitos' })
  @ApiResponse({ status: 200, description: 'Lista de depósitos retornada com sucesso.' })
  async findAll(): Promise<Deposit[]> {
    return await this.activityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um depósito pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Depósito encontrado.' })
  @ApiResponse({ status: 404, description: 'Depósito não encontrado.' })
  async findOne(@Param('id') id: number): Promise<Deposit | null> {
    return await this.activityService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo depósito' })
  @ApiBody({ type: CreateDepositDto })
  @ApiResponse({ status: 201, description: 'Depósito criado com sucesso.' })
  async create(@Body() createdepositDto: CreateDepositDto): Promise<Deposit | null> {
    return await this.activityService.create(createdepositDto);
  }

  @Post('make')
  @ApiOperation({ summary: 'Realiza um depósito' })
  @ApiBody({ type: CreateDepositDto })
  @ApiResponse({ status: 201, description: 'Depósito realizado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Usuário ou estação não encontrados.' })
  async makeDeposit(@Body() createDepositDto: CreateDepositDto): Promise<Deposit | null> {
    return await this.activityService.makeDeposit(createDepositDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um depósito' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateDepositDto })
  @ApiResponse({ status: 200, description: 'Depósito atualizado com sucesso.' })
  async update(@Param('id') id: number, @Body() updatedepositDto: UpdateDepositDto): Promise<Deposit | null> {
    return await this.activityService.update(id, updatedepositDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um depósito' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Depósito removido com sucesso.' })
  async remove(@Param('id') id: number): Promise<void> {
    return await this.activityService.remove(id);
  }

  @Get('usuario/:userId')
  @ApiOperation({ summary: 'Busca depósitos pelo id do usuário' })
  @ApiParam({ name: 'userId', type: Number })
  @ApiResponse({ status: 200, description: 'Depósitos do usuário retornados com sucesso.' })
  async findByUsuario(@Param('userId') userId: number): Promise<Deposit[] | null> {
    return await this.activityService.findByUsuario(userId);
  }
}
