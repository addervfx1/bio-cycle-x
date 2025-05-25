import { ApiProperty } from '@nestjs/swagger';
import { RecyclableMaterial } from '../entities/deposit-station.entity';


export class CreateDepositStationDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty({ enum: RecyclableMaterial })
  category: RecyclableMaterial;

  @ApiProperty({ default: true })
  status?: boolean;
}