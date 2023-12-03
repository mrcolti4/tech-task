import Card from 'components/elements/Card/Card';
import LoadMore from 'components/elements/LoadMore/LoadMore';

const CardList = ({ error, isLoading, cards, onClick, isNoMoreData }) => {
  return (
    <div className="flex gap-x-[29px] gap-y-[50px] w-container mx-auto flex-wrap">
      {isLoading && 'Loading...'}
      {cards && cards.map(card => <Card key={card.id} data={card} />)}
      {error && (
        <div>
          Something went wrong! <br /> error
        </div>
      )}
      {!isNoMoreData && <LoadMore onClick={onClick}>Load more</LoadMore>}
    </div>
  );
};

export default CardList;
