import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import Button from "../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const NftInfo = ({ comments, Views, love, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>
          <MaterialCommunityIcons
            name="comment-text-multiple-outline"
            size={20}
            color={COLORS.white}
          />
        </Text>
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text>
          <Ionicons name="eye" size={20} color={COLORS.white} />
        </Text>
        <Text style={styles.text}>{Views}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text>
          <Feather name="dollar-sign" size={20} color={COLORS.white} />
        </Text>
        <Text style={styles.text}>{price}</Text>
      </View>
      {love && (
        <View>
          <Button
            icon={<AntDesign name="heart" size={18} color={COLORS.second} 
            />
            }
            stylesButton={styles.buttonHeart}

          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SIZES.small,
    backgroundColor: COLORS.second,
    width: 90,
    borderRadius: 50,
    paddingVertical: 3,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
  },
  buttonHeart:{
    backgroundColor:COLORS.bg,
    borderRadius:20,
    padding:5,
    borderWidth:1,
    borderColor:COLORS.second
  },
});
export default NftInfo;
