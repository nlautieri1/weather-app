import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
