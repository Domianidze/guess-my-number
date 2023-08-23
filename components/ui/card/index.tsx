import React, { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

const UICard: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default UICard;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginVertical: 16,
    padding: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
  },
});
