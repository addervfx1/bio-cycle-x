import { ApiProperty } from '@nestjs/swagger';
import { RecyclableMaterial } from '../../deposit-station/entities/deposit-station.entity';


export class CreateDepositDto {
  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ enum: RecyclableMaterial })
  category: RecyclableMaterial;

  @ApiProperty()
  weightInKg: number;

  @ApiProperty()
  depositStationId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty({ default: true })
  status?: boolean;
}