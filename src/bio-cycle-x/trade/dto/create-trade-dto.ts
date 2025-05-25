import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from "@nestjs/mapped-types";
import { Trade } from "../entities/trade.entity";


export class CreateTradeDto extends PartialType(Trade) {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  itemId: number;

  @ApiProperty({ example: 2, required: false })
  quantity?: number;

  // Adicione outros campos e anotações conforme necessário
}