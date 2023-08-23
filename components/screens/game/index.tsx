import React, { Dispatch, SetStateAction } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { UICard, UIButton, UIText } from "@/components/ui";
import Guess from "./components/guess";

type TProps = {
  userNumber: number | undefined;
  setUserNumber: Dispatch<SetStateAction<number | undefined>>;
};

const GameScreen: React.FC<TProps> = ({ userNumber, setUserNumber }) => {
  const [guesses, setGuesses] = React.useState<string[]>(["00"]);

  return (
    <View style={styles.container}>
      <UICard>
        <UIText style={styles.label}>Phone's guess:</UIText>
        <UIText style={styles.guess}>00</UIText>
        <View style={styles.buttonContainer}>
          <UIButton>+</UIButton>
          <UIButton>-</UIButton>
        </View>
      </UICard>
      <View style={styles.guessesContainer}>
        {guesses.map((guess, i) => (
          <Guess index={guesses.length - i} key={guess}>
            {guess}
          </Guess>
        ))}
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 26,
    color: "white",
  },
  guess: {
    fontSize: 72,
    color: "white",
  },
  buttonContainer: {
    width: "100%",
  },
  guessesContainer: {
    flex: 0.5,
  },
});
