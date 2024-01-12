import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
// react-nativeNavigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import Welocome from "./screens/Welocome";
import Home from "./screens/Home.jsx";
import NftDetails from "./screens/NftDetails.jsx";

export default function App() {
  const { fontLoad } = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBod: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  // if (!fontLoad) return null;
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Screen name="welcome" component={Welocome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Nft-details" component={NftDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 15,
  },
});
