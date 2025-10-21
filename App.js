// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigators from "./src/screen/Navigators";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigators />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
