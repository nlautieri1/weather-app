import { View, Text, StyleSheet } from "react-native";

export function Cell({ date, time, heatIndex }) {
  var currentDay = Date().toLocaleString();
  var formattedCurDay = currentDay.substring(8, 10);
  var dataDay = date.substring(3, 5);

  const getLevel = (heatIndex) => {
    var level = "null";
    if (heatIndex > 125) {
      level = "extreme danger";
    } else if (heatIndex >= 104 && heatIndex <= 125) {
      level = "danger";
    } else if (heatIndex >= 91 && heatIndex <= 103) {
      level = "extreme caution";
    } else if (heatIndex <= 90 && heatIndex >= 0) {
      level = "caution";
    } else {
      level = "null";
    }

    return level;
  };

  return (
    <View
      style={[
        getLevel(heatIndex) == "extreme danger" ? styles.exDangerCell : null,
        getLevel(heatIndex) == "danger" ? styles.dangerCell : null,
        getLevel(heatIndex) == "extreme caution" ? styles.exCautionCell : null,
        getLevel(heatIndex) == "caution" ? styles.cautionCell : null,
        getLevel(heatIndex) == "null" ? styles.nullCell : null,
        styles.container,
      ]}
    >
      {formattedCurDay == dataDay ? (
        <Text style={styles.dateText}> Today </Text>
      ) : (
        <Text style={styles.dateText}> {date} </Text>
      )}
      {heatIndex == -1 ? (
        <Text style={styles.heatIndexText}> N/a </Text>
      ) : (
        <Text style={styles.heatIndexText}> {heatIndex}° </Text>
      )}
      <Text style={styles.timeText}> {time} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nullCell: {
    backgroundColor: "lightgrey",
  },

  cautionCell: {
    backgroundColor: `hsl(58, 100%, 75%)`,
  },
  exCautionCell: {
    backgroundColor: `hsl(36, 100%, 75%)`,
  },
  dangerCell: {
    backgroundColor: `hsl(26, 100%, 55%)`,
  },
  exDangerCell: {
    backgroundColor: `hsl(1, 97%, 61%)`,
  },
  container: {
    flexDirection: "column",
    height: 90,
    width: 80,
    marginRight: 7,
    paddingTop: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "grey",
  },
  dateText: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 14,
  },

  timeText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "Arial",
  },

  heatIndexText: {
    textAlign: "center",
    paddingTop: 6,
    paddingBottom: 5,
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});
