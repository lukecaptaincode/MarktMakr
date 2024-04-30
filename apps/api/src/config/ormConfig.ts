import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BaseEntity } from '../model/base.entity';
import { Item } from '../model/item.entity';
dotenv.config();
const ORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [BaseEntity, Item],
  migrations: [__dirname + '../migrations/*{.ts,.js}'],
  synchronize: true,
  migrationsRun: true,
  autoLoadEntities: false,
};

export default ORMConfig;
