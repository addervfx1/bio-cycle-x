import { Injectable } from '@nestjs/common';
import { DepositStationRepositoryService } from './deposit-station.repository.service';
import { DepositStation } from './entities/deposit-station.entity';
import { CreateDepositStationDto } from './dto/create-deposit-station-dto';
import { UpdateDepositStationDto } from './dto/update-deposit-station-dto';

@Injectable()
export class DepositStationService {
  constructor(private readonly activityRepositoryService: DepositStationRepositoryService) {}

  async findAll(): Promise<DepositStation[]> {
    return await this.activityRepositoryService.findAll();
  }

  async findOne(id: number): Promise<DepositStation | null> {
    return await this.activityRepositoryService.findOne(id);
  }

  async create(activity: CreateDepositStationDto): Promise<DepositStation | null> {
    return await this.activityRepositoryService.create(activity);
  }

  async update(id: number, activity: UpdateDepositStationDto): Promise<DepositStation | null> {
    return await this.activityRepositoryService.update(id, activity);
  }

  async remove(id: number): Promise<void> {
    return await this.activityRepositoryService.remove(id);
  }
}
