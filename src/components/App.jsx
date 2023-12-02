import { useEffect } from 'react';
import Card from './elements/Card/Card';
import { useDispatch } from 'react-redux';
import { getAllCardsThunk } from 'redux/cards/thunks';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCardsThunk());
  }, []);

  return (
    <div>
      <Card />
    </div>
  );
};
