import { View, Text, StyleSheet, Image, Animated,BackHandler,Alert, SafeAreaView } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import nft08 from "../assets/images/nft08.jpg";
import nft06 from "../assets/images/nft06.jpg";
import nft04 from "../assets/images/nft04.jpg";
import Button from "../compomnents/Button";
import { useNavigation } from "@react-navigation/native";
const Welcome = () => {
  // navigation
  const navigation = useNavigation();
  pressHandler = () => {
    navigation.navigate("Home");
  };
  const duration = 1000;
  const delay = duration + 300;
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;
  const fadebtnAnimation = useRef(new Animated.Value(0)).current;

  /** Animations Handlers */
  const imagesAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.spring(moveImagesAnimation, {
        toValue: { x: 0, y: 0 },
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const textAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };
  const buttonAnimationHandler = () => {
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      friction: 4,
      delay,
      useNativeDriver: true,
    }).start();
  };
  const btnAnimationHandler = () => {
    Animated.timing(fadebtnAnimation, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    btnAnimationHandler();
    imagesAnimationHandler();
    textAnimationHandler();
    buttonAnimationHandler();
    
  }, [btnAnimationHandler,imagesAnimationHandler, textAnimationHandler, buttonAnimationHandler]);
// BackHandler 
useEffect(() => {
  const backAction = () => {
    Alert.alert(
      'Hold on!',
      'Are you sure you want to go back?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => BackHandler.exitApp(),
          style: 'destructive', // You can customize this style
        },
      ],

    );
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );

  return () => backHandler.remove();
}, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: fadeImagesAnimation,
            transform: moveImagesAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imagCard}>
          <Image style={styles.image} source={nft08} />
        </View>
        <View style={[styles.imagCard, { top: SIZES.medium + 20 }]}>
          <Image style={styles.image} source={nft06} />
        </View>
        <View style={styles.imagCard}>
          <Image style={styles.image} source={nft04} />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.textConatiner,
          {
            opacity: fadeTextAnimation,
          },
        ]}
      >
        <Text style={styles.mainText}>Find, Collect and sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs and buy ans sells your NFTs aw well{" "}
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              {
                translateY: moveButtonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      >
        <Button
          title="Get Started"
          pressHandler={pressHandler}
          stylesButton={styles.button}
          styleText={styles.textButton}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
  },

  imageContainer: {
    flexDirection: "row",
    gap: SIZES.small,
  },
  imagCard: {
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: SIZES.medium,
  },
  textConatiner: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xLarge + 6,
  },
  mainText: {
    color: COLORS.white,
    fontSize: SIZES.xLarge + 6,
    textAlign: "center",
    fontFamily: FONTS.bold,
  },
  subText: {
    marginTop: SIZES.large,
    color: COLORS.gray,
    textAlign: "center",
    fontFamily: FONTS.light,
  },
  buttonContainer: {
    position: "absolute",
    bottom: SIZES.xLarge + 10,
    marginVertical: SIZES.xLarge,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 4,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  textButton: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
});
export default Welcome;
