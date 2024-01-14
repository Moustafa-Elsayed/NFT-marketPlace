import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import NftDate from "../components/NftDate"
const NftTitle = ({ name, creator, date }) => {
  return (
    <View>
      <View>
        <Text style={styles.textName}>{name}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between",gap:SIZES.small }}>
        <View>
          <Text style={styles.create}>{creator}</Text>
          <Text>icon</Text>
        </View>
        <View>
        <NftDate date={date}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textName: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.medium + 5,
  },
  create: {
    fontFamily: FONTS.light,
    color: COLORS.white,
    fontSize: SIZES.small + 5,
  },
});
export default NftTitle;
