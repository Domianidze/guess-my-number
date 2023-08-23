import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { UICard, UIButton } from "@/components/ui";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <UICard>
        <Text style={styles.label}>Your number:</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="rgba(255, 255, 255, 0.1)"
          keyboardType="number-pad"
          returnKeyType={"done"}
          maxLength={2}
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <UIButton>Submit</UIButton>
          <UIButton>Reset</UIButton>
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
    color: "white",
  },
  buttonContainer: {
    width: "100%",
  },
});
