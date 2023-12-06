import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'components/widgets/Modal/Modal';
import AccentWord from 'components/elements/AccentWord/AccentWord';

import Heading from '../../elements/Heading/Heading';
import Tag from '../../elements/Tag/Tag';
import Button from '../../elements/Button/Button';
import Favorite from '../../elements/Favorite/Favorite';
import { ModalContext } from '../../elements/ModalContext';

import { addToFavorites } from 'redux/cards/slice';
import { selectFavorites } from 'redux/cards/selectors';

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.findIndex(item => item.id === data.id) !== -1;

  const toggleModal = useContext(ModalContext);

  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,

    type,
    rentalCompany,
  } = data;

  const tags = [
    ...address.split(',').splice(1),
    rentalCompany,
    type,
    model,
    id,
  ];

  const onClick = () => {
    dispatch(addToFavorites(data));
  };

  return (
    <div className="w-[274px]">
      <div className="mb-7">
        <div className="relative">
          <img
            src={img}
            alt={make}
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
            {make} {model.length < 8 && <AccentWord>{model}</AccentWord>},{' '}
            {year}
          </div>{' '}
          <span>{rentalPrice}</span>
        </Heading>
        <div className="flex flex-wrap">
          {tags.map((word, index) => (
            <Tag key={index}>{word}</Tag>
          ))}
        </div>
      </div>
      <Button
        onClick={() =>
          toggleModal(<Modal data={data} onClick={() => toggleModal()} />)
        }
        className="w-full"
      >
        Learn more
      </Button>
    </div>
  );
};

export default Card;
