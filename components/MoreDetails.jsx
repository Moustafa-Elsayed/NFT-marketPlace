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
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    backgroundColor: COLORS.bg,
  },
  title: {},
  value: {},
});
export default MoreDetails;
