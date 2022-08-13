import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateAuctionInput {
  @Field()
  itemName: string;
  @Field()
  itemImage: string;
  @Field()
  expirationDate: Date;
  @Field()
  startPrice: number;
  @Field()
  auctionOwnerId: number;
}
