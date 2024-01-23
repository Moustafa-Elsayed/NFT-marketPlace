import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import Button from "./Button";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const MoreDetails = ({ address, tokenId, tokenSt, blockchain }) => {
  const navigation = useNavigation();
  pressHandler = () => {
    navigation.navigate("Home");
  };
  const moveBtnAnimation = useRef(new Animated.Value(1)).current;
  const fadeButtonAnimation = useRef(new Animated.Value(0)).current;

  const buttonAnimationHandler = () => {
    Animated.spring(moveBtnAnimation, {
      toValue: 0,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };
  const btnAnimationHandler = () => {
    Animated.timing(fadeButtonAnimation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    buttonAnimationHandler();
    btnAnimationHandler();
  }, [buttonAnimationHandler, btnAnimationHandler]);
  return (
    <View>
      <View style={styles.details}>
        <Text style={styles.title}>Contract Address</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Toked Id</Text>
        <Text style={styles.value}>{tokenId}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Token Stander</Text>
        <Text style={styles.value}>{tokenSt}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>blockchain</Text>
        <Text style={styles.value}>{blockchain}</Text>
      </View>
      <Animated.View
        style={[
          styles.btnContainer,
          {
            transform: [
              {
                translateY: moveBtnAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
          },
        ]}
      >
        <View
          style={{
            gap: 5,
          }}
        >
          <View>
            <Text style={styles.text}>Top Bid</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <FontAwesome name="dollar" size={18} color={COLORS.white} />
            <Text style={styles.text}>100,00</Text>
          </View>
        </View>
        <View>
          <Button
            title={"Place a Bid"}
            stylesButton={styles.button}
            styleText={styles.btnText}
            pressHandler={pressHandler}
          />
        </View>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    backgroundColor: COLORS.bg,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBg,
  },
  title: {
    color: COLORS.white,
  },
  value: {
    color: COLORS.gray,
  },
  btnContainer: {
    backgroundColor: COLORS.cardBg,
    width: width < 800 ? width*.90 : width * 0.6,
    borderRadius: 20,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    marginTop: height > 400 ? 30 : 60,
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.second,
    width: 100,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});
export default MoreDetails;
