import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThTransactionService } from './th_transaction.service';
import { ThTransactionController } from './th_transaction.controller';
import { ThTransactionEntity } from './th_transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ThTransactionEntity])],
  providers: [ThTransactionService],
  controllers: [ThTransactionController],
})
export class ThTransactionModule {}
