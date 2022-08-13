import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Auction } from './auction.entity';
import { User } from '../User/user.entity';
import { CreateAuctionInput } from './createAuction.dto';

@Resolver()
export class AuctionResolvers {
  @Query(() => [Auction])
  getAuctionsList(): Promise<Auction[]> {
    return Auction.find({
      where: {
        hasExpired: false,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }

  @Query(() => Auction, { nullable: true })
  getAuction(@Arg('id') id: number): Promise<Auction | null> {
    return Auction.findOne({ where: { id } });
  }

  @Mutation(() => Auction)
  async createAuction(
    @Arg('input') input: CreateAuctionInput
  ): Promise<Auction> {
    const auctionOwner = await User.findOne({
      where: { id: input.auctionOwnerId },
    });
    if (!auctionOwner) {
      throw new Error('Auction User was not found');
    }
    const auction = Auction.create({
      itemName: input.itemName,
      itemImage: input.itemImage,
      expirationDate: input.expirationDate,
      startPrice: input.startPrice,
      auctionOwner,
    });
    await auction.save();
    return auction;
  }

  @Mutation(() => Boolean)
  async deleteAuction(@Arg('id') id: number): Promise<boolean> {
    const auction = await Auction.findOne({ where: { id } });
    if (!auction) {
      return false;
    }
    await auction.remove();
    return true;
  }
}
