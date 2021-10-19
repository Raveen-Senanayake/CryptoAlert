import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../constants/index";
import MyCoins from "../screens/MyCoins.tsx";
import ThirdScreen from "../screens/ThirdScreen";
import NewsScreen from "../screens/NewsScreen";
const BottomTabNavigator = createBottomTabNavigator();
import AddNewCoinModal from "../components/AddNewCoinModal";
import styled from "styled-components/native";
import ChangeCurrencyModal from "../components/ChangeCurrencyModal";
import {
  fiatList,
  supportedCurrencyGecko,
} from "../constants/fiatcurrencyData";

const StyledCurrencyButtonView = styled.View`
  margin-right: 30%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  border-radius: 8px;

  padding: 5px;
`;

const StyledText = styled.Text``;

type Props = {
  children: any;
  onPress?: (e: GestureResponderEvent) => void;
};

const AppTabNavigator = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [changeCurrencyModal, setChangeCurrencyModal] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "USD",
    name: "US Dollar",
    symbol: "$",
  });

  const CustomTabBarButton = ({ children, onPress }: Props) => (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );

  const fiatListArray = [];

  for (const [key, value] of Object.entries(supportedCurrencyGecko)) {
    const objectinput = {
      code: value.code,
      name: value.name,
      symbol: value.symbol_native,
    };
    fiatListArray.push(objectinput);
  }

  return (
    <>
      <BottomTabNavigator.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 25,
            right: 25,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 90,
            shadowRadius: 3,
          },
          ...styles.shadow,
        }}
      >
        <BottomTabNavigator.Screen
          name="My Coins"
          component={MyCoins}
          options={{
            title: "My Coins",
            headerTintColor: Colors.mainColor,
            headerTitleStyle: {
              fontSize: 20,
              lineHeight: 20,
              fontWeight: "600",
            },
            headerRight: () => (
              <StyledCurrencyButtonView>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    setChangeCurrencyModal(true);
                  }}
                >
                  <StyledText style={{ color: Colors.mainColor }}>
                    {selectedCurrency.code}
                  </StyledText>
                </TouchableOpacity>
              </StyledCurrencyButtonView>
            ),
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 5,
                }}
              >
                <Icon
                  name="bitcoin"
                  size={focused ? 35 : 30}
                  color={focused ? Colors.mainColor : Colors.tabBarOffColor}
                  style={{ top: 10 }}
                />

                <Text
                  style={{
                    color: focused ? Colors.mainColor : Colors.tabBarOffColor,
                    fontSize: focused ? 12 : 10,
                    top: 15,
                  }}
                >
                  My Coins
                </Text>
              </View>
            ),
          }}
        />

        <BottomTabNavigator.Screen
          name="Add new"
          component={ThirdScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="plus-circle"
                size={70}
                color={Colors.mainColor}
                style={{ top: 5 }}
              />
            ),

            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />

        <BottomTabNavigator.Screen
          name="News Feed"
          component={NewsScreen}
          options={{
            title: "News Feed",
            headerTintColor: Colors.mainColor,
            headerTitleStyle: {
              fontSize: 20,
              lineHeight: 20,
              fontWeight: "600",
            },

            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 5,
                }}
              >
                <Icon
                  name="newspaper"
                  size={focused ? 35 : 30}
                  color={focused ? Colors.mainColor : Colors.tabBarOffColor}
                  style={{ top: 10 }}
                />
                <Text
                  style={{
                    color: focused ? Colors.mainColor : Colors.tabBarOffColor,
                    fontSize: focused ? 12 : 10,
                    top: 15,
                  }}
                >
                  Updates
                </Text>
              </View>
            ),
          }}
        />
      </BottomTabNavigator.Navigator>

      <AddNewCoinModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedCurrency={selectedCurrency}
      />
      <ChangeCurrencyModal
        modalVisible={changeCurrencyModal}
        setModalVisible={setChangeCurrencyModal}
        setSelectedCurrency={setSelectedCurrency}
      />
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default AppTabNavigator;
