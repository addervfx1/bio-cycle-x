import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Trade } from './entities/trade.entity';
import { TradeService } from './trade.service';
import { UpdateTradeDto } from './dto/update-trade-dto';
import { CreateTradeDto } from './dto/create-trade-dto';



@ApiTags('trade')
@Controller('trade')
export class TradeController {
  constructor(private readonly activityService: TradeService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as trades' })
  @ApiResponse({ status: 200, description: 'Lista de trades retornada com sucesso.' })
  async findAll(): Promise<Trade[]> {
    return await this.activityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma trade pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Trade encontrada.' })
  @ApiResponse({ status: 404, description: 'Trade não encontrada.' })
  async findOne(@Param('id') id: number): Promise<Trade | null> {
    return await this.activityService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma nova trade' })
  @ApiBody({ type: CreateTradeDto })
  @ApiResponse({ status: 201, description: 'Trade criada com sucesso.' })
  async create(@Body() createdepositDto: CreateTradeDto): Promise<Trade | null> {
    return await this.activityService.create(createdepositDto);
  }

  @Post('make')
  @ApiOperation({ summary: 'Realiza uma trade de item por score' })
  @ApiBody({ type: CreateTradeDto })
  @ApiResponse({ status: 201, description: 'Trade realizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Score ou estoque insuficiente.' })
  async makeTrade(@Body() createTradeDto: CreateTradeDto): Promise<Trade | null> {
    return await this.activityService.makeTrade(createTradeDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma trade' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateTradeDto })
  @ApiResponse({ status: 200, description: 'Trade atualizada com sucesso.' })
  async update(@Param('id') id: number, @Body() updatedepositDto: UpdateTradeDto): Promise<Trade | null> {
    return await this.activityService.update(id, updatedepositDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma trade' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Trade removida com sucesso.' })
  async remove(@Param('id') id: number): Promise<void> {
    return await this.activityService.remove(id);
  }

  @Get('usuario/:userId')
  @ApiOperation({ summary: 'Busca trades pelo id do usuário' })
  @ApiParam({ name: 'userId', type: Number })
  @ApiResponse({ status: 200, description: 'Trades do usuário retornadas com sucesso.' })
  async findByUsuario(@Param('userId') userId: number): Promise<Trade[] | null> {
    return await this.activityService.findByUsuario(userId);
  }
}
