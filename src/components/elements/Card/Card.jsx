import { useState } from 'react';

import Heading from '../Heading/Heading';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import Favorite from '../Favorite/Favorite';

const Card = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onClick = () => setIsFavorite(!isFavorite);

  const tags = [
    ...data?.address.split(',').splice(1),
    data?.rentalCompany,
    data?.type,
    data?.model,
    data?.id,
  ];

  return (
    <div className="w-[274px]">
      <div className="mb-7">
        <div className="relative">
          <img
            src={data?.img}
            alt={data?.make}
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
          <div>
            {data?.make} <span className="text-primary">{data?.model}</span>,{' '}
            {data?.year}
          </div>{' '}
          <span>{data?.rentalPrice}</span>
        </Heading>
        <div className="flex flex-wrap">
          {tags.map((word, index) => (
            <Tag key={index}>{word}</Tag>
          ))}
        </div>
      </div>
      <Button>Learn more</Button>
    </div>
  );
};

export default Card;
