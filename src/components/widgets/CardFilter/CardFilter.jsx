import { useForm } from 'react-hook-form';

import brands from '../../../makes.json';
import Select from 'components/elements/Select/Select';
import Input from 'components/elements/Input/Input';
import Label from 'components/elements/Label/Label';
import Button from 'components/elements/Button/Button';

const CardFilter = ({ setFilters }) => {
  const { register, handleSubmit } = useForm();
  const prices = [];
  for (let i = 10; i < 500; i += 10) {
    prices.push(i);
  }

  return (
    <form className="flex gap-[18px] items-end justify-center mb-[50px] mx-auto">
      <Label>
        Car brand
        <Select register={register('brand')} className="w-[224px] bg-[180px]">
          <option value="">Enter the text</option>
          {brands.map(brand => (
            <option value={brand}>{brand}</option>
          ))}
        </Select>
      </Label>
      <Label>
        Price/ 1 hour
        <Select register={register('price')} className="w-[125px] bg-[80px]">
          <option value="">To: </option>
          {prices.map(price => (
            <option value={price}>{price}</option>
          ))}
        </Select>
      </Label>
      <Label className="relative">
        Car mileage / km
        <div>
          <Input
            className="rounded-e-none"
            placeholder="From: "
            type="number"
            pattern="[0-9]*"
            register={register('fromMileage')}
          />
          <span className="after:absolute after:content-[''] after:inline-block after:w-[1px] after:h-[52px] after:bg-gray-20 after:bottom-[0px]" />
          <Input
            className="rounded-s-none"
            placeholder="To: "
            type="number"
            pattern="[0-9]*"
            register={register('toMileage')}
          />
        </div>
      </Label>
      <Button
        onClick={handleSubmit(data => setFilters(data))}
        type="button"
        className="w-[136px] h-[48px]"
      >
        Search
      </Button>
    </form>
  );
};

export default CardFilter;
