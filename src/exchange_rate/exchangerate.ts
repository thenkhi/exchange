import { Module } from '@nestjs/common';
import { ExchangeRateService } from './exchangerate.service';
import { ExchangeRateController } from './exchangerate.controller';


@Module({
  providers: [ExchangeRateService],
  controllers: [ExchangeRateController],
})
export class ExchangeRateModule {}