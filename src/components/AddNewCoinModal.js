import React, { useState, useRef, useCallback } from "react";
import { Modal, TouchableOpacity, Text, Dimensions } from "react-native";

import styled from "styled-components/native";
import { CoinData } from "../constants/currencyData"

//import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';
const StyledContainer = styled.View`
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40%;
`;

const StyledModalView = styled.View`
  height: 100%;
  width: 300px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
  margin-top: 0;
`;

const StyledSearchContainer = styled.View`
  position: absolute;
  margin-top: 25%;
  top: 0px ;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);

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
  align
`;



const suggestions = CoinData.map((item) => ({
  id: item.id,
  symbol: item.symbol,
  name: item.symbol,
}));

const AddNewCoinModal = ({ modalVisible, setModalVisible }) => {
  const [selectedItems, setSelectedItems] = useState([]);
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
            <StyledModalTitle>Set New Alert</StyledModalTitle>
            <StyledSearchContainer>

              <SearchableDropdown
                onTextChange={(text) => console.log(text)}
                //On text change listner on the searchable input
                onItemSelect={(item) => alert(JSON.stringify(item))}
                //onItemSelect called after the selection from the dropdown
                containerStyle={{ padding: 0 }}
                //suggestion container style
                textInputStyle={{
                  //inserted text style
                  padding: 12,
                  width: 200,
                  backgroundColor: '#fff',
                  borderRadius: 15
                }}
                itemStyle={{
                  //single dropdown item style
                  marginTop: 7,
                  padding: 12,
                  width: 200,
                  backgroundColor: '#fff',
                  borderRadius: 15,
                }}
                itemTextStyle={{
                  //text style of a single dropdown item
                  color: '#222',
                }}
                itemsContainerStyle={{
                  //items container style you can pass maxHeight
                  //to restrict the items dropdown hieght
                  maxHeight: '60%',
                }}
                items={suggestions}
                //mapping of item array
                defaultIndex={2}
                //default selected item index
                placeholder="Select Cryptocurrency"
                //place holder for the search input
                resetValue={false}
                //reset textInput Value with true and false state
                underlineColorAndroid="transparent"
              //To remove the underline from the android input
              />
            </StyledSearchContainer>
          </StyledContainer>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddNewCoinModal;
