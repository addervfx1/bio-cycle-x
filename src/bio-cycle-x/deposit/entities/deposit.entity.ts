import { RecyclableMaterial, DepositStation } from "src/bio-cycle-x/deposit-station/entities/deposit-station.entity";
import { User } from "src/bio-cycle-x/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";


@Entity('deposit')
export class Deposit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'enum', enum: RecyclableMaterial })
  category: RecyclableMaterial;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  weightInKg: number;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ name: 'depositStationId', type: 'int', nullable: false })
  depositStationId: number;  
  
  @Column({ name: 'userId', type: 'int', nullable: false })
  userId: number;  

  @ManyToOne(() => User, user => user.deposit)
  @JoinColumn({ name: 'userId' })
  users: User;

  @ManyToOne(() => DepositStation, station => station.deposits)
  @JoinColumn({ name: 'depositStationId' })
  depositStation: DepositStation;
}
