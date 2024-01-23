import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import { COLORS, SIZES, FONTS } from "../constants";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const NftImage = ({
  image,
  imageStyles,
  love,
  arrow,
  pressHandler,
  linear,
  changeColor,
}) => {
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
          icon={
            <AntDesign
              name="heart"
              size={20}
              color={COLORS.second}
              onPress={changeColor && changeColor}
            />
          }
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
              onPress={pressHandler && pressHandler}
            />
          }
        />
      )}
      {linear && (
        <LinearGradient
          colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "50%",
          }}
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
    width: width,
    // aspectRatio: 16 / 14,
    borderRadius: 30,
  },
  buttonHeart: {
    position: "absolute",
    top: StatusBar.currentHeight + 20,
    right: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
  buttonArrow: {
    position: "absolute",
    top: StatusBar.currentHeight + 20,
    left: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
});
export default NftImage;
