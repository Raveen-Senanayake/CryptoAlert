import React from "react";
import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/index";
// import * as Font from "expo-font";
// import { useFonts, Montserrat_900Black } from "@expo-google-fonts/montserrat";

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Montserrat_900Black,
  // });

  // (async () =>
  //   await Font.loadAsync({
  //     Montserrat: require("./src/fonts/Montserrat/MontserratBlack900.ttf"),
  //     Poppins: require("./src/fonts/Montserrat/MontserratBlack900.ttf"),
  //   }))().catch((e) => {
  //   console.log(e);
  // });

  return (
    <>
      <RootNavigator />
    </>
  );
}
