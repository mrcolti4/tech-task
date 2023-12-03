import Card from 'components/elements/Card/Card';
import LoadMore from 'components/elements/LoadMore/LoadMore';
import { useCatalog } from 'hooks/useCatalog';
import { useLoadMore } from 'hooks/useLoadMore';

const CardList = () => {
  const { error, isLoading, cards } = useCatalog();
  const { onClick, isNoMoreData } = useLoadMore();

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
