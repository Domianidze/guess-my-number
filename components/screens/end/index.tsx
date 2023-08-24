import React, { Dispatch, SetStateAction } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import useOrientation from "@/hooks/use-orientation";
import { UIButton, UIText } from "@/components/ui";

type TProps = {
  userNumber: number;
  guessesAmount: number;
  setUserNumber: Dispatch<SetStateAction<number | undefined>>;
  setGuessesAmount: Dispatch<SetStateAction<number | undefined>>;
};

const EndScreen: React.FC<TProps> = ({
  userNumber,
  guessesAmount,
  setUserNumber,
  setGuessesAmount,
}) => {
  const { isLandscape } = useOrientation();

  const restartHandler = () => {
    setUserNumber(undefined);
    setGuessesAmount(undefined);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/success.png")}
          alt="success"
        />
      </View>
      <View>
        <UIText style={styles.text}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{guessesAmount}</Text> rounds to guess
          the number <Text style={styles.highlight}>{userNumber}</Text>
        </UIText>
        <UIButton pressHandler={restartHandler}>Restart</UIButton>
      </View>
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
    color: "rgba(255, 255, 255, 0.5)",
  },
});
