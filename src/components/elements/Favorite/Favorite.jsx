import sprite from '../../assets/sprite.svg';

const Favorite = ({ isFavorite }) => {
  return (
    <svg
      className={`fill-none stroke-light-prime w-[18px] h-[18px] hover:scale-125 transition ease-in duration-150 active:scale-100 ${
        isFavorite ? 'fill-primary stroke-primary' : null
      }`}
    >
      <use href={sprite + '#heart'}></use>
    </svg>
  );
};

export default Favorite;
