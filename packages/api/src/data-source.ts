import { DataSource } from 'typeorm';
import { Auction } from './modules/Auction/auction.entity';
import { Bid } from './modules/Bids/bid.entity';
import { User } from './modules/User/user.entity';
import { configuration } from './utils/configuration';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: configuration.database.uri,
  synchronize:
    configuration.environment === 'test' ||
    configuration.environment === 'development',
  logging: configuration.environment === 'development',
  entities: [User, Auction, Bid],
  subscribers: [],
  migrations: ['./migrations/*'],
});
