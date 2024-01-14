import { View, Text,TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ pressHandler, icon, styleText, title, stylesButton }) => {
  const RenderContentIconOrText = () => {
    if (!icon) {
      return <Text style={styleText}> {title && title}</Text>;
    } else {
      return icon;
    }
  };
  return (
    <TouchableOpacity style={stylesButton} onPress={pressHandler}>
      <RenderContentIconOrText />
    </TouchableOpacity>
  );
};

export default Button;
