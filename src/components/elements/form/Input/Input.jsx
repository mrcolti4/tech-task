import { useSetDefFiltersVal } from 'hooks/useSetDefFiltersVal';

const Input = ({ children, className = '', register, setValue }) => {
  const { fieldName } = useSetDefFiltersVal(register, setValue);
  const handleChange = ({ target: { value } }) => {
    let num = value.replace(/\D/g, '');
    if (num.length > 3) {
      num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    setValue(fieldName, num);
  };

  return (
    <div className="relative text-dark-100 font-medium">
      <input
        {...register}
        type="text"
        className={`bg-light-cloud py-[12px] px-[18px] rounded-[14px] w-[160px] ${className}`}
        onChange={handleChange}
      />
      <span className="absolute left-[18px] top-[50%] translate-y-[-50%]">
        {children}
      </span>
    </div>
  );
};

export default Input;
