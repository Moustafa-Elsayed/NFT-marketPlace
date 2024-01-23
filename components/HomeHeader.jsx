import { View, Text, StyleSheet, Image, TextInput, Dimensions } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import avatar03 from "../assets/images/avatars/avatar03.jpg";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
const { width, height } = Dimensions.get("window");

const HomeHeader = ({ searchHandler }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar03} style={styles.image} />
        <View>
          <View style={styles.uperCont}>
            <Text style={styles.uperText}>Mostafa El-Sayed</Text>
            <Text>
              <Feather name="user-check" size={20} color={COLORS.white} />
            </Text>
          </View>
          <View>
            <Text style={styles.creator}>creater</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchCont}>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={24} color="white" />
          <TextInput
            placeholder="search by NFT Name"
            placeholderTextColor={Colors.white}
            onChangeText={searchHandler}
            style={{ flex: 1, color: COLORS.white }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
    width:width
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  uperCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  uperText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
  creator: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
  },
  searchContainer: {
    backgroundColor: COLORS.cardBg,
    width: "100%",
    borderRadius: SIZES.small,
    borderColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 30,
  },
});
export default HomeHeader;
