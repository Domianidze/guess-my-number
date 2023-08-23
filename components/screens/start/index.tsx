import React, { Dispatch, SetStateAction } from "react";
import { View, TextInput, Alert, StyleSheet } from "react-native";
import { UICard, UIButton, UIText } from "@/components/ui";

type TProps = {
  setUserNumber: Dispatch<SetStateAction<number | undefined>>;
};

const StartScreen: React.FC<TProps> = ({ setUserNumber }) => {
  const [value, setValue] = React.useState("");

  const changeHandler = (newValue: string) => {
    setValue(newValue);
  };

  const submitHandler = () => {
    if (+value < 1 || +value > 99) {
      Alert.alert("User number must be between 1 and 99.");
    }

    setUserNumber(+value);
  };

  const clearHandler = () => {
    setValue("");
  };

  return (
    <View style={styles.container}>
      <UICard>
        <UIText style={styles.label}>Your number:</UIText>
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
        <View style={styles.buttonContainer}>
          <UIButton pressHandler={submitHandler}>Submit</UIButton>
          <UIButton pressHandler={clearHandler}>Reset</UIButton>
        </View>
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
