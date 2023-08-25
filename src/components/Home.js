import React, { useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
} from "react-native";
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Cell } from "./Cell";
import { CautionModal } from "./CautionModal";
import { ExCautionModal } from "./ExCautionModal";
import { DangerModal } from "./DangerModal";
import { ExDangerModal } from "./ExDangerModal";
import moment from "moment";

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [warningLevel, setWarningLevel] = useState();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);
  const [heatIndexes, setHeatIndexes] = useState([]);
  const [consecs, setConsecs] = useState([]);

  const url = "https://api.weather.gov/points/38.2668,-76.4538";
  const header = {
    "User-Agent": "Windows 10 Enterprise 22H2",
  };

  // Sequential API calls for accessing heat index data and setting state.
  const getWeather = () => {
    axios
      .get(url, { header })
      .then((res1) => {
        setData(res1.data);
        let apiData = res1.data.properties.forecastGridData;
        console.log(res1.data);
        return axios.get(apiData, { header });
      })
      .then((res2) => {
        setData(res2.data);
        setLoading(false);
        console.log(res2.data);
        pullValues(res2.data);
      });
  };

  // Pulls heat index data (date, value) from json data, formats it,
  // and pushes result to respective array.
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var arr4 = [];
  const pullValues = (data) => {
    for (let i = 0; i < 30; i++) {
      let rawDate = data.properties.heatIndex.values[i].validTime;
      let fullFormattedDate = rawDate.substring(0, 19);

      let dataDate = moment(fullFormattedDate).format("MM/DD").toString();
      let dataTime = moment(fullFormattedDate).format("HHmm").toString();

      arr2.push(dataDate);
      arr3.push(dataTime);
      // Grab string for number of consecutive heat index entries and then multiply by 1
      // to convert string to number
      let consecNum = rawDate.substring(28, 29);
      arr4.push(consecNum * 1);

      if (data.properties.heatIndex.values[i].value == null) {
        arr1.push(-1);
      } else {
        let tempIndex = toFahrenheit(data.properties.heatIndex.values[i].value);
        arr1.push(Math.round(tempIndex));
      }

      // Insert duplicate entries for a given heat index that occurs for multiple hours.
      // For time, reformat to match a time exactly one hour later.
      if (arr4[i] > 1) {
        arr4.splice(i + 1, 0, arr4[i] - 1);
        arr1.splice(i + 1, 0, arr1[i]);
        arr2.splice(i + 1, 0, arr2[i]);
        // Format moment object to string then multiply by 1 to make a number.
        let timeNum = arr3[i].toString() * 1 + 100;

        // Reformat times from 0000 to 0900 to include the leading zero.
        if (timeNum <= 900) {
          timeNum = "0" + timeNum;
        }

        arr3.splice(i + 1, 0, timeNum);
      }
    }

    setHeatIndexes(arr1);
    setDates(arr2);
    setTimes(arr3);
    setConsecs(arr4);
  };

  // Convert heat index value from Celsius to Fahrenheit
  const toFahrenheit = (val) => {
    return val * (9 / 5) + 32;
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.background}>
          <View>
            <View style={styles.loc}>
              <Text style={styles.locCity}> Lexington Park,</Text>
              <Text style={styles.locState}> MD </Text>
            </View>
            <View>
              <Pressable onPress={getWeather} style={styles.weatherButton}>
                <Text style={styles.weatherButtonText}> Fetch API </Text>
              </Pressable>
            </View>
            {!loading ? (
              <>
                <View style={styles.svTitleContainer}>
                  <Text style={styles.svTitle}> Heat Index Forecast (°F) </Text>
                </View>
                <View style={styles.scrollViewContainer}>
                  <ScrollView
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                    showsVerticalScrollIndicator={false}
                  >
                    <View>
                      <Cell
                        date={dates[0]}
                        time={times[0]}
                        heatIndex={heatIndexes[0]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[1]}
                        time={times[1]}
                        heatIndex={heatIndexes[1]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[2]}
                        time={times[2]}
                        heatIndex={heatIndexes[2]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[3]}
                        time={times[3]}
                        heatIndex={heatIndexes[3]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[4]}
                        time={times[4]}
                        heatIndex={heatIndexes[4]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[5]}
                        time={times[5]}
                        heatIndex={heatIndexes[5]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[6]}
                        time={times[6]}
                        heatIndex={heatIndexes[6]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[7]}
                        time={times[7]}
                        heatIndex={heatIndexes[7]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[8]}
                        time={times[8]}
                        heatIndex={heatIndexes[8]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[9]}
                        time={times[9]}
                        heatIndex={heatIndexes[9]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[10]}
                        time={times[10]}
                        heatIndex={heatIndexes[10]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[11]}
                        time={times[11]}
                        heatIndex={heatIndexes[11]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[12]}
                        time={times[12]}
                        heatIndex={heatIndexes[12]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[13]}
                        time={times[13]}
                        heatIndex={heatIndexes[13]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[14]}
                        time={times[14]}
                        heatIndex={heatIndexes[14]}
                      />
                    </View>
                    <View>
                      <Cell
                        date={dates[15]}
                        time={times[15]}
                        heatIndex={heatIndexes[15]}
                      />
                    </View>
                  </ScrollView>
                </View>
              </>
            ) : null}

            <View style={styles.colorCodes}>
              <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    {warningLevel == "Caution" ? <CautionModal /> : null}
                    {warningLevel == "Ex Caution" ? <ExCautionModal /> : null}
                    {warningLevel == "Danger" ? <DangerModal /> : null}
                    {warningLevel == "Ex Danger" ? <ExDangerModal /> : null}
                    <Pressable
                      style={styles.modalButton}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={{ fontSize: 14, fontWeight: 600 }}>
                        {" "}
                        Dismiss{" "}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={styles.yellowSplotch}
                onPress={() => [
                  setModalVisible(true),
                  setWarningLevel("Caution"),
                ]}
              >
                <Text style={styles.cautionText}>Caution</Text>
              </Pressable>
              <Pressable
                style={styles.lightOrangeSplotch}
                onPress={() => [
                  setModalVisible(true),
                  setWarningLevel("Ex Caution"),
                ]}
              >
                <Text style={styles.exCautionText}>Extreme Caution</Text>
              </Pressable>
              <Pressable
                style={styles.orangeSplotch}
                onPress={() => [
                  setModalVisible(true),
                  setWarningLevel("Danger"),
                ]}
              >
                <Text style={styles.dangerText}>Danger</Text>
              </Pressable>
              <Pressable
                style={styles.redSplotch}
                onPress={() => [
                  setModalVisible(true),
                  setWarningLevel("Ex Danger"),
                ]}
              >
                <Text style={styles.exDangerText}>Extreme Danger</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },

  header: {
    flex: 1,
  },

  bodyContainer: {
    flex: 8,
  },

  background: {
    flex: 1,
  },

  locCity: {
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 35,
  },

  locState: {
    fontWeight: "600",
    fontSize: 35,
  },

  loc: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 40,
  },

  weatherButton: {
    borderColor: "black",
    backgroundColor: "lightsteelblue",
    borderRadius: 7,
    borderWidth: 1,
    alignSelf: "center",
    padding: 5,
  },

  weatherButtonText: {
    fontWeight: "500",
  },
  svTitle: {
    fontWeight: "400",
    fontSize: 20,
    paddingLeft: 15,
  },
  svTitleContainer: {
    position: "absolute",
    marginTop: 255,
    width: "100%",
  },

  scrollViewContainer: {
    flexDirection: "row",
    marginTop: 135,
  },

  colorCodes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 480,
    position: "absolute",
  },

  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },

  modalButton: {
    backgroundColor: "#2196F3",
    borderRadius: 15,
    marginTop: 15,
    padding: 7,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  modalTextTitle: {
    marginBottom: 15,
    fontWeight: 500,
    fontSize: 15,
    textAlign: "center",
  },

  modalTextBody: {
    marginBottom: 15,
    fontSize: 15,
    textAlign: "center",
  },

  cautionText: {
    alignSelf: "center",
    fontSize: 13,
    fontWeight: 700,
  },
  exCautionText: {
    alignSelf: "center",
    fontWeight: 700,
    fontSize: 13,
  },
  dangerText: {
    alignSelf: "center",
    fontSize: 13,
    fontWeight: 700,
  },
  exDangerText: {
    alignSelf: "center",
    fontSize: 13,
    fontWeight: 700,
  },
  redSplotch: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: `hsl(1, 97%, 61%)`,
    height: 40,
    width: 140,
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 20,
  },

  lightOrangeSplotch: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: `hsl(36, 100%, 75%)`,
    height: 40,
    width: 140,
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 20,
  },

  orangeSplotch: {
    justifyContent: "center",
    backgroundColor: `hsl(26, 100%, 55%)`,
    height: 40,
    width: 140,
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 20,
  },

  yellowSplotch: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: `hsl(58, 100%, 75%)`,
    height: 40,
    width: 140,
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 20,
  },

  footer: {
    flex: 1,
  },
});
