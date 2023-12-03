export const handleAllCards = (state, { payload }) => {
  if (state.limit > payload.length) {
    state.isNoMoreData = true;
  }
  state.data = [...state.data, ...payload];
};

export const handleSingleCard = (state, { payload }) => {
  state.singleCard = payload;
};
