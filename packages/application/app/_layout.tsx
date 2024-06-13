import { Stack } from 'expo-router/stack';
import React from "react";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";


export default function Layout() {
    const [fontsLoaded] = useFonts({
        "WantedSans-Black": require("../assets/fonts/WantedSans-Black.otf"),
        "WantedSans-Bold": require("../assets/fonts/WantedSans-Bold.otf"),
        "WantedSans-Regular": require("../assets/fonts/WantedSans-Regular.otf"),
        "WantedSans-ExtraBold": require("../assets/fonts/WantedSans-ExtraBold.otf"),
        "WantedSans-ExtraBlack": require("../assets/fonts/WantedSans-ExtraBlack.otf"),
        "WantedSans-Medium": require("../assets/fonts/WantedSans-Medium.otf"),
        "WantedSans-SemiBold": require("../assets/fonts/WantedSans-SemiBold.otf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
      <NativeBaseProvider>
          <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
      </NativeBaseProvider>
    );
}