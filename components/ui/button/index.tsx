import React, { PropsWithChildren } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const UIButton: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Pressable style={styles.container}>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    width: "100%",
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 32,
  },
});
