import AccentWord from 'components/elements/AccentWord/AccentWord';
import Button from 'components/elements/Button/Button';
import Heading from 'components/elements/Heading/Heading';
import Tag from 'components/elements/Tag/Tag';
import ModalClose from 'components/elements/modal/ModalClose';
import ModalParagraph from 'components/elements/modal/ModalParagraph';
import ModalTag from 'components/elements/modal/ModalTag';

const Modal = ({ data }) => {
  const { address } = data;
  const addressStr = address?.split(',').slice(1);

  return (
    <div className="w-[541px] p-[40px] flex flex-col gap-y-[24px] relative">
      <ModalClose />
      <img src={data?.img} alt={data?.model} className="rounded-[14px]" />
      <ModalParagraph className="mb-[14px]">
        <Heading className="text-[18px]">
          {data?.make}{' '}
          {data?.model.length < 8 && (
            <span className="text-primary">{data?.model}</span>
          )}
          , {data?.year}
        </Heading>
        <div className="flex flex-wrap w-[277px]">
          {addressStr?.map(str => (
            <Tag>{str}</Tag>
          ))}
          <Tag>Id: {data?.id}</Tag>
          <Tag>Year: {data?.year}</Tag>
          <Tag>Type: {data?.type}</Tag>
          <Tag>Fuel Consumption: {data?.fuelConsumption}</Tag>
          <Tag>Engine Size: {data?.engineSize}</Tag>
        </div>
      </ModalParagraph>
      <p>{data?.description}</p>
      <ModalParagraph>
        <Heading className="text-sm">Accessories and functionalities:</Heading>
        <div className="flex flex-wrap">
          {[...data?.accessories, ...data?.functionalities].map(item => (
            <Tag>{item}</Tag>
          ))}
        </div>
      </ModalParagraph>
      <ModalParagraph className="flex-wrap">
        <Heading className="text-sm">Rental Conditions:</Heading>
        <div className="flex flex-wrap gap-[8px]">
          {data?.rentalConditions.split(/(?=[A-Z])/).map(str => (
            <ModalTag>{str}</ModalTag>
          ))}
          <ModalTag className="font-secondary">
            Mileage:{' '}
            <AccentWord className="font-semibold">
              {data?.rentalPrice}
            </AccentWord>
          </ModalTag>
          <ModalTag className="font-secondary">
            Price:{' '}
            <AccentWord className="font-semibold">{data?.mileage}</AccentWord>
          </ModalTag>
        </div>
      </ModalParagraph>
      <Button className="w-[168px]">Rental car</Button>
    </div>
  );
};

export default Modal;
