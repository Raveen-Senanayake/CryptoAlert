import React from "react";
import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/index";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { InAppNotificationProvider } from "react-native-in-app-notification";
function App() {
  return (
    <>
      <InAppNotificationProvider>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </InAppNotificationProvider>
    </>
  );
}

export default App;
