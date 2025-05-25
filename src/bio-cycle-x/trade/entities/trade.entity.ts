import { Item } from "src/bio-cycle-x/item/entities/item.entity";
import { User } from "src/bio-cycle-x/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";


@Entity('trade')
export class Trade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'userId', type: 'int', nullable: false })
  userId: number;  

  @Column({ name: 'itemId', type: 'int', nullable: false })
  itemId: number;  

  @ManyToOne(() => User, user => user.deposit)
  @JoinColumn({ name: 'userId' })
  users: User;

  @ManyToOne(() => Item, item => item.trades)
  @JoinColumn({ name: 'itemId' })
  item: Item;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

}
