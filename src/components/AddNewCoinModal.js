import React, { useState, useRef } from "react";
import { Modal, TouchableOpacity, Image, TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components/native";
import { CoinData } from "../constants/currencyData"
import { exchangeData, exchangeInfo } from "../constants/exchangeData"
import DropDownPicker from 'react-native-dropdown-picker'
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as Animatable from 'react-native-animatable';
import { connect } from "react-redux";
import { dispatchAddNewCard } from "../redux/reducer/reducerChangeStateFunctions"
import { FontAwesome } from '@expo/vector-icons';
import { useNotification } from 'react-native-internal-notification';

const StyledContainer = styled.View`
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40%;
  display: flex;
`;

const StyledModalView = styled.View`
  height: 80%;
  width: 300px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
  margin-top: 0px;
  justify-content: center;
  align-items: center;

`;

const StyledSearchContainer = Animatable.createAnimatableComponent(styled(View)`
  position: absolute;
  margin-top: 25%;
  top: 0px ;
`);


const StyledExchangeSearchContainer = Animatable.createAnimatableComponent(styled(View)`
position: absolute;
margin-top: 50%;
top: 0px;
`);


const StyledModalTitle = styled.Text`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
color: #0063f5;
position: absolute;
top: 20px;

`;

const StyledInputTextView = Animatable.createAnimatableComponent(styled(View)`
top: 11%;
height: 50px;
width: 225px;
border-radius: 15px;
background-color: white;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);

`);

const StyledPrice = styled.Text`

padding-left: 20px;
font-size: 14px;
color: grey;
font-weight: bold;
font-size: 15px;
top: 30%;

`;

const StyledPriceInput = styled.TextInput`
width:100px;
left: 80px;
top: -5px;
border-bottom-color: grey;
color: grey;
font-weight: bold;
font-size: 15px;
`;

const StyledCurrencySymbol = styled.Text`
padding-left: 20px;
font-size: 10px;
color: grey;
font-weight: bold;
text-align: right;
top: -42%;
padding-right: 17px;
max-width: 100%;
z-index: -1;
`;

const StyledButtonContainer = styled.View`
position: absolute;
width: 100%;
top: 80%;
align-content: flex-end;
flex-direction: row;
width: 225px;

`;

const StyledSubmitButton = styled.TouchableOpacity`
display: flex;
width: 80px;
height: 40px;
border-radius: 10px;
padding: 10px;
box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
left: 63px;
`;

const StyledCancelButton = styled.TouchableOpacity`
display: flex;
width: 80px;
height: 40px;
border-radius: 10px;
padding: 10px;
box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.2);
left: 53px;
`;


const StyledSubmitText = styled.Text`
color: white;
text-align: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
`;

const suggestions = CoinData.map((item) => (
  {
    label: item.id,
    value: item.symbol,
    name: item.name,
    icon: () => < Image source={{ uri: `https://cryptoicon-api.vercel.app/api/icon/${(item.symbol).toLowerCase()}` }} style={{ height: 20, width: 20 }} />,
  }
));

const exchangeSuggestions = exchangeInfo.map((item) => (
  {
    label: item.name,
    value: item.name,
    icon: () => < Image source={{ uri: item.image }} style={{ height: 20, width: 20 }} />,
  }
));


const AddNewCoinModal = ({ modalVisible, setModalVisible, selectedCurrency, dispatch, myCoinData, ...props }) => {


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(suggestions);

  const [openExchange, setOpenExchange] = useState(false);
  const [valueExchange, setValueExchange] = useState(null);
  const [itemsExchange, setItemsExchange] = useState(exchangeSuggestions);

  const [alertPrice, setAlertPrice] = useState(null)
  const AnimationSelectCurrencyRef = useRef(null)
  const AnimationSelectExchangeRef = useRef(null)
  const AnimationPriceRef = useRef(null)

  const notification = useNotification();

  const resetModal = () => {
    setModalVisible(false);
    setOpen(false);
    setOpenExchange(false);
    setValue(null);
    setValueExchange(null);
    setAlertPrice(null);

  }



  const handleSet = () => {


    if (alertPrice === null) {
      if (AnimationPriceRef) {

        AnimationPriceRef.current?.bounce();
      }
    }
    if (value === null) {

      if (AnimationSelectCurrencyRef) {

        AnimationSelectCurrencyRef.current?.bounce();
      }
    }
    if (valueExchange === null) {

      if (AnimationSelectExchangeRef) {
        AnimationSelectExchangeRef.current?.bounce();
      }
    }

    if (alertPrice && value && valueExchange) {


      const extractedElement = suggestions.filter((item) => item.value == value)

      const newEntry = {
        title: extractedElement[0].name,
        code: extractedElement[0].value,
        iconlink: extractedElement[0].value.toLowerCase(),
        price: "$63000",
        pricechange: "%9.77%",
        exchangename: valueExchange,
        exchangelogo: exchangeSuggestions.map((item) => item.value === valueExchange)
      }

      const tempNewData = [...myCoinData];

      console.log(tempNewData.filter((e) => e.code === newEntry.code).length !== 0)
      console.log(tempNewData.filter((e) => e.code === newEntry.code).length !== 0)
      if (tempNewData.filter((e) => e.code === newEntry.code).length !== 0) {


        notification.showNotification({
          title: `${newEntry.code} is already tracked`,
          message: 'Select a different currency to track.',
          icon: < Image source={{ uri: `https://cryptoicon-api.vercel.app/api/icon/${(newEntry.code).toLowerCase()}` }} style={{ height: 40, width: 40 }} />,
          onPress: () => {
            alert('Pressed');
          },
        });

      } else {
        tempNewData.push(newEntry);
        dispatchAddNewCard(tempNewData, dispatch)
        resetModal()

      }




    }


  }

  {
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
            resetModal()
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          activeOpacity={1}
        >
          <TouchableOpacity style={{}} activeOpacity={1}>
            <StyledContainer>
              <StyledModalView >

                <StyledModalTitle>Set New Alert</StyledModalTitle>
                <StyledSearchContainer style={{ zIndex: open ? 1 : 0 }} ref={AnimationSelectCurrencyRef}>

                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    label="Select Operator"
                    placeholder="Cryptocurrency"
                    placeholderStyle={{
                      marginLeft: 10,
                      fontSize: 14,
                      color: "grey",
                      fontWeight: "bold"
                    }}
                    containerStyle={{ height: 150 }}
                    dropDownMaxHeight={900}
                    showArrowIcon={true}
                    showTickIcon={true}
                    searchable={true}
                    listMode="FLATLIST"
                    modalContentContainerStyle={{
                      backgroundColor: "red"
                    }}
                    translation={{
                      SEARCH_PLACEHOLDER: "Search"
                    }}
                    searchTextInputStyle={{
                      borderColor: "transparent"
                    }}
                    searchPlaceholderTextColor="grey"
                    searchContainerStyle={{
                      borderBottomColor: "transparent",
                    }}
                    customItemContainerStyle={{
                      borderColor: "red"
                    }}
                    style={{
                      borderColor: "white",
                      borderRadius: 15,
                      shadowOpacity: 0.08,
                      shadowRadius: 3,
                      shadowOffset: {
                        height: 2,
                        width: 2
                      },
                      width: 225
                    }}
                    textStyle={{
                      fontSize: 15
                    }}
                    labelStyle={{
                      fontWeight: "bold"
                    }}
                    dropDownContainerStyle={{
                      borderColor: 'transparent',
                      top: 50,
                      backgroundColor: 'white',
                      borderRadius: 15,
                      shadowOpacity: 0.08,
                      shadowRadius: 3,
                      shadowOffset: {
                        height: 2,
                        width: 2
                      },
                    }}
                    closeAfterSelecting={true}
                    customItemContainerStyle={{
                      backgroundColor: 'red'
                    }}
                    customItemLabelStyle={{
                      fontStyle: "italic"
                    }}
                  />

                </StyledSearchContainer>

                <StyledExchangeSearchContainer ref={AnimationSelectExchangeRef} style={{ zIndex: openExchange ? 1 : 0 }}>

                  <DropDownPicker
                    open={openExchange}
                    value={valueExchange}
                    items={itemsExchange}
                    setOpen={setOpenExchange}
                    setValue={setValueExchange}
                    setItems={setItemsExchange}
                    label="Select Exchange"
                    placeholder="Exchange"

                    placeholderStyle={{
                      marginLeft: 10,
                      fontSize: 14,
                      color: "grey",
                      fontWeight: "bold"
                    }}

                    containerStyle={{ height: 150 }}
                    dropDownMaxHeight={900}
                    showArrowIcon={true}
                    showTickIcon={true}
                    searchable={true}
                    listMode="FLATLIST"


                    modalContentContainerStyle={{
                      backgroundColor: "red"
                    }}

                    translation={{
                      SEARCH_PLACEHOLDER: "Search"
                    }}

                    searchTextInputStyle={{
                      borderColor: "transparent"
                    }}

                    searchPlaceholderTextColor="grey"

                    searchContainerStyle={{
                      borderBottomColor: "transparent",
                    }}

                    customItemContainerStyle={{
                      borderColor: "red"
                    }}

                    style={{
                      borderColor: "white",
                      borderRadius: 15,
                      shadowOpacity: 0.08,
                      shadowRadius: 3,
                      shadowOffset: {
                        height: 2,
                        width: 2
                      },
                      width: 225

                    }}
                    textStyle={{
                      fontSize: 15
                    }}
                    labelStyle={{
                      fontWeight: "bold"
                    }}

                    dropDownContainerStyle={{
                      borderColor: 'transparent',
                      top: 50,
                      backgroundColor: 'white',
                      borderRadius: 15,
                      shadowOpacity: 0.08,
                      shadowRadius: 3,
                      shadowOffset: {
                        height: 2,
                        width: 2
                      },
                    }}

                    closeAfterSelecting={true}

                    customItemContainerStyle={{
                      backgroundColor: 'red'
                    }}
                    customItemLabelStyle={{
                      fontStyle: "italic"
                    }}
                  />
                </StyledExchangeSearchContainer>


                <StyledInputTextView ref={AnimationPriceRef} delay={1000}>

                  <StyledPrice >Price : </StyledPrice>
                  <StyledPriceInput keyboardType="decimal-pad" returnKeyLabel="set" returnKeyType="done" onChangeText={setAlertPrice} />
                  <StyledCurrencySymbol > {selectedCurrency.code} </StyledCurrencySymbol>

                </StyledInputTextView>
                <StyledButtonContainer>

                  <StyledCancelButton style={{ backgroundColor: 'grey' }} onPress={() => { resetModal() }} >
                    <StyledSubmitText >Cancel</StyledSubmitText>
                  </StyledCancelButton>


                  <StyledSubmitButton style={{ backgroundColor: '#3164CF' }} onPress={() => { handleSet() }} >
                    <StyledSubmitText >Set</StyledSubmitText>
                  </StyledSubmitButton>


                </StyledButtonContainer>



              </StyledModalView>
            </StyledContainer>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal >
    );
  }
};

function mapStateToProps(state) {
  return {
    myCoinData: state.currencyDataReducer.myCoinData,
  };
}


export default connect(mapStateToProps)(AddNewCoinModal);