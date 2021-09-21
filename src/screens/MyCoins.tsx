import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import Card from "../components/Card";
import styled from "styled-components/native";
import { connect } from "react-redux";

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

const MyCoins = ({ navigation, route, myCoinData }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    setState({ data: myCoinData });
  }, [myCoinData]);

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
  };
}

export default connect(mapStateToProps)(MyCoins);
