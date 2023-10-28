import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
// import { StyleSheet } from "react-native";
import store, { persistor } from "./redux/store";
import Navigation from "./components/Navigation.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>
          <Navigation />
          <StatusBar style="auto" />
        </View>
      </PersistGate>
    </Provider>
  );
}
