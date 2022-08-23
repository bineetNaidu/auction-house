import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Auction } from '../Auction/auction.entity';
import { User } from '../User/user.entity';

@Entity({
  name: 'bids',
})
@ObjectType()
export class Bid extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'has_buyout', default: false })
  hasBuyout!: boolean;

  @Field()
  @Column({ name: 'bid_price' })
  bidPrice!: number;

  @Field()
  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  bidder!: User;

  @Field()
  @ManyToOne(() => Auction, (auction) => auction.id, { cascade: true })
  auction!: Auction;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
