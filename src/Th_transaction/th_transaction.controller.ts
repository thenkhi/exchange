import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ThTransactionService } from './th_transaction.service';


@Controller('transaction')
export class ThTransactionController {
  constructor(private readonly th_tansaction: ThTransactionService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.th_tansaction.findAll();
  }

  @Get('Currency/:Currency')
  findOne(@Param('Currency') Currency: string): Promise<any> {
    console.log('Currency:', Currency)
    return this.th_tansaction.findbybanks(Currency);
  }
  @Get('amount/:Currency')
  findSumAmount(@Param('Currency') Currency: string): Promise<any> {
    console.log('Currency:', Currency)
    return this.th_tansaction.findsumamountbybanks(Currency);
  }


  @Get('Currency/:Currency/txtime/:txtime')
  findTransactioByDate(@Param('Currency') Currency: string, @Param('txtime') txtime: string): Promise<any> {
    console.log('Currency and date: ', Currency, txtime)
    return this.th_tansaction.findTransactionByDate(Currency, txtime);
  }
}