import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExchangeRateService } from './exchangerate.service';
import { ExchangeRateEntity } from './exchange_rate.entity';

@Controller('exchangerate')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  @Get()
  findAll(): Promise<ExchangeRateEntity[]> {
    return this.exchangeRateService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number): Promise<ExchangeRateEntity> {
    return this.exchangeRateService.findOneById(id);
  }

  @Get('Currency/:Currency')
  findOneByFrommember(@Param('Currency') Currency: string): Promise<ExchangeRateEntity[]> {
    return this.exchangeRateService.findbyname(Currency);
  }

  @Post()
  create(@Body() createExchangeRateDto: Partial<ExchangeRateEntity>): Promise<ExchangeRateEntity> {
    return this.exchangeRateService.create(createExchangeRateDto);
  }
}
