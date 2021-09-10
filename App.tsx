import React from "react";
import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/index";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </>
  );
}
