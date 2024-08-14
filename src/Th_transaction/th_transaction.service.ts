import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ThTransactionService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<any[]> {
    return this.dataSource.query('SELECT * FROM th_transaction');
  }

  async findbybanks(Currency: string): Promise<any> {
    return this.dataSource.query('SELECT fromuserfullname, merchantname, dstamount, txtime FROM th_transaction WHERE Currency = ? and txtime>=CURDATE() and result="OK" and method="payment"', [Currency]);
  }

  async findsumamountbybanks(Currency: string): Promise<any> {
    return this.dataSource.query('SELECT SUM(dstamount), Currency FROM th_transaction WHERE Currency = ? and txtime>=CURDATE() and result="OK" and method="payment"', [Currency]);
  }


  async findTransactionByDate(Currency: string, txtime: string): Promise<any> {
    return this.dataSource.query('SELECT fromuserfullname, merchantname, dstamount, txtime FROM th_transaction WHERE Currency = ? and txtime>=? and result="OK" and method="payment"', [Currency, txtime]);
  }
}