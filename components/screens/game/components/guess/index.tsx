import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";

type TProps = {
  index: number;
};

const Guess: React.FC<PropsWithChildren<TProps>> = ({ children, index }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess #{index}</Text>
      <Text style={styles.text}>{children}</Text>
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
