import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deposit } from './entities/deposit.entity';
import { CreateDepositDto } from './dto/create-deposit-dto';
import { UpdateDepositDto } from './dto/update-deposit-dto';


@Injectable()
export class DepositRepositoryService {
  constructor(
    @InjectRepository(Deposit)
    private readonly activityRepository: Repository<Deposit>,
  ) {}

  async findAll(): Promise<Deposit[]> {
    return await this.activityRepository.find();
  }

  async findOne(id: number): Promise<Deposit | null> {
    return await this.activityRepository.findOne({ where: { id } });
  }

  async create(activity: CreateDepositDto): Promise<Deposit | null> {
    return await this.activityRepository.save(activity);
  }

  async update(id: number, activity: UpdateDepositDto): Promise<Deposit | null> {
    await this.activityRepository.update(id, activity);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.activityRepository.delete(id);
  }

  async findByUsuario(userId: number): Promise<Deposit[] | null> {
    return await this.activityRepository.find({ where: { users: { id: userId } }, relations: ['users'] });
  }
}
