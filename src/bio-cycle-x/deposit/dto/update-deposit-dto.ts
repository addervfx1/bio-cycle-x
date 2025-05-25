import { PartialType } from "@nestjs/mapped-types";
import { Deposit } from "../entities/deposit.entity";


export class UpdateDepositDto extends PartialType(Deposit) {

}