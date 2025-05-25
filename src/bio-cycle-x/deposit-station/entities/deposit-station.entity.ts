import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Deposit } from '../../deposit/entities/deposit.entity';

export enum RecyclableMaterial {
  PAPER = 'Papel',
  PLASTIC = 'Plástico',
  METAL = 'Metal',
  GLASS = 'Vidro',
}

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

  @Column({ type: 'enum', enum: RecyclableMaterial })
  category: RecyclableMaterial;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => Deposit, deposit => deposit.depositStation)
  deposits: Deposit[];
}
