import axios from "axios";
import { ListOfCoins } from "../../constants/Urls";

const DATA = [
  {
    title: "Bitcoin",
    code: "BTC",
    iconlink: "btc",
    price: "$630000",
    pricechange: "%9.77%",
    exchangename: "Binance",
    exchangelogo:
      "https://logos-download.com/wp-content/uploads/2018/04/Binance_logo_coin.png",
  },
  {
    title: "Cardano",
    code: "ADA",
    iconlink: "ada",
    price: "$3.79",
    pricechange: "%0.77%",
    exchangename: "Binance",
    exchangelogo:
      "https://logos-download.com/wp-content/uploads/2018/04/Binance_logo_coin.png",
  },
  // {
  //   title: "Polkadot",
  //   code: "DOT",
  //   iconlink: "dot",
  //   price: "$3.79",
  //   pricechange: "%0.77%",
  //   exchangename: "Kraken",
  //   exchangelogo:
  //     "data:image/png;base64,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",
  // },
];

const currencyDataReducer = (
  state = { myCoinData: DATA, globalCurrency: "AUD" },
  payload
) => {
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
    case "UPDATE_GLOBAL_CURRENCY":
      return {
        ...state,
        globalCurrency: payload.globalCurrency,
      };
    default:
      return state;
  }
};

export default currencyDataReducer;
