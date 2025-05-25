import { Injectable } from '@nestjs/common';
import { Trade } from './entities/trade.entity';
import { CreateTradeDto } from './dto/create-trade-dto';
import { UpdateTradeDto } from './dto/update-trade-dto';
import { UserRepositoryService } from '../user/user.repository.service';
import { TradeRepositoryService } from './trade.repository.service';
import { ItemRepositoryService } from '../item/item.repository.service';

@Injectable()
export class TradeService {
  constructor(
    private readonly tradeRepositoryService: TradeRepositoryService,
    private readonly userRepositoryService: UserRepositoryService,
    private readonly itemRepositoryService: ItemRepositoryService,
  ) {}

  async findAll(): Promise<Trade[]> {
    return await this.tradeRepositoryService.findAll();
  }

  async findOne(id: number): Promise<Trade | null> {
    return await this.tradeRepositoryService.findOne(id);
  }

  async create(activity: CreateTradeDto): Promise<Trade | null> {
    return await this.tradeRepositoryService.create(activity);
  }

  async update(id: number, activity: UpdateTradeDto): Promise<Trade | null> {
    return await this.tradeRepositoryService.update(id, activity);
  }

  async remove(id: number): Promise<void> {
    return await this.tradeRepositoryService.remove(id);
  }

  async makeTrade(createTradeDto: CreateTradeDto): Promise<Trade | null> {
    if (typeof createTradeDto.userId !== 'number' || typeof createTradeDto.itemId !== 'number') {
      throw new Error('IDs de usuário ou item inválidos');
    }
    const user = await this.userRepositoryService.findOne(createTradeDto.userId);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    const item = await this.itemRepositoryService.findOne(createTradeDto.itemId);
    if (!item) {
      throw new Error('Item não encontrado');
    }
    const quantity = createTradeDto.quantity ?? 1;
    if ((user.score ?? 0) < item.price * quantity) {
      throw new Error('Score insuficiente para realizar a troca');
    }
    if ((item.stock ?? 0) < quantity) {
      throw new Error('Estoque insuficiente para realizar a troca');
    }
    user.score -= item.price * quantity;
    item.stock -= quantity;
    await this.userRepositoryService.update(user.id, user);
    await this.itemRepositoryService.update(item.id, item);
    const trade = await this.tradeRepositoryService.create({
      userId: user.id,
      itemId: item.id,
      quantity,
    });
    return trade;
  }

  async findByUsuario(userId: number): Promise<Trade[] | null> {
    return await this.tradeRepositoryService.findByUsuario(userId);
  }
}
