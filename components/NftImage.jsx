import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import Button from "./Button";
import { COLORS, SIZES, FONTS } from "../constants";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const NftImage = ({ image, imageStyles, love, arrow,pressHandler }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={[styles.image, imageStyles]}
        resizeMode="cover"
      />
      {love && (
        <Button
          stylesButton={styles.buttonHeart}
          icon={<AntDesign name="heart" size={20} color={COLORS.second} />}
        />
      )}
      {arrow && (
        <Button
          stylesButton={styles.buttonArrow}
          icon={
            <Feather
              name="arrow-left"
              size={20}
              color={COLORS.second}
              pressHandler={pressHandler&&pressHandler}
            />
          }
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 14,
    borderRadius: 30,
  },
  buttonHeart: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    right: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
  buttonArrow: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
});
export default NftImage;
