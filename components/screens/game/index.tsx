import React, { Dispatch, SetStateAction } from "react";
import { View, FlatList, Alert, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import useOrientation from "@/hooks/use-orientation";
import { UICard, UIButton, UIText } from "@/components/ui";
import Guess from "./components/guess";

type TProps = {
  userNumber: number;
  setGuessesAmount: Dispatch<SetStateAction<number | undefined>>;
  setGameOver: Dispatch<SetStateAction<boolean>>;
};

let minBoundary = 1;
let maxBoundary = 100;

const generateGuess: (min: number, max: number, exclude?: number) => number = (
  min,
  max,
  exclude
) => {
  const guess = Math.floor(Math.random() * (max - min)) + min;

  if (exclude && guess === exclude) {
    return generateGuess(min, max, exclude);
  }

  return guess;
};

const GameScreen: React.FC<TProps> = ({
  userNumber,
  setGuessesAmount,
  setGameOver,
}) => {
  const [currentGuess, setCurrentGuess] = React.useState(0);
  const [guesses, setGuesses] = React.useState<number[]>([]);

  const { isLandscape } = useOrientation();

  React.useEffect(() => {
    const initialGuess = generateGuess(minBoundary, maxBoundary, userNumber);

    setCurrentGuess(initialGuess);
    setGuesses([initialGuess]);
  }, []);

  const clickHandler = (button: "higher" | "lower") => {
    if (
      (button === "higher" && currentGuess >= userNumber) ||
      (button === "lower" && currentGuess <= userNumber)
    ) {
      Alert.alert("Error", "Stop lying. You know it's wrong.");
      return;
    }

    if (button === "higher") {
      minBoundary = currentGuess + 1;
    } else {
      maxBoundary = currentGuess;
    }

    const newGuess = generateGuess(minBoundary, maxBoundary);

    if (newGuess === userNumber) {
      setGuessesAmount(guesses.length);
      setGameOver(true);
      return;
    }

    setCurrentGuess(newGuess);
    setGuesses((prevState) => [newGuess, ...prevState]);
  };

  return (
    <View
      style={[
        styles.container,
        { flexDirection: isLandscape ? "row" : "column" },
      ]}
    >
      <UICard>
        <UIText style={styles.label}>Phone's guess:</UIText>
        <UIText style={styles.guess}>{currentGuess}</UIText>
        <View style={styles.buttonContainer}>
          <UIButton pressHandler={clickHandler.bind(this, "higher")}>
            <Ionicons name="add-outline" size={16} />
          </UIButton>
          <UIButton pressHandler={clickHandler.bind(this, "lower")}>
            <Ionicons name="remove-outline" size={16} />
          </UIButton>
        </View>
      </UICard>
      <View style={styles.guessesContainer}>
        <FlatList
          data={guesses}
          renderItem={({ item, index }) => (
            <Guess index={guesses.length - index} key={item}>
              {item}
            </Guess>
          )}
        />
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
