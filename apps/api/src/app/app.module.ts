import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ORMConfig from '../config/ormConfig';
import { DataSource } from 'typeorm';
import { Logger } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(ORMConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    Logger.log('App module up');
  }
}
