import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Item } from './item/entities/item.entity';
import { Deposit } from './deposit/entities/deposit.entity';
import { DepositStation } from './deposit-station/entities/deposit-station.entity';
import { Trade } from './trade/entities/trade.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserRepositoryService } from './user/user.repository.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { ItemRepositoryService } from './item/item.repository.service';
import { DepositController } from './deposit/deposit.controller';
import { DepositService } from './deposit/deposit.service';
import { UserTokenGateway } from './user/gateways/userToken/userToken.gateway';
import { DepositRepositoryService } from './deposit/deposit.repository.service';
import { DepositStationController } from './deposit-station/deposit-station.controller';
import { DepositStationService } from './deposit-station/deposit-station.service';
import { DepositStationRepositoryService } from './deposit-station/deposit-station.repository.service';
import { TradeController } from './trade/trade.controller';
import { TradeService } from './trade/trade.service';
import { TradeRepositoryService } from './trade/trade.repository.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Item,
      Deposit,
      DepositStation,
      Trade
    ])
  ],
  controllers: [
    UserController,
    ItemController,
    DepositController,
    DepositStationController,
    TradeController
  ],
  providers: [
    UserService,
    UserRepositoryService,
    ItemService,
    ItemRepositoryService,
    DepositService,
    DepositRepositoryService,
    UserTokenGateway,
    DepositStationService,
    DepositStationRepositoryService,
    TradeService,
    TradeRepositoryService
  ],
  exports: [
    UserService,
    ItemService,
    DepositService,
    DepositStationService,
    TradeService
  ]
})
export class BioCycleXModule {}
