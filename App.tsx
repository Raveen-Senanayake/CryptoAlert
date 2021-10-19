import React from "react";
import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/index";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NotificationProvider } from "react-native-internal-notification";

function App() {
  return (
    <>
      <NotificationProvider>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </NotificationProvider>
    </>
  );
}

export default App;
