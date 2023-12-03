import Card from 'components/elements/Card/Card';

const CardList = ({ data, error, isLoading }) => {
  return (
    <div className="flex gap-[29px] w-container mx-auto flex-wrap">
      {isLoading && 'Loading...'}
      {data && data.map(card => <Card data={card} />)}
      {error && (
        <div>
          Something went wrong! <br /> error
        </div>
      )}
    </div>
  );
};

export default CardList;
