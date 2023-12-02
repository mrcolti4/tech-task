export const handleAllCards = (state, { payload }) => {
  state.data = payload;
};

export const handleSingleCard = (state, { payload }) => {
  state.singleCard = payload;
};
