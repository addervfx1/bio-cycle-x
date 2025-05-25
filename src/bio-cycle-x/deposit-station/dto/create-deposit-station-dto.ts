import { ApiProperty } from '@nestjs/swagger';
import { WasteCategory } from '../entities/deposit-station.entity';


export class CreateDepositStationDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty({ enum: WasteCategory })
  category: WasteCategory;

  @ApiProperty({ default: true })
  status?: boolean;
}