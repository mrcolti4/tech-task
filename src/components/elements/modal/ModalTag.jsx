const ModalTag = ({ children, className = '' }) => {
  return (
    <span
      className={`bg-light-semi text-dark-secondary text-xs leading-[18px] py-[7px] px-[14px] rounded-[35px] ${className}`}
    >
      {children}
    </span>
  );
};

export default ModalTag;
