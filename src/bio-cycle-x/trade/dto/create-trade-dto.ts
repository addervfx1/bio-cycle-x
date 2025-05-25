import { ApiProperty } from '@nestjs/swagger';

export class CreateTradeDto {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  itemId: number;

  @ApiProperty({ example: 2, required: false })
  quantity?: number;
}