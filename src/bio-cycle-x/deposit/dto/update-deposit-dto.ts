import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDepositDto } from './create-deposit-dto';
import { RecyclableMaterial } from '../../deposit-station/entities/deposit-station.entity';


export class UpdateDepositDto extends PartialType(CreateDepositDto) {
    @ApiProperty({ type: () => RecyclableMaterial })
    recyclableMaterial: RecyclableMaterial;
}