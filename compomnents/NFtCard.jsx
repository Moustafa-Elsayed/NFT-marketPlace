import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import NftImage from "../compomnents/NftImage";
import NftAvatar from "./NftAvatar";
const NFtCard = ({ nftsData }) => {
  return (
    <TouchableWithoutFeedback>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={pressHandler}>
          <NftImage image={nftsData.image} imageStyles={styles.imageStyles} />
        </TouchableOpacity>
        <View style={styles.cardTop}>
          <NftAvatar avatars={nftsData.avatars}  />
        </View>
        <View style={styles.cardBottom}>
          <View style={{ marginTop: SIZES.small + 5 }}>
            <Text style={{color:COLORS.white}}>hdfjh</Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xLarge,
    marginVertical: SIZES.small - 5,
    marginHorizontal: 14,
    padding: 12,
  },
  cardTop: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
    marginTop: -30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottom: { width: "100%", padding: SIZES.medium },
  imageStyles: {
    width: "100%",
    height: 300,
    borderRadius: 30,
  },
});
export default NFtCard;
