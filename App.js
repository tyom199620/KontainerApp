import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from "./navigation";
import {connectFonts} from "./components/helpers/connectFonts";
import {useFonts} from "expo-font";
import { Provider as StoreProvider } from 'react-redux';
import store from "./store";
import FlashMessage from "react-native-flash-message";

export default function App() {
    const [loaded] = connectFonts(useFonts);
    if (!loaded) return null;

    return (
        <StoreProvider store={store}>
            <Navigation />
            <StatusBar style="auto" backgroundColor={'white'} />
            <FlashMessage position="bottom" />
        </StoreProvider>
    );
}

