import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppTabNavigator from "./appTabNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "rgb(253, 253, 253)",
  },
};

const RootNavigator = () => (
  <NavigationContainer theme={MyTheme}>
    <AppTabNavigator />
  </NavigationContainer>
);
export default RootNavigator;
