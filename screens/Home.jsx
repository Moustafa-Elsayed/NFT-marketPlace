import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import { DATA } from "../constants";
import NFtCard from "../components/NFtCard";
const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={nftsData}
          renderItem={({ item }) => <NFtCard nftsData={item} />}
          keyExtractor={(item) => item.id}
        />
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
    paddingTop:50
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.xLarge + 9,
    paddingTop: SIZES.xLarge + 100,
  },
});
export default Home;
