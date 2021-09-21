import axios from "axios";
import { ListOfCoins } from "../../constants/Urls";

const DATA = [
  {
    title: "Bitcoin",
    code: "BTC",
    iconlink: "btc",
    price: "$630000",
    pricechange: "%9.77%",
  },
  {
    title: "Ether",
    code: "ETH",
    iconlink: "eth",
    price: "$3000",
    pricechange: "%10.77%",
  },
  {
    title: "Cardano",
    code: "ADA",
    iconlink: "ada",
    price: "$3.79",
    pricechange: "%0.77%",
  },
  {
    title: "Polkadot",
    code: "DOT",
    iconlink: "dot",
    price: "$3.79",
    pricechange: "%0.77%",
  },
];

const currencyDataReducer = (state = { myCoinData: DATA }, payload) => {
  switch (payload.type) {
    case "START_LOADING":
      return {
        ...state,
        isLoading: true,
        didNotLoad: false,
      };
    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false,
        didNotLoad: false,
      };
    case "GET_COIN_DATA":
      return {
        ...state,
        coinListData: payload.coinListData,
      };
    case "DATA_DID_NOT_LOAD":
      return {
        ...state,
        didNotLoad: true,
      };

    case "UPDATE_DATA":
      return {
        ...state,
        myCoinData: payload.updatedData,
      };
    default:
      return state;
  }
};

export default currencyDataReducer;
