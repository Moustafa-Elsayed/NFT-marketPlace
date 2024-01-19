import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import NftImage from "../components/NftImage";
const NftDetails = ({ route, navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  const { nftsData } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <NftImage
          image={nftsData.image}
          imageStyles={styles.imageStyles}
          love
          arrow
          pressHandler={pressHandler}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  content: {
    flex: 1,
  },
  imageStyles: {
    width: "100%",
    aspectRatio: 16 / 14,
    height: 400,
    borderRadius: 20,
  },
});
export default NftDetails;
