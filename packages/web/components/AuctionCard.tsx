import { FC } from 'react';
import Image from 'next/image';
import type {
  AuctionFragmentFragment,
  UserFragmentFragment,
} from '../graphql/gen';
import Link from 'next/link';

interface AuctionProps {
  auction: AuctionFragmentFragment & {
    auctionOwner: Pick<
      UserFragmentFragment,
      'avatar' | '__typename' | 'id' | 'name'
    >;
  };
}

export const AuctionCard: FC<AuctionProps> = ({ auction }) => {
  return (
    <div className="card w-64 bg-base-200 shadow-xl">
      <figure className="pt-5">
        <Image
          className="rounded"
          layout="intrinsic"
          height={140}
          width={200}
          src={auction.itemImage}
          alt={auction.itemName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{auction.itemName}</h2>
        <div className="card-side">
          <p>Starting Bid at: ${auction.startPrice}</p>
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-primary btn-sm">Bid Now</button>
          <Link href={`/@/u/${auction.auctionOwner.id}`}>
            <a className="btn btn-sm">
              <img
                className="avatar w-6 rounded-lg mr-2"
                src={auction.auctionOwner.avatar}
                alt={auction.auctionOwner.name}
              />
              <span>{auction.auctionOwner.name}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
