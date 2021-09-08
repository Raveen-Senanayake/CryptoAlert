import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/index";

export default function App() {
  return (
    <>
      <RootNavigator />
    </>
  );
}
