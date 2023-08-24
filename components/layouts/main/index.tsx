import React, { PropsWithChildren } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/colors";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LinearGradient
        colors={[Colors.background700, Colors.background400]}
        style={styles.container}
      >
        <ImageBackground
          source={require("@/assets/images/grunge.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.background}
        >
          <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    ...(Platform.OS === "android" && { paddingHorizontal: 8 }),
  },
  background: {
    opacity: 0.1,
  },
});
