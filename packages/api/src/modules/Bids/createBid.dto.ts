import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateBidInput {
  @Field()
  hasBuyout: boolean;
  @Field()
  bidPrice: number;
  @Field()
  auctionId: number;
  @Field()
  bidderId: number;
}
