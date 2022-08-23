import { Bid } from './bid.entity';
import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { CreateBidInput } from './createBid.dto';
import { User } from '../User/user.entity';
import { Auction } from '../Auction/auction.entity';

@Resolver()
export class BidResolvers {
  @Query(() => [Bid])
  async getBidsByAuctions(@Arg('auctionid') auctionid: number): Promise<Bid[]> {
    const bids = await Bid.find({
      where: { auction: { id: auctionid } },
      order: { createdAt: 'DESC' },
      relations: ['auction', 'bidder'],
    });

    return bids;
  }

  @Mutation(() => Bid)
  async createBid(@Arg('input') input: CreateBidInput): Promise<Bid> {
    const hasBid = await Bid.findOne({
      where: {
        auction: { id: input.auctionId },
        bidder: { id: input.bidderId },
      },
    });
    if (hasBid) throw new Error('You can only bid once!');
    const bidder = await User.findOne({ where: { id: input.bidderId } });
    if (!bidder) throw new Error('the user was not found who bidded!');
    const auction = await Auction.findOne({ where: { id: input.auctionId } });
    if (!auction) throw new Error('Auction was not found!');

    const bid = await Bid.create({
      auction,
      bidder,
      bidPrice: input.bidPrice,
      hasBuyout: input.hasBuyout,
    }).save();

    return bid;
  }
}
