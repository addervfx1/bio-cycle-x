import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDepositStationDto } from './create-deposit-station-dto';


export class UpdateDepositStationDto extends PartialType(CreateDepositStationDto) {

}