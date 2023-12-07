import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { setFilters } from 'redux/cards/slice';
import { selectAllBrands, selectAllPrices } from 'redux/cards/selectors';

import Select from 'components/elements/form/Select/Select';
import Input from 'components/elements/form/Input/Input';
import Label from 'components/elements/form/Label/Label';
import Button from 'components/elements/Button/Button';

const CardFilter = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectAllBrands);
  const prices = useSelector(selectAllPrices);
  const { register, handleSubmit, setValue } = useForm();

  return (
    <form className="flex gap-[18px] items-end justify-center mb-[50px] mx-auto">
      <Label>
        Car brand
        <Select
          register={register('brand')}
          className="w-[224px] bg-[180px]"
          setValue={setValue}
        >
          <option value="">Enter the text</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          register={register('price')}
          className="w-[125px] bg-[80px]"
          setValue={setValue}
        >
          <option value="">To: </option>
          {prices?.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </Select>
      </Label>
      <Label className="relative">
        Car mileage / km
        <div className="flex">
          <Input
            className="rounded-e-none pl-[65px]"
            register={register('from')}
            setValue={setValue}
          >
            From:
          </Input>
          <span className="after:absolute after:content-[''] after:inline-block after:w-[1px] after:h-[48px] after:bg-gray-20 after:z-10 after:bottom-[0px]" />
          <Input
            className="rounded-s-none pl-[45px]"
            register={register('to')}
            setValue={setValue}
          >
            To:
          </Input>
        </div>
      </Label>
      <Button
        onClick={handleSubmit(data => dispatch(setFilters(data)))}
        type="button"
        className="py-[12px] px-[41px]"
      >
        Search
      </Button>
      <Button
        type="button"
        onClick={() => dispatch(setFilters({}))}
        className="py-[12px] px-[41px]"
      >
        Clear filters
      </Button>
    </form>
  );
};

export default CardFilter;
