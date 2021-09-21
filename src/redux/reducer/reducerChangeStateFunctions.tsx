export const dispatchAddNewCard = (Data, newEntry, dispatch) => {
  const tempNewData = [...Data];

  if (tempNewData.filter((e) => e.code === newEntry.code)) {
    tempNewData.push(newEntry);
  } else {
  }

  dispatch({ type: "UPDATE_DATA", updatedData: tempNewData });
};
