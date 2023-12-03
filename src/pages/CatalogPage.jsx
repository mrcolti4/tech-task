import { Link } from 'react-router-dom';

import { useCatalog } from 'hooks/useCatalog';
import { useCatalogFilters } from 'hooks/useCatalogFilters';
import { useLoadMore } from 'hooks/useLoadMore';

import CardFilter from 'components/widgets/CardFilter/CardFilter';
import CardList from 'components/widgets/CardList/CardList';
import LoadMore from 'components/elements/LoadMore/LoadMore';

const CatalogPage = () => {
  const { error, isLoading, cards } = useCatalog();
  const { onClick, isNoMoreData } = useLoadMore();
  const { data, filters, setFilters } = useCatalogFilters(cards);

  return (
    <section className="container page__section">
      <Link to="/favorites">To favorites</Link>
      <CardFilter filters={filters} setFilters={setFilters} />
      <CardList
        error={error}
        isLoading={isLoading}
        cards={data}
        onClick={onClick}
        isNoMoreData={isNoMoreData}
      />
      {!isNoMoreData && (
        <LoadMore onClick={onClick} className="block mx-auto">
          Load more
        </LoadMore>
      )}
    </section>
  );
};

export default CatalogPage;
