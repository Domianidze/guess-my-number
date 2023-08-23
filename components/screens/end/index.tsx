import React, { Dispatch, SetStateAction } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { UIButton, UIText } from "@/components/ui";

type TProps = {
  setUserNumber: Dispatch<SetStateAction<number | undefined>>;
  setGameOver: Dispatch<SetStateAction<boolean>>;
};

const EndScreen: React.FC<TProps> = ({ setUserNumber, setGameOver }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/success.png")}
          alt="success"
        />
      </View>
      <UIText style={styles.text}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>
      </UIText>
      <UIButton>Restart</UIButton>
    </View>
  );
};

export default EndScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    marginVertical: 24,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  highlight: {
    opacity: 0.5,
  },
});
