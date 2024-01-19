import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";

const MoreDetails = ({ address, tokenId, tokenSt, blockchain }) => {
  return (
    <View>
      <View style={styles.details}>
        <Text style={styles.title}>Contract Address</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Toked Id</Text>
        <Text style={styles.value}>{tokenId}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Token Stander</Text>
        <Text style={styles.value}>{tokenSt}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>blockchain</Text>
        <Text style={styles.value}>{blockchain}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    backgroundColor: COLORS.bg,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal:10,
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:COLORS.cardBg
  },
  title: {
    color: COLORS.white,
  },
  value: {
    color: COLORS.gray,
  },
});
export default MoreDetails;
