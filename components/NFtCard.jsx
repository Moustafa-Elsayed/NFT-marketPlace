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
import NftImage from "./NftImage";
import NftAvatar from "./NftAvatar";
import NftTitle from "./NftTitle";
import NftInfo from "./NftInfo";
import { useNavigation } from "@react-navigation/native";

const NFtCard = ({ nftsData }) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("NFT-details", { nftsData });
  };
  return (
    <TouchableWithoutFeedback>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={pressHandler}>
          <NftImage image={nftsData.image} imageStyles={styles.imageStyles} />
        </TouchableOpacity>
        <View style={styles.cardTop}>
          <NftAvatar avatars={nftsData.avatars} />
        </View>
        <View style={styles.cardBottom}>
          <View style={{ marginTop: SIZES.small + 5 }}>
            <NftTitle
              name={nftsData.name}
              creator={nftsData.creator}
              date={nftsData.date}
            />
          </View>
          <View style={{ marginTop: SIZES.small + 5 }}>
            <NftInfo
              comments={nftsData.comments}
              Views={nftsData.views}
              price={nftsData.price}
              love
            />
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
