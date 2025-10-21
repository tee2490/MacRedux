// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigators from "./src/screen/Navigators";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
        <Navigators />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
