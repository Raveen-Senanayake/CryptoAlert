import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import Card from "../components/Card";
import styled from "styled-components/native";

const StyledRoot = styled.View`
  padding: 30px 15px;
  max-width: 100%;
  max-height: 100%;
`;
const StyledContainer = styled.View`
  max-width: 100%;
  max-height: 100%;
`;

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

type ItemProps = {
  title: string;
  price: string;
  code: string;
  iconlink: string;
  pricechange: string;
};

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

const MyCoins = ({ navigation, route }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [state, setState] = useState({
    data: DATA,
  });

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

export default MyCoins;
