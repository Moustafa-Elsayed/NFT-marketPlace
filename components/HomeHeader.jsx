import { View, Text,StyleSheet,Image } from "react-native";
import React from "react";
import { SIZES } from "../constants";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text>HomeHeader</Text>
      <View>
        <Image/>
        <View>
            <Text>upertext</Text>
        </View>
        <View>
            <Text>lowerText</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
   padding:SIZES.small
    },

  });
export default HomeHeader;
