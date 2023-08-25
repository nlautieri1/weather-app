import { View, Text, StyleSheet } from "react-native";

export function ExDangerModal() {
  return (
    <View>
      <Text style={styles.modalTextTitle}>Extreme Danger</Text>
      <Text style={styles.modalTextBody}>
        Exertional heatstroke HIGHLY Likely
        {"\n\n"}
        Stop all outside activity.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modalTextTitle: {
    marginBottom: 30,
    fontWeight: 500,
    fontSize: 20,
    textAlign: "center",
  },

  modalTextBody: {
    marginBottom: 15,
    fontSize: 15,
    textAlign: "center",
  },
});
