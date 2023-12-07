import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://656b837cdac3630cf7282f7f.mockapi.io/',
});

const getAllCards = async page => {
  const { data } = await instance.get('adverts', {
    params: { page, limit: 12 },
  });

  return data;
};

const cardsApi = {
  getAllCards,
};

export default cardsApi;
