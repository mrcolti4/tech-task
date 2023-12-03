import CardList from 'components/widgets/CardList/CardList';
import { useCatalog } from 'hooks/useCatalog';

const CatalogPage = () => {
  const { error, isLoading, cards } = useCatalog();

  return (
    <div>
      <CardList data={cards} error={error} isLoading={isLoading} />
    </div>
  );
};

export default CatalogPage;
