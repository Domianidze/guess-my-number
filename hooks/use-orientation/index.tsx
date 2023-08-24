import React from "react";
import { useWindowDimensions } from "react-native";

export type TOrientation = "portrait" | "landscape";

const useOrientation = () => {
  const [orientation, setOrientation] =
    React.useState<TOrientation>("portrait");

  const { height, width } = useWindowDimensions();

  React.useEffect(() => {
    const updatedOrientation = width > height ? "landscape" : "portrait";

    setOrientation(updatedOrientation);
  }, [height, width]);

  return { orientation, isLandscape: orientation === "landscape" };
};

export default useOrientation;
