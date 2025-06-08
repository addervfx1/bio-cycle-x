import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user-dto';
import { UserRole } from '../entities/user.entity';


export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ enum: UserRole, required: false })
  role?: UserRole;
}