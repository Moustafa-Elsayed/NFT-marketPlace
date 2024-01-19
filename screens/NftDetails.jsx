import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import NftImage from "../components/NftImage";
import NftAvatar from "../components/NftAvatar";
import NftTitle from "../components/NftTitle";
import NftInfo from "../components/NftInfo";

const NftDetails = ({ route, navigation }) => {
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
        </View>
        <View>
          <Text style={{ color: "red" }}>dlkfl</Text>
        </View>
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
