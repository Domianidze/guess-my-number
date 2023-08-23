import React from "react";
import MainLayout from "@/components/layouts/main";
import StartScreen from "@/components/screens/start";

export default function App() {
  const [userNumber, setUserNumber] = React.useState<number>();

  return (
    <MainLayout>
      {!userNumber && <StartScreen setUserNumber={setUserNumber} />}
    </MainLayout>
  );
}
