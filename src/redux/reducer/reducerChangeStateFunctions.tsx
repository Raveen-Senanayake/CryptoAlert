export const dispatchAddNewCard = (updatedCards, dispatch) => {
  dispatch({ type: "UPDATE_DATA", updatedData: updatedCards });
};

export const dispatchChangeGlobalCurrency = (newCurrency, dispatch) => {
  dispatch({ type: "UPDATE_GLOBAL_CURRENCY", globalCurrency: newCurrency });
};
