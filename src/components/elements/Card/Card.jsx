import { useState } from 'react';

import Heading from '../Heading/Heading';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import Favorite from '../Favorite/Favorite';

const Card = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onClick = () => setIsFavorite(!isFavorite);

  const string =
    'Kiev Ukraine LuxuryCarRentals Premium Suv Enclave 9582 Powerliftgate';

  return (
    <div className="w-[274px]">
      <div className="mb-7">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg"
            alt="car"
            className="h-cardImg rounded-[14px] mb-[14px]"
          />
          <button
            onClick={onClick}
            type="button"
            className="absolute top-[14px] right-[14px]"
          >
            <Favorite isFavorite={isFavorite} />
          </button>
        </div>
        <Heading className="flex justify-between mb-[8px]">
          Lorem, ipsum dolor. <span>$40</span>
        </Heading>
        <div className="flex flex-wrap">
          {string.split(' ').map(word => (
            <Tag>{word}</Tag>
          ))}
        </div>
      </div>
      <Button>Learn more</Button>
    </div>
  );
};

export default Card;
