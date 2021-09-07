import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppTabNavigator from "./appTabNavigator";

const RootNavigator = () => (
  <NavigationContainer>
    <AppTabNavigator />
  </NavigationContainer>
);
export default RootNavigator;
