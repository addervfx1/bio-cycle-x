import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepositStation } from './entities/deposit-station.entity';
import { CreateDepositStationDto } from './dto/create-deposit-station-dto';
import { UpdateDepositStationDto } from './dto/update-deposit-station-dto';


@Injectable()
export class DepositStationRepositoryService {
  constructor(
    @InjectRepository(DepositStation)
    private readonly activityRepository: Repository<DepositStation>,
  ) {}

  async findAll(): Promise<DepositStation[]> {
    return await this.activityRepository.find();
  }

  async findOne(id: number): Promise<DepositStation | null> {
    return await this.activityRepository.findOne({ where: { id } });
  }

  async create(activity: CreateDepositStationDto): Promise<DepositStation | null> {
    return await this.activityRepository.save(activity);
  }

  async update(id: number, activity: UpdateDepositStationDto): Promise<DepositStation | null> {
    await this.activityRepository.update(id, activity);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.activityRepository.delete(id);
  }
}
