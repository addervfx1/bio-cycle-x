import { Injectable } from '@nestjs/common';
import { DepositRepositoryService } from './deposit.repository.service';
import { Deposit } from './entities/deposit.entity';
import { RecyclableMaterial } from '../common/enums/recyclable-material.enum';
import { CreateDepositDto } from './dto/create-deposit-dto';
import { UpdateDepositDto } from './dto/update-deposit-dto';
import { DepositStationRepositoryService } from '../deposit-station/deposit-station.repository.service';
import { UserRepositoryService } from '../user/user.repository.service';

@Injectable()
export class DepositService {
  constructor(
    private readonly depositRepositoryService: DepositRepositoryService,
    private readonly userRepositoryService: UserRepositoryService,
    private readonly depositStationRepositoryService: DepositStationRepositoryService,
  ) {}

  async findAll(): Promise<Deposit[]> {
    return await this.depositRepositoryService.findAll();
  }

  async findOne(id: number): Promise<Deposit | null> {
    return await this.depositRepositoryService.findOne(id);
  }

  async create(activity: CreateDepositDto): Promise<Deposit | null> {
    return await this.depositRepositoryService.create(activity);
  }

  async makeDeposit(createDepositDto: CreateDepositDto): Promise<Deposit | null> {
    if (typeof createDepositDto.userId !== 'number' || typeof createDepositDto.depositStationId !== 'number') {
      throw new Error('IDs de usuário ou estação inválidos');
    }
    const user = await this.userRepositoryService.findOne(createDepositDto.userId);
    const depositStation = await this.depositStationRepositoryService.findOne(createDepositDto.depositStationId);

    if (!user || !depositStation) {
      throw new Error('Usuário ou estação de depósito não encontrados');
    }

    const CATEGORY_POINTS: Record<string, number> = {
      [RecyclableMaterial.PAPER]: 2,
      [RecyclableMaterial.PLASTIC]: 2,
      [RecyclableMaterial.METAL]: 3,
      [RecyclableMaterial.GLASS]: 2,
      [RecyclableMaterial.ORGANIC]: 1
    };

    const multiplier = CATEGORY_POINTS[String(createDepositDto.category)] ?? 1;
    const weight = createDepositDto.weightInKg ?? 0;
    const pointsEarned = Math.floor(weight * multiplier);

    const deposit = await this.depositRepositoryService.create({
      description: createDepositDto.description,
      category: createDepositDto.category,
      weightInKg: weight,
      status: true,
      userId: user.id,
      depositStationId: depositStation.id
    });

    user.score = (user.score ?? 0) + pointsEarned;
    await this.userRepositoryService.update(user.id, user);
    return deposit;
  }

  async update(id: number, activity: UpdateDepositDto): Promise<Deposit | null> {
    return await this.depositRepositoryService.update(id, activity);
  }

  async remove(id: number): Promise<void> {
    return await this.depositRepositoryService.remove(id);
  }

  async findByUsuario(userId: number): Promise<Deposit[] | null> {
    return await this.depositRepositoryService.findByUsuario(userId);
  }
}
