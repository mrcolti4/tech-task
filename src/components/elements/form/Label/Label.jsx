const Label = ({ children, className = '' }) => {
  return (
    <label className={`flex flex-col gap-[8px] text-gray-100 ${className}`}>
      {children}
    </label>
  );
};

export default Label;
