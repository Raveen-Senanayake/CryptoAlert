import React, { useState, useRef, useCallback } from "react";
import { Modal, TouchableOpacity, Text, Dimensions } from "react-native";
import Colors from "../constants/index";
import Feather from "react-native-vector-icons";
import styled from "styled-components/native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

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

const StyledSearchContainer = styled.View``;

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

const AddNewCoinModal = ({ modalVisible, setModalVisible }) => {
  const [loading, setLoading] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownController = useRef(null);
  const searchRef = useRef(null);

  const getSuggestions = useCallback(async (q) => {
    if (typeof q !== "string" || q.length < 3) {
      setSuggestionsList(null);
      return;
    }
    setLoading(true);
    const response = await fetch("api.coincap.io/v2/assets");
    const items = await response.json();
    const suggestions = items.map((item) => ({
      id: item.id,
      title: item.name,
      symbol: item.symbol,
    }));
    setSuggestionsList(suggestions);
    setLoading(false);
    console.log(suggestions);
  }, []);

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

            <StyledSearchContainer></StyledSearchContainer>
          </StyledContainer>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddNewCoinModal;
