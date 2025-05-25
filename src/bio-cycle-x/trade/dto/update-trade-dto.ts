import { PartialType } from "@nestjs/mapped-types";
import { Trade } from "../entities/trade.entity";


export class UpdateTradeDto extends PartialType(Trade) {

}