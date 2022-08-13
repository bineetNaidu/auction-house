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
import { User } from '../User/user.entity';

@Entity({
  name: 'auctions',
})
@ObjectType()
export class Auction extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 255, name: 'item_name' })
  itemName!: string;

  @Field()
  @Column({ length: 2034, name: 'item_image' })
  itemImage!: string;

  @Field()
  @Column({ name: 'has_expired', default: false })
  hasExpired!: boolean;

  @Field()
  @Column({ name: 'expiration_date' })
  expirationDate!: Date;

  @Field()
  @Column({ name: 'start_price' })
  startPrice!: number;

  @Field()
  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  auctionOwner!: User;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
