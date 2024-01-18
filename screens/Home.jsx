import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import { DATA } from "../constants";
import NFtCard from "../components/NFtCard";
import HomeHeader from "../components/HomeHeader";
const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);
  const searchHandler = (value) => {
    if (value) {
      const filterData = DATA.filter((nft) =>
        nft.name.toLowerCase().includes(value.toLowerCase())
      );
      setNftsData(filterData);
    } else {
      setNftsData(DATA);
    }
  };
  const NotFoundNFT = () => {
    return (
      <View style={styles.NotFound}>
        <Text style={styles.textNot}>Opps... ! </Text>
        <Text style={styles.textNot}>Not found the NFT</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <HomeHeader searchHandler={searchHandler} />
        {!nftsData.length ? (
          <NotFoundNFT />
        ) : (
          <FlatList
            data={nftsData}
            renderItem={({ item }) => <NFtCard nftsData={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
    paddingTop: 50,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.xLarge + 9,
    paddingTop: SIZES.xLarge + 100,
  },
  NotFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge + 10,
  },
  textNot: {
    fontSize: 40 ,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
export default Home;
