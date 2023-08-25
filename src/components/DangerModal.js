import { View, Text, StyleSheet } from "react-native";

export function DangerModal() {
  return (
    <View>
      <Text style={styles.modalTextTitle}>Danger</Text>
      <Text style={styles.modalTextBody}>
        Exertional heat cramps or heat exhaustion likely, heatstroke possible.{" "}
        {"\n\n"}
        Incorporate 20 minutes of rest for every 40 minutes of work activity.
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
