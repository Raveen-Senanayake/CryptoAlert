import { combineReducers } from "redux";
import currencyDataReducer from "./CurrencyDataReducer";

const initialState = {
  sidebarShow: "responsive",
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  nav: changeState,
  currencyDataReducer,
});

export default rootReducer;
