import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ThTransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transactionType: string;

  @Column({ type: 'varchar', length: 30 })
  amount: string;

  @Column()
  date: Date;
}
