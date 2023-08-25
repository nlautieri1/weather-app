import { View, Text, StyleSheet } from "react-native";

export function CautionModal() {
  return (
    <View>
      <Text style={styles.modalTextTitle}>Caution</Text>
      <Text style={styles.modalTextBody}>
        Dehydration may occur if employee fails to drink adequate fluids.
        {"\n\n"}
        Proceed with normal work activities at this level.
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
