import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { DepositStation } from './entities/deposit-station.entity';
import { DepositStationService } from './deposit-station.service';
import { UpdateDepositStationDto } from './dto/update-deposit-station-dto';
import { CreateDepositStationDto } from './dto/create-deposit-station-dto';

@ApiTags('deposit-station')
@Controller('deposit-station')
export class DepositStationController {
  constructor(private readonly activityService: DepositStationService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as estações de depósito' })
  @ApiResponse({ status: 200, description: 'Lista de estações retornada com sucesso.' })
  async findAll(): Promise<DepositStation[]> {
    return await this.activityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma estação pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Estação encontrada.' })
  @ApiResponse({ status: 404, description: 'Estação não encontrada.' })
  async findOne(@Param('id') id: number): Promise<DepositStation | null> {
    return await this.activityService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma nova estação de depósito' })
  @ApiBody({ type: CreateDepositStationDto })
  @ApiResponse({ status: 201, description: 'Estação criada com sucesso.' })
  async create(@Body() createdepositStationDto: CreateDepositStationDto): Promise<DepositStation | null> {
    return await this.activityService.create(createdepositStationDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma estação de depósito' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateDepositStationDto })
  @ApiResponse({ status: 200, description: 'Estação atualizada com sucesso.' })
  async update(@Param('id') id: number, @Body() updatedepositStationDto: UpdateDepositStationDto): Promise<DepositStation | null> {
    return await this.activityService.update(id, updatedepositStationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma estação de depósito' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Estação removida com sucesso.' })
  async remove(@Param('id') id: number): Promise<void> {
    return await this.activityService.remove(id);
  }
}
