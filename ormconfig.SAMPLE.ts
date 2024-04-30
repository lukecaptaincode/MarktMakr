import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Item } from './apps/api/src/model/item.entity';
import { BaseEntity } from './apps/api/src/model/base.entity';
dotenv.config();
export const ORMConfig = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [BaseEntity, Item],
  migrations: ['./apps/api/src/migrations/*{.ts,.js}'],
  synchronize: true,
  migrationsRun: true,
});
