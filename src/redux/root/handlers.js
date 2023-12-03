export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
