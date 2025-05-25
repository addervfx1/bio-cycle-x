import { Deposit } from 'src/bio-cycle-x/deposit/entities/deposit.entity';
import { Trade } from 'src/bio-cycle-x/trade/entities/trade.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'int', default: 0 })
  score: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToMany(() => Deposit, (deposit) => deposit.users)
  deposit: Deposit[];

  @OneToMany(() => Trade, (trade) => trade.users)
  trade: Trade[];
}
