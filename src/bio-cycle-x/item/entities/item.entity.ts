import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Trade } from '../../trade/entities/trade.entity';

@Entity('item')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'boolean', default: true })
  tradeEnabled: boolean;

  @OneToMany(() => Trade, trade => trade.item)
  trades: Trade[];
}