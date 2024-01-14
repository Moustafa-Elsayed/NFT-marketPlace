import { View, Text,StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const NftDate = ({date}) => {
  return (
    <View>
      <Text style={styles.dateText}>{date}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  dateText: {
    fontFamily: FONTS.light,
    color: COLORS.white,
    fontSize: SIZES.small + 5,
  },
});
export default NftDate;
