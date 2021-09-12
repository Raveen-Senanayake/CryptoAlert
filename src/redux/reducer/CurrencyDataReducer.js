import axios from "axios";
import { ListOfCoins } from "../../constants/Urls";

const currencyDataReducer = (state = {}, payload) => {
    switch (payload.type) {

        case "START_LOADING":
            return {
                ...state,
                isLoading: true,
                didNotLoad: false
            };
        case "STOP_LOADING":
            return {
                ...state,
                isLoading: false,
                didNotLoad: false
            };

        case "GET_COIN_DATA":
            return {
                ...state,
                coinListData: payload.coinListData,


            }
        case "DATA_DID_NOT_LOAD":
            return {
                ...state,
                didNotLoad: true,
            }
        default:
            return state;

    };

};

// export async function fetchCoinListData(dispatch) {


//     dispatch({ type: "START_LOADING" });

//     const requestHeader = {
//         headers: {
//             // 'x-access-token': "coinranking7260b02357d69e9a20773f5b3c5ace568b894c0bef4655bd",
//         },
//         timeout: 30000,

//     };

//     await axios.get("https://api.coincap.io/v2/assets", requestHeader)
//         .then((response) => {

//             const items = response.data["data"]

//             const intialcoindata = items.map((item) => ({
//                 id: item.id,
//                 symbol: item.symbol,
//                 name: item.name
//             }))

//             dispatch({
//                 type: "GET_COIN_DATA",
//                 coinListData: intialcoindata
//             });
//         })


//         .catch((error) => {
//             console.log(error)
//             dispatch({ type: "DATA_DID_NOT_LOAD" })

//             console.log("There was an error getting coin Data");
//         });

//     // const response = await fetch("api.coincap.io/v2/assets").then(response => { console.log(response) }).catch(error => { console.log(error) })
//     // const items = await response.json()

//     dispatch({ type: "STOP_LOADING" });



// }


export default currencyDataReducer;
