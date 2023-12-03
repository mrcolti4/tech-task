import sprite from '../../assets/sprite.svg';

const ModalClose = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="transition duration-150 ease-in hover:scale-125 active:scale-100 flex justify-center items-center w-[24px] h-[24px] rounded-[50%] absolute top-4 right-4"
    >
      <svg className="stroke-dark-100 w-[24px] h-[24px]">
        <use href={sprite + '#close'}></use>
      </svg>
    </button>
  );
};

export default ModalClose;
