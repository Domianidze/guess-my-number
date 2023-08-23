import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MainLayout from "@/components/layouts/main";
import StartScreen from "@/components/screens/start";
import GameScreen from "@/components/screens/game";
import EndScreen from "./components/screens/end";

export default function App() {
  const [userNumber, setUserNumber] = React.useState<number>();
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
      {gameOver && !userNumber ? (
        <StartScreen setUserNumber={setUserNumber} setGameOver={setGameOver} />
      ) : null}
      {!gameOver && userNumber ? (
        <GameScreen userNumber={userNumber} setGameOver={setGameOver} />
      ) : null}
      {gameOver && userNumber ? (
        <EndScreen setUserNumber={setUserNumber} setGameOver={setGameOver} />
      ) : null}
    </MainLayout>
  );
}
