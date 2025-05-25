import { ApiProperty } from '@nestjs/swagger';
import { WasteCategory } from '../../deposit-station/entities/deposit-station.entity';


export class CreateDepositDto {
  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ enum: WasteCategory })
  category: WasteCategory;

  @ApiProperty()
  weightInKg: number;

  @ApiProperty()
  depositStationId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty({ default: true })
  status?: boolean;
}