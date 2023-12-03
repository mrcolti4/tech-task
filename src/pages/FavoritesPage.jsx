import CardList from 'components/widgets/CardList/CardList';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavorites } from 'redux/cards/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <section className="container page__section">
      <Link to="/catalog">Back to catalog</Link>
      <h2 className="text-3xl mb-10">Your favorite cars</h2>
      <CardList cards={favorites} />
    </section>
  );
};

export default FavoritesPage;
