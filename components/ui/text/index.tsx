import React, { PropsWithChildren } from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

type TProps = {
  style?: TextStyle;
};

const UIText: React.FC<PropsWithChildren<TProps>> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default UIText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "adlam-display",
  },
});
