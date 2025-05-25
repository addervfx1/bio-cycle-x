import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trade } from './entities/trade.entity';
import { CreateTradeDto } from './dto/create-trade-dto';
import { UpdateTradeDto } from './dto/update-trade-dto';


@Injectable()
export class TradeRepositoryService {
  constructor(
    @InjectRepository(Trade)
    private readonly tradeRepository: Repository<Trade>,
  ) {}

  async findAll(): Promise<Trade[]> {
    return await this.tradeRepository.find();
  }

  async findOne(id: number): Promise<Trade | null> {
    return await this.tradeRepository.findOne({ where: { id } });
  }

  async create(activity: CreateTradeDto): Promise<Trade | null> {
    return await this.tradeRepository.save(activity);
  }

  async update(id: number, activity: UpdateTradeDto): Promise<Trade | null> {
    await this.tradeRepository.update(id, activity);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tradeRepository.delete(id);
  }

  async findByUsuario(userId: number): Promise<Trade[] | null> {
    return await this.tradeRepository.find({ where: { users: { id: userId } }, relations: ['users'] });
  }
}
