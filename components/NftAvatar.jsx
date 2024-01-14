import { View, StyleSheet, Image } from "react-native";
import React from "react";

const NftAvatar = ({ avatars }) => {
  return (
    <View style={styles.container}>
      {avatars.map((avatar) => (
        <Image
          key={avatar.id}
          source={avatar.image}
          resizeMode="contain"
          style={styles.avatar}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    paddingHorizontal:5

  },
  avatar: {
    width:40,
    height:40,
    borderRadius:40
  },
});
export default NftAvatar;
