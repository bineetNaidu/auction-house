import { DataSource } from 'typeorm';
import { User } from './modules/User/user.entity';
import { configuration } from './utils/configuration';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: configuration.database.uri,
  synchronize:
    configuration.environment === 'test' ||
    configuration.environment === 'development',
  logging: configuration.environment === 'development',
  entities: [User],
  subscribers: [],
  migrations: [],
});
