import { View, Text, StyleSheet } from "react-native";

export function ExCautionModal() {
  return (
    <View>
      <Text style={styles.modalTextTitle}>Extreme Caution</Text>
      <Text style={styles.modalTextBody}>
        Heat cramps and heat exhaustion possible. {"\n\n"}
        Incorporate 10 minutes of rest for every 50 minutes of work activity.
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
