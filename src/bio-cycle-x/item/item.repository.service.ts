import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item-dto';
import { UpdateItemDto } from './dto/update-item-dto';


@Injectable()
export class ItemRepositoryService {
  constructor(
    @InjectRepository(Item)
    private readonly activityRepository: Repository<Item>,
  ) { }

  async findAll(): Promise<Item[]> {
    return await this.activityRepository.find();
  }

  async findOne(id: number): Promise<Item | null> {
    return await this.activityRepository.findOne({ where: { id } });
  }

  async create(activity: CreateItemDto): Promise<Item | null> {
    return await this.activityRepository.save(activity);
  }

  async update(id: number, activity: UpdateItemDto): Promise<Item | null> {
    await this.activityRepository.update(id, activity);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.activityRepository.delete(id);
  }
}
