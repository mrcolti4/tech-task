import Card from 'components/elements/Card/Card';

const CardList = ({ error, isLoading, cards }) => {
  return (
    <div className="flex gap-x-[29px] gap-y-[50px] w-container mx-auto flex-wrap">
      {isLoading && 'Loading...'}
      {cards && cards.map(card => <Card key={card.id} data={card} />)}
      {error && (
        <div>
          Something went wrong! <br /> error
        </div>
      )}
    </div>
  );
};

export default CardList;
