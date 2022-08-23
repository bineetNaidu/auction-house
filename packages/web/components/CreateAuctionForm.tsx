import { FC, useCallback, useState } from 'react';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';
import { useCreateAuctionMutation } from '../graphql/gen';

interface IFormState {
  itemName: string;
  itemImage: string;
  expirationDate: Date;
  startPrice: number;
}

function nextDay() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

export const CreateAuctionForm: FC = () => {
  const [createAuction] = useCreateAuctionMutation();

  const [formState, setFormState] = useState<IFormState>({
    expirationDate: nextDay(),
    itemImage: '',
    itemName: '',
    startPrice: 0,
  });

  const handleCreateAuction = useCallback(async () => {
    const { data, errors } = await createAuction({
      variables: {
        input: {
          ...formState,
          auctionOwnerId: 1,
        },
      },
      update: (cache) => {
        cache.evict({ fieldName: 'auctions' });
      },
    });

    console.log(data);
    console.error(errors);
    setFormState({
      expirationDate: nextDay(),
      itemImage: '',
      itemName: '',
      startPrice: 0,
    });
  }, [formState, createAuction]);

  return (
    <div className="bg-base-200 p-4 flex flex-col items-center justify-center rounded-lg fixed w-96">
      <h1 className="font-bold text-xl">Auction Form</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Item name?</span>
        </label>
        <input
          type="text"
          value={formState.itemName}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, itemName: e.target.value }))
          }
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Item image?</span>
        </label>
        <input
          type="text"
          placeholder="link"
          value={formState.itemImage}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, itemImage: e.target.value }))
          }
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Expiration date?</span>
        </label>

        <Flatpickr
          data-enable-time
          className="input input-bordered w-full max-w-xs"
          value={formState.expirationDate}
          onChange={([date]) => {
            setFormState((prev) => ({
              ...prev,
              expirationDate: date,
            }));
          }}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Starting Price?</span>
        </label>
        <input
          type="number"
          value={formState.startPrice}
          onChange={(e) =>
            setFormState((prev) => ({
              ...prev,
              startPrice: parseFloat(e.target.value),
            }))
          }
          placeholder="Price in dollar"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn mt-4 w-11/12" onClick={handleCreateAuction}>
        create
      </button>
    </div>
  );
};
