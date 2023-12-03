const Label = ({ children, className = '' }) => {
  return (
    <label className={`flex flex-col gap-[8px] ${className}`}>{children}</label>
  );
};

export default Label;
