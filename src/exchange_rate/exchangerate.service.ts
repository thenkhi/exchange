import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeRateEntity } from './exchange_rate.entity';

@Injectable()
export class ExchangeRateService {
  constructor(
    @InjectRepository(ExchangeRateEntity)
    private readonly exchangeRateRepository: Repository<ExchangeRateEntity>,
  ) {}

  async findAll(): Promise<ExchangeRateEntity[]> {
    return this.exchangeRateRepository.find();
  }

  async findOneById(id: number): Promise<ExchangeRateEntity> {
    const exchangeRate = await this.exchangeRateRepository.findOne({ where: { id } });
    
    if (!exchangeRate) {
      throw new NotFoundException(`ExchangeRate with id ${id} not found`);
    }

    return exchangeRate;
  }

  async findbyname(Currency: string): Promise<ExchangeRateEntity[]> {
    return this.exchangeRateRepository.find({ where: { Currency } });
  }

  async create(createExchangeRateDto: Partial<ExchangeRateEntity>): Promise<ExchangeRateEntity> {
    const newExchangeRate = this.exchangeRateRepository.create(createExchangeRateDto);
    return this.exchangeRateRepository.save(newExchangeRate);
  }
}
