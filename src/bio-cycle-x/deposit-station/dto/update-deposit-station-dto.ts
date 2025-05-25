import { PartialType } from "@nestjs/mapped-types";
import { DepositStation } from "../entities/deposit-station.entity";


export class UpdateDepositStationDto extends PartialType(DepositStation) {

}