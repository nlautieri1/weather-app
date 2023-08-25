import { View, Text, StyleSheet } from "react-native";
import logo from "../assets/logo.jpg";

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <img style={styles.logo} src={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    backgroundColor: "#014886",
  },

  text: {
    flex: 1,
    alignSelf: "center",
    paddingLeft: 100,
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
  },

  logo: {
    paddingRight: 20,
  },
});
