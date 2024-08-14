import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crossborder_exchangerate')
export class ExchangeRateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  Currency: string;

  @Column({ type: 'decimal', precision: 10, scale: 3 })
  exchange_rate: number;

  @Column({ type: 'varchar', length: 8 })
  ccy: string;

  @Column({ type: 'date' })
  lastupdate: string;
}
