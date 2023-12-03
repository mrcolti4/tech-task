import CardFilter from 'components/widgets/CardFilter/CardFilter';
import CardList from 'components/widgets/CardList/CardList';
import { useCatalog } from 'hooks/useCatalog';
import { useCatalogFilters } from 'hooks/useCatalogFilters';
import { useLoadMore } from 'hooks/useLoadMore';

const CatalogPage = () => {
  const { error, isLoading, cards } = useCatalog();
  const { onClick, isNoMoreData } = useLoadMore();
  const { data, filters, setFilters } = useCatalogFilters(cards);

  return (
    <section className="container">
      <CardFilter filters={filters} setFilters={setFilters} />
      <CardList
        error={error}
        isLoading={isLoading}
        cards={data}
        onClick={onClick}
        isNoMoreData={isNoMoreData}
      />
    </section>
  );
};

export default CatalogPage;
