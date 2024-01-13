import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import NFTDetails from "./screens/NftDetails";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load fonts using the Font.loadAsync method
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        InterLight: require("./assets/fonts/Inter-Light.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while the fonts are loading
  }

  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="NFT-details" component={NFTDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
