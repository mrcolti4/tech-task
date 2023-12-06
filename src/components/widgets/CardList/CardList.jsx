import Card from 'components/widgets/Card/Card';

const CardList = ({ error, cards }) => {
  return (
    <div className="flex gap-x-[29px] gap-y-[50px] w-container mx-auto flex-wrap">
      {cards && cards.map((card, index) => <Card key={index} data={card} />)}
      {error && (
        <div>
          Something went wrong! <br /> {error}
        </div>
      )}
    </div>
  );
};

export default CardList;
