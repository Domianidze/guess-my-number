import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MainLayout from "@/components/layouts/main";
import StartScreen from "@/components/screens/start";
import GameScreen from "@/components/screens/game";
import EndScreen from "./components/screens/end";

export default function App() {
  const [userNumber, setUserNumber] = React.useState<number>();
  const [guessesAmount, setGuessesAmount] = React.useState<number>();
  const [gameOver, setGameOver] = React.useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    "adlam-display": require("@/assets/fonts/AdlamDisplay-Regular.ttf"),
  });

  React.useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <MainLayout>
      {!userNumber && gameOver ? (
        <StartScreen setUserNumber={setUserNumber} setGameOver={setGameOver} />
      ) : null}
      {userNumber && !gameOver ? (
        <GameScreen
          userNumber={userNumber}
          setGuessesAmount={setGuessesAmount}
          setGameOver={setGameOver}
        />
      ) : null}
      {userNumber && guessesAmount && gameOver ? (
        <EndScreen
          userNumber={userNumber}
          guessesAmount={guessesAmount}
          setGuessesAmount={setGuessesAmount}
          setUserNumber={setUserNumber}
        />
      ) : null}
    </MainLayout>
  );
}
