import axios from "axios";


class Coin {
  public name: string;
  public code: string;
  public exchange: string;

  constructor(theName: string, theCode: string, theExchange: string) {
    this.name = theName;
    this.code = theCode;
    this.exchange = theExchange;
  }
}

class CoinPrice {
  public base: string;
  public coinID: string;
  public last: number;
  public target : string;
  public targetCoinID : string;
  public volume  : number;

  constructor(theBase: string, theCoinID: string, theLast: number , theTarget: string , theTargetCoin : string , theVolume : number ) {
    this.base = theBase;
    this.coinID = theCoinID;
    this.last = theLast;
    this.target = theTarget;
    this.targetCoinID = theTargetCoin; 
    this.volume = theVolume;
  
  };
}




export const getPriceOfCurrency = async (priceArray :any[] | [] , fiat :string)  => {

  var cryptoList : string = ""
  var exchangeList :string = ""


  if (priceArray.length >0 && priceArray) {

    for (let i = 0 ; i < priceArray.length ; i ++) {

      cryptoList += priceArray[i].name.toLowerCase()+","
      exchangeList += priceArray[i].exchange.toLowerCase()+","  

      if (i == priceArray.length-1) {
        cryptoList += priceArray[i].name.toLowerCase()
        exchangeList += priceArray[i].exchange.toLowerCase()
      }
    }

    var url = "https://a7ohlagfl7.execute-api.us-east-2.amazonaws.com/staging/currency?fiat="+fiat+"&cryptolist="+cryptoList+"&exchangelist="+exchangeList
    
    try{
      const response = await axios.get(url)
      const data = response.data


      var returnArray : any[]

      for (let i = 0 ; i < data.length ; i ++) {
        let x = data[i]
        const y = new CoinPrice(x.base,x.coin_id,x.last , x.target , x.target_coin_id , x.volume)
        returnArray.push(y)
      }

      console.log(returnArray)
    
    } catch(err){
      console.log(err)
    }
  }

}