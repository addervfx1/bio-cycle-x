import { Injectable } from '@nestjs/common';
import { ItemRepositoryService } from './item.repository.service';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item-dto';
import { UpdateItemDto } from './dto/update-item-dto';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepositoryService: ItemRepositoryService) {}

  async findAll(): Promise<Item[]> {
    return await this.itemRepositoryService.findAll();
  }

  async findOne(id: number): Promise<Item | null> {
    return await this.itemRepositoryService.findOne(id);
  }

  async create(item: CreateItemDto): Promise<Item | null> {
    return await this.itemRepositoryService.create(item);
  }

  async update(id: number, item: UpdateItemDto): Promise<Item | null> {
    return await this.itemRepositoryService.update(id, item);
  }

  async remove(id: number): Promise<void> {
    return await this.itemRepositoryService.remove(id);
  }
}
