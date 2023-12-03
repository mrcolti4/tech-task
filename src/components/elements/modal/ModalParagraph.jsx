const ModalParagraph = ({ children, className }) => {
  return (
    <div className={`flex flex-col gap-[8px] ${className}`}>{children}</div>
  );
};

export default ModalParagraph;
