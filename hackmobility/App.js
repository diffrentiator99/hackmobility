import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainComponent from "./components/MainComponent";
export default function App() {
  return (
    <View>
      <MainComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
