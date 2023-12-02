import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://656b837cdac3630cf7282f7f.mockapi.io/',
});

const getAllCards = async () => {
  const { data } = await instance.get('adverts');

  return data;
};

const getSingleCard = async id => {
  const { data } = await instance.get(`adverts/${id}`);

  return data;
};

const addToFavorite = async id => {};

export default {
  getAllCards,
  getSingleCard,
};
