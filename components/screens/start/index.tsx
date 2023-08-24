import React, { Dispatch, SetStateAction } from "react";
import { View, TextInput, Alert, StyleSheet } from "react-native";
import useOrientation from "@/hooks/use-orientation";
import { UICard, UIButton, UIText } from "@/components/ui";

type TProps = {
  setUserNumber: Dispatch<SetStateAction<number | undefined>>;
  setGameOver: Dispatch<SetStateAction<boolean>>;
};

const StartScreen: React.FC<TProps> = ({ setUserNumber, setGameOver }) => {
  const [value, setValue] = React.useState("");

  const { isLandscape } = useOrientation();

  const changeHandler = (newValue: string) => {
    setValue(newValue);
  };

  const submitHandler = () => {
    if (+value < 1 || +value > 99) {
      Alert.alert("Invalid Number", "User number must be between 1 and 99.");
      return;
    }

    setUserNumber(+value);
    setGameOver(false);
  };

  const clearHandler = () => {
    setValue("");
  };

  return (
    <View style={styles.container}>
      <UICard style={{ flex: isLandscape ? 0.25 : 0.5 }}>
        {!isLandscape ? (
          <UIText style={styles.label}>Your number:</UIText>
        ) : null}
        <TextInput
          style={styles.input}
          value={value}
          placeholder="0"
          placeholderTextColor="rgba(255, 255, 255, 0.1)"
          keyboardType="number-pad"
          returnKeyType={"done"}
          autoFocus={true}
          maxLength={2}
          onSubmitEditing={submitHandler}
          onChangeText={changeHandler}
        />
        {!isLandscape ? (
          <View style={styles.buttonContainer}>
            <UIButton pressHandler={submitHandler}>Submit</UIButton>
            <UIButton pressHandler={clearHandler}>Reset</UIButton>
          </View>
        ) : null}
      </UICard>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 26,
    color: "white",
  },
  input: {
    fontSize: 72,
    fontFamily: "adlam-display",
    color: "white",
  },
  buttonContainer: {
    width: "100%",
  },
});
