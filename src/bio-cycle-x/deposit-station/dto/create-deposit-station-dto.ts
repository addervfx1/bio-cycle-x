import { ApiProperty } from '@nestjs/swagger';
import { DepositStationMaterial } from '../../common/enums/deposit-station-material.enum';


export class CreateDepositStationDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty({ enum: DepositStationMaterial })
  category: DepositStationMaterial;

  @ApiProperty({ default: true })
  status?: boolean;
}