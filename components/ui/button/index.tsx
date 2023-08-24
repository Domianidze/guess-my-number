import React, { PropsWithChildren } from "react";
import { Pressable, StyleSheet } from "react-native";
import UIText from "../text";

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
      <UIText>{children}</UIText>
    </Pressable>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    paddingHorizontal: 16,
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
