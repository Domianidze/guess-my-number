import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MainLayout from "@/components/layouts/main";
import StartScreen from "@/components/screens/start";
import GameScreen from "@/components/screens/game";

export default function App() {
  const [userNumber, setUserNumber] = React.useState<number>();

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
      {!userNumber ? <StartScreen setUserNumber={setUserNumber} /> : null}
      {userNumber ? (
        <GameScreen userNumber={userNumber} setUserNumber={setUserNumber} />
      ) : null}
    </MainLayout>
  );
}
