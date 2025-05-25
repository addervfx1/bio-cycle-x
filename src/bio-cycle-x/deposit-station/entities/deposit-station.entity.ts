import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Deposit } from '../../deposit/entities/deposit.entity';

export enum WasteCategory {
  RECYCLABLE = 'Reciclável',
  ORGANIC = 'Orgânico',
  ELECTRONIC = 'Eletrônico',
  BATTERY = 'Bateria',
  MEDICATION = 'Medicamento',
  OIL = 'Óleo',
  OTHER = 'Outro',
}

@Entity('depositStation')
export class DepositStation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int', precision: 9, scale: 6 })
  latitude: number;

  @Column({ type: 'int', precision: 9, scale: 6 })
  longitude: number;

  @Column({ type: 'enum', enum: WasteCategory })
  category: WasteCategory;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => Deposit, deposit => deposit.depositStation)
  deposits: Deposit[];
}
