import React, { PropsWithChildren } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type TProps = {
  pressHandler?: () => void;
};

const UIButton: React.FC<PropsWithChildren<TProps>> = ({
  children,
  pressHandler,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}
      onPress={pressHandler}
    >
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
  containerPressed: {
    opacity: 0.8,
  },
});
