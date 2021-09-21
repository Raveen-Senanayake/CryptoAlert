import React from "react";
import { NotificationProvider } from "react-native-internal-notification";
import AppTabNavigator from "./appTabNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "rgb(253, 253, 253)",
  },
};

type Props = {
  didNotLoad: boolean;
  isLoading: boolean;
};

const RootNavigator = () => {
  return (
    <NotificationProvider> theme={MyTheme}>
      <AppTabNavigator />
    </NotificationProvider>
  );
};

export default RootNavigator;
