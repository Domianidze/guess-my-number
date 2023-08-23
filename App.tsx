import React from "react";
import MainLayout from "@/components/layouts/main";
import StartScreen from "@/components/screens/start";
import GameScreen from "@/components/screens/game";

export default function App() {
  const [userNumber, setUserNumber] = React.useState<number>();

  return (
    <MainLayout>
      {!userNumber && <StartScreen setUserNumber={setUserNumber} />}
      {userNumber && (
        <GameScreen uesrNumber={userNumber} setUserNumber={setUserNumber} />
      )}
    </MainLayout>
  );
}
