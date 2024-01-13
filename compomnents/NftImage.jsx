import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";

const NftImage = ({image,imageStyles}) => {
  return (
    <View style={styles.container}>
    <Image source={image} style={[styles.image, imageStyles]} />
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
});
export default NftImage;
