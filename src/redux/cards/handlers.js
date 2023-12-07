export const handleAllCards = (state, { payload }) => {
  if (state.page === 1) {
    state.data = payload;
    return;
  }
  if (state.limit > payload.length) {
    state.isNoMoreData = true;
  }
  state.data = [...state.data, ...payload];
};

export const handleSingleCard = (state, { payload }) => {
  state.singleCard = payload;
};
