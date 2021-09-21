import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import { fiatList } from "../constants/fiatcurrencyData";
import Card from "../components/Card";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const StyledContainer = styled.View`
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40%;
`;
const StyledContainerTwo = styled.View`
  max-width: 100%;
  max-height: 100%;
  border: 1px;
`;

const StyledModalView = styled.View`
  height: 100%;
  width: 300px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
  margin-top: 0;
`;

const StyledModalTitle = styled.Text`
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #0063f5;
  position: absolute;
  top: 20px;
`;

const StyledCurrenyContainer = styled.View`
  position: absolute;
  margin-top: 20%;
  top: 0px;
  height: 70%;
  width: 60%;
`;

const StyledCurrencyCardView = styled.View`
  width: 100%;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  border-radius: 8px;
  margin-top: 10px;
  justify-content: space-around;
  z-index: 0;
`;

const StyledCurrencyText = styled.Text`
  font-style: normal;
  font-weight: 700;
  justify-content: center;
  font-size: 15px;
  line-height: 20px;
  color: #0063f5;
  position: absolute;
  top: 25%;

  margin-left: 20px;
`;

const StyledCurrencyNameText = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #0063f5;
  position: absolute;
  text-align: center;
  top: 25%;
  left: 50;

  margin-left: 20px;
`;

const fiatListArray: any = [];

for (const [key, value] of Object.entries(fiatList)) {
  const objectinput = {
    code: value.code,
    name: value.name,
    symbol: value.symbol_native,
  };
  fiatListArray.push(objectinput);
}

type ItemProps = {
  code: string;
  name: string;
  symbol: string;
};
const Item = ({ code, name, symbol }: ItemProps) => {
  return (
    <StyledCurrencyCardView>
      <StyledCurrencyText>
        {code}
        {" : "}
      </StyledCurrencyText>
      <StyledCurrencyNameText>{name}</StyledCurrencyNameText>
    </StyledCurrencyCardView>
  );
};

const ChangeCurrencyModal = ({
  modalVisible,
  setModalVisible,
  setSelectedCurrency,
}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [state, setState] = useState({
    data: fiatListArray,
  });

  const handleChangeCurrency = (item) => {
    setSelectedCurrency({
      code: item.code,
      name: item.name,
      symbol: item.symbol,
    });
    setModalVisible(false);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleChangeCurrency(item);
        }}
      >
        <Item code={item.code} name={item.name} symbol={item.symbol} />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={1}
      >
        <TouchableOpacity style={{}} activeOpacity={1}>
          <StyledContainer>
            <StyledModalView style={{}}></StyledModalView>
            <StyledModalTitle>Change Fiat Currency</StyledModalTitle>
            <StyledCurrenyContainer>
              <SafeAreaView style={{ height: "100%" }}>
                <FlatList
                  data={state.data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.code}
                  extraData={selectedId}
                />
              </SafeAreaView>
            </StyledCurrenyContainer>
          </StyledContainer>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ChangeCurrencyModal;
