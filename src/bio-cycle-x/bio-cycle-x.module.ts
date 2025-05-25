import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Item } from './item/entities/item.entity';
import { Deposit } from './deposit/entities/deposit.entity';
import { DepositStation } from './deposit-station/entities/deposit-station.entity';
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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Item,
      Deposit,
      DepositStation
    ])
  ],
  controllers: [
    UserController,
    ItemController,
    DepositController,
    DepositStationController
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
    DepositStationRepositoryService
  ],
  exports: [
    UserService,
    ItemService,
    DepositService,
    DepositStationService
  ]
})
export class BioCycleXModule {}
