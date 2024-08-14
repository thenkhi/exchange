import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeRateService } from './exchangerate.service';
import { ExchangeRateController } from './exchangerate.controller';
import { ExchangeRateEntity } from './exchange_rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeRateEntity])],
  providers: [ExchangeRateService],
  controllers: [ExchangeRateController],
})
export class ExchangeRateModule {}
