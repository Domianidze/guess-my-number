import React, { PropsWithChildren } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import useOrientation from "@/hooks/use-orientation";

type TProps = {
  style?: ViewStyle;
};

const UICard: React.FC<PropsWithChildren<TProps>> = ({ children, style }) => {
  const { isLandscape } = useOrientation();
  const marginKey = isLandscape ? "marginHorizontal" : "marginVertical";

  return (
    <View style={[styles.container, { [marginKey]: 16 }, style]}>
      {children}
    </View>
  );
};

export default UICard;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
  },
});
