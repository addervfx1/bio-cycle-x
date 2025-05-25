import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDepositStationDto } from './create-deposit-station-dto';
import { RecyclableMaterial } from '../entities/deposit-station.entity';


export class UpdateDepositStationDto extends PartialType(CreateDepositStationDto) {
    @ApiProperty({ type: () => [RecyclableMaterial], nullable: true })
    recyclableMaterials?: RecyclableMaterial[];
}