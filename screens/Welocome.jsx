import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import nft08 from "../assets/images/nft08.jpg";
import nft06 from "../assets/images/nft06.jpg";
import nft04 from "../assets/images/nft04.jpg";

const Welocome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imagCard}>
          <Image style={styles.image} source={nft08} />
        </View>
        <View style={styles.imagCard}>
          <Image style={styles.image} source={nft06} />
        </View>
        <View style={styles.imagCard}>
          <Image style={styles.image} source={nft04} />
        </View>
      </View>
      <Text style={styles.text}>Welocome</Text>
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
    color: "red",
    fontSize: 15,
  },
  imageContainer: {
    flexDirection:"row"
  },
  imagCard: {},
  image: {
    width: 200,
    height: 200,
  },
});
export default Welocome;
