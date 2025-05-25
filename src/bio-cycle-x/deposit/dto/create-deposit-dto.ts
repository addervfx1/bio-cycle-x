import { ApiProperty } from '@nestjs/swagger';
import { RecyclableMaterial } from '../../common/enums/recyclable-material.enum';


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