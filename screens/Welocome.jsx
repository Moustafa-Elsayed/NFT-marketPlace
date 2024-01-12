import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import nft08 from "../assets/images/nft08.jpg";
import nft06 from "../assets/images/nft06.jpg";
import nft04 from "../assets/images/nft04.jpg";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Welocome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imagCard}>
          <Image style={styles.image} source={nft08} />
        </View>
        <View style={[styles.imagCard, { top: SIZES.medium + 20 }]}>
          <Image style={styles.image} source={nft06} />
        </View>
        <View style={styles.imagCard}>
          <Image style={styles.image} source={nft04} />
        </View>
      </View>
      <Text style={styles.textConatiner}>
        <Text style={styles.mainText}>Find, Collect and sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs and buy ans sells your NFTs aw well{" "}
        </Text>
      </Text>
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

  imageContainer: {
    flexDirection: "row",
    gap: SIZES.small,
  },
  imagCard: {
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: SIZES.medium,
  },
  textConatiner: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xLarge + 6,
  },
  mainText: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge + 6,
  },
  subText: {
   fontFamily:FONTS.light,
   textAlign:"center",
   marginTop:SIZES.large,
   color:COLORS.gray,
  },
});
export default Welocome;
