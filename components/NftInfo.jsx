import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const NftInfo = ({ comments, Views, love, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{comments}</Text>
        <Text>icone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SIZES.small + 2,
    backgroundColor: COLORS.second,
    width: 90,
    borderRadius: 50,
    paddingVertical: 3,
  },
  text:{
    color:COLORS.white,
    fontFamily:FONTS.medium
  }
});
export default NftInfo;
