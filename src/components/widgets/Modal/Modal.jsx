import AccentWord from 'components/elements/AccentWord/AccentWord';
import Button from 'components/elements/Button/Button';
import Heading from 'components/elements/Heading/Heading';
import Tag from 'components/elements/Tag/Tag';
import ModalClose from 'components/elements/modal/ModalClose';
import ModalParagraph from 'components/elements/modal/ModalParagraph';
import ModalTag from 'components/elements/modal/ModalTag';

const Modal = ({ data, onClick }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,

    type,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
  } = data;
  const mileageStr = String(mileage)[0] + ',' + String(mileage).slice(1);
  const addressStr = address?.split(',').slice(1);

  return (
    <div className="w-[541px] p-[40px] flex flex-col gap-y-[24px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-light-prime rounded-3xl">
      <ModalClose onClick={onClick} />
      <img src={img} alt={model} className="rounded-[14px] h-[248px]" />
      <ModalParagraph className="mb-[14px]">
        <Heading className="text-[18px]">
          {make}{' '}
          {model.length < 8 && <span className="text-primary">{model}</span>},{' '}
          {year}
        </Heading>
        <div className="flex flex-wrap w-[277px]">
          {addressStr?.map(str => (
            <Tag key={str}>{str}</Tag>
          ))}
          <Tag>Id: {id}</Tag>
          <Tag>Year: {year}</Tag>
          <Tag>Type: {type}</Tag>
          <Tag>Fuel Consumption: {fuelConsumption}</Tag>
          <Tag>Engine Size: {engineSize}</Tag>
        </div>
      </ModalParagraph>
      <p>{description}</p>
      <ModalParagraph>
        <Heading className="text-sm">Accessories and functionalities:</Heading>
        <div className="flex flex-wrap">
          {[...accessories, ...functionalities].map(item => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </ModalParagraph>
      <ModalParagraph className="flex-wrap">
        <Heading className="text-sm">Rental Conditions:</Heading>
        <div className="flex flex-wrap gap-[8px]">
          {rentalConditions.split(/(?=[A-Z])/).map(str => (
            <ModalTag key={str}>{str}</ModalTag>
          ))}
          <ModalTag className="font-secondary">
            Mileage:{' '}
            <AccentWord className="font-semibold">{rentalPrice}</AccentWord>
          </ModalTag>
          <ModalTag className="font-secondary">
            Price:{' '}
            <AccentWord className="font-semibold">
              {mileage && mileageStr}
            </AccentWord>
          </ModalTag>
        </div>
      </ModalParagraph>
      <Button className="w-[168px]">
        <a href="tel:+380730000000">Rental car</a>
      </Button>
    </div>
  );
};

export default Modal;
