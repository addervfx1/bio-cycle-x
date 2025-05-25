import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { ItemService } from './item.service';
import { UpdateItemDto } from './dto/update-item-dto';
import { CreateItemDto } from './dto/create-item-dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('item')
@Controller('item')
export class ItemController {
  constructor(private readonly activityService: ItemService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os itens' })
  @ApiResponse({ status: 200, description: 'Lista de itens retornada com sucesso.' })
  async findAll(): Promise<Item[]> {
    return await this.activityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um item pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Item encontrado.' })
  @ApiResponse({ status: 404, description: 'Item não encontrado.' })
  async findOne(@Param('id') id: number): Promise<Item | null> {
    return await this.activityService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo item' })
  @ApiBody({ type: CreateItemDto })
  @ApiResponse({ status: 201, description: 'Item criado com sucesso.' })
  async create(@Body() createdepositStationDto: CreateItemDto): Promise<Item | null> {
    return await this.activityService.create(createdepositStationDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um item' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateItemDto })
  @ApiResponse({ status: 200, description: 'Item atualizado com sucesso.' })
  async update(@Param('id') id: number, @Body() updatedepositStationDto: UpdateItemDto): Promise<Item | null> {
    return await this.activityService.update(id, updatedepositStationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um item' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Item removido com sucesso.' })
  async remove(@Param('id') id: number): Promise<void> {
    return await this.activityService.remove(id);
  }
}
