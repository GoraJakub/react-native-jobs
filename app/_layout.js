import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";

import { FONT } from "../constants";

const Layout = () => {
    let [fontsLoaded, fontError] = useFonts({
        [FONT.regular]: require('../assets/fonts/DMSans-Regular.ttf'),
        [FONT.bold]: require('../assets/fonts/DMSans-Bold.ttf'),
        [FONT.medium]: require('../assets/fonts/DMSans-Medium.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return <Stack onLayout={onLayoutRootView}/>
}

export default Layout