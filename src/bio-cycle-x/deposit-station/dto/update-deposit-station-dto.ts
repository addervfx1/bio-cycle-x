import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDepositStationDto } from './create-deposit-station-dto';
import { DepositStationMaterial } from '../../common/enums/deposit-station-material.enum';


export class UpdateDepositStationDto extends PartialType(CreateDepositStationDto) {
}