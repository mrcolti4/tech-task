import { useContext } from 'react';

import Modal from 'components/widgets/Modal/Modal';

import Heading from '../Heading/Heading';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import Favorite from '../Favorite/Favorite';

import { ModalContext } from '../ModalContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from 'redux/cards/slice';
import { selectFavorites } from 'redux/cards/selectors';

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.findIndex(item => item.id === data.id) !== -1;
  const toggleModal = useContext(ModalContext);

  const tags = [
    ...data?.address.split(',').splice(1),
    data?.rentalCompany,
    data?.type,
    data?.model,
    data?.id,
  ];

  const onClick = () => {
    dispatch(addToFavorites(data));
  };

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
            {data?.make}{' '}
            {data?.model.length < 8 && (
              <span className="text-primary">{data?.model}</span>
            )}
            , {data?.year}
          </div>{' '}
          <span>{data?.rentalPrice}</span>
        </Heading>
        <div className="flex flex-wrap">
          {tags.map((word, index) => (
            <Tag key={index}>{word}</Tag>
          ))}
        </div>
      </div>
      <Button
        onClick={() =>
          toggleModal(<Modal data={data} onClick={toggleModal()} />)
        }
        className="w-full"
      >
        Learn more
      </Button>
    </div>
  );
};

export default Card;
