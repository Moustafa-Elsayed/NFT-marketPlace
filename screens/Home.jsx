import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.xLarge + 9,
  },
});
export default Home;
