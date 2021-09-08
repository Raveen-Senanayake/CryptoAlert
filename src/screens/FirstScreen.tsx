import React from "react";
import { View, Text, ScrollView } from "react-native";
import Card from "../components/Card";
import styled from "styled-components/native";

const StyledRoot = styled.View`
  padding: 30px 15px;
`;
const StyledContainer = styled.View`
  max-width: 100%;
  max-height: 100%;
`;

const FirstScreen = ({ navigation, route }) => {
  return (
    <StyledRoot>
      <StyledContainer>
        <Card title="Bitcoin" code="BTC" price="$630000" pricechange="%9.77%" />
      </StyledContainer>
    </StyledRoot>
  );
};

export default FirstScreen;
