import React, { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { UIText } from "@/components/ui";

type TProps = {
  index: number;
};

const Guess: React.FC<PropsWithChildren<TProps>> = ({ children, index }) => {
  return (
    <View style={styles.container}>
      <UIText style={styles.text}>Guess #{index}</UIText>
      <UIText style={styles.text}>{children}</UIText>
    </View>
  );
};

export default Guess;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
