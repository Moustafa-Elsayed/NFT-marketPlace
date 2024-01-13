import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";

const NFtCard = () => {
  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={() => console.log("Touchable pressed")}>
      <Text style={{ color: COLORS.white }}>image</Text>
    </TouchableOpacity>

    <View style={styles.cardTop}>
      <Text style={{ color: COLORS.white }}>image</Text>
    </View>
    <View style={styles.cardBottom}>
      <Text>title</Text>
      <View>
        <Text>info</Text>
      </View>
    </View>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.bg,
    },
    cardTop: {
      width: "100%",
      paddingHorizontal: SIZES.medium,
      marginTop: -30,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cardBottom: {
      width: "100%",
      padding: SIZES.medium,
    },
  });
export default NFtCard;
