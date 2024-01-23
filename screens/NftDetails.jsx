import { View, StyleSheet, SafeAreaView, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import NftImage from "../components/NftImage";
import NftAvatar from "../components/NftAvatar";
import NftTitle from "../components/NftTitle";
import NftInfo from "../components/NftInfo";
import MoreDetails from "../components/MoreDetails";
const { width, height } = Dimensions.get("window");
const NftDetails = ({ route, navigation }) => {
  constpressHandler = () => {
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
          linear
        />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ marginTop: -SIZES.small - 10 }}>
            <NftAvatar avatars={nftsData.avatars} />
          </View>
          <View style={{ marginTop: SIZES.small }}>
            <NftTitle
              name={nftsData.name}
              creator={nftsData.creator}
              date={nftsData.date}
            />
          </View>
          <View style={{ marginTop: SIZES.small }}>
            <NftInfo
              Views={nftsData.Views}
              comments={nftsData.comments}
              price={nftsData.price}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <MoreDetails
              address={nftsData.address}
              tokenId={nftsData.tokenId}
              tokenSt={nftsData.tokenSt}
              blockchain={nftsData.blockchain}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    width: width,
    height: height,
  },
  content: {
    flex: 1,
  },
  imageStyles: {
    width: width,
    aspectRatio: 16 / 14,
    height: 400,
    borderRadius: 20,
  },
});
export default NftDetails;
