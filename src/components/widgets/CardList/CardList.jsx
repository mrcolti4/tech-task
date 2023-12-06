import Loader from 'components/elements/Loader/Loader';
import Card from 'components/widgets/Card/Card';

const CardList = ({ error, isLoading, cards }) => {
  return (
    <div className="flex gap-x-[29px] gap-y-[50px] w-container mx-auto flex-wrap">
      {isLoading && <Loader className="w-full" />}
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
