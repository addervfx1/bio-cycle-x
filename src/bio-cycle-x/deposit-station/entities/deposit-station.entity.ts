import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Deposit } from '../../deposit/entities/deposit.entity';
import { DepositStationMaterial } from '../../common/enums/deposit-station-material.enum';

@Entity('depositStation')
export class DepositStation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'double precision' })
  latitude: number;

  @Column({ type: 'double precision' })
  longitude: number;

  @Column({ type: 'enum', enum: DepositStationMaterial })
  category: DepositStationMaterial;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @OneToMany(() => Deposit, (deposit) => deposit.depositStation)
  deposits: Deposit[];
}
