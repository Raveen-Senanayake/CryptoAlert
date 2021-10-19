import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import Card from "../components/Card";
import styled from "styled-components/native";
import { connect } from "react-redux";

import { getPriceOfCurrency } from "../services/Services";

const StyledRoot = styled.View`
  padding: 30px 15px;
  max-width: 100%;
  max-height: 100%;
`;
const StyledContainer = styled.View`
  max-width: 100%;
  max-height: 100%;
`;

type ItemProps = {
  title: string;
  price: string;
  code: string;
  iconlink: string;
  pricechange: string;
};

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

const Item = ({ title, code, price, pricechange, iconlink }: ItemProps) => {
  const iconLinkValue = `https://cryptoicon-api.vercel.app/api/icon/${iconlink}`;
  return (
    <StyledContainer>
      <Card
        title={title}
        code={code}
        price={price}
        pricechange={pricechange}
        iconlink={iconLinkValue}
      />
    </StyledContainer>
  );
};

const MyCoins = ({
  navigation,
  route,
  myCoinData,
  globalCurrency,
  dispatch,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(null);

  const [state, setState] = useState({
    data: [] as any,
    priceArray: [] as any,
  });

  useEffect(() => {
    var priceCallArray = myCoinData.map(
      (item: any) => new Coin(item.title, item.code, item.exchangename)
    );

    setState({ data: myCoinData, priceArray: priceCallArray });
  }, [myCoinData]);

  useEffect(() => {
    const interval = setInterval(() => {
      getPriceOfCurrency(state.priceArray, globalCurrency);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      code={item.code}
      price={item.price}
      pricechange={item.pricechange}
      iconlink={item.iconlink}
    />
  );

  return (
    <StyledRoot>
      <SafeAreaView style={{ height: "100%" }}>
        <FlatList
          data={state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
          extraData={selectedId}
        />
      </SafeAreaView>
    </StyledRoot>
  );
};

function mapStateToProps(state) {
  return {
    myCoinData: state.currencyDataReducer.myCoinData,
    globalCurrency: state.currencyDataReducer.globalCurrency,
  };
}

export default connect(mapStateToProps)(MyCoins);
