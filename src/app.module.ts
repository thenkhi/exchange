import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeRateModule } from './exchange_rate/exchangerate.module';
import { ThTransactionModule } from './Th_transaction/th_trasaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Default XAMPP username
      password: '', // Leave empty if you did not set a password
      database: 'lmps',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ExchangeRateModule,
    ThTransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
