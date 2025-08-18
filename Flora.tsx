import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding1 from "./screens/onBoardingScreens/Screen1";
import Onboarding2 from "./screens/onBoardingScreens/Screen2";
import Onboarding3 from "./screens/onBoardingScreens/Screen3";
import LoginScreen from "./screens/StackScreens/Login";
import Home from "./screens/StackScreens/Home";
import Register from "./screens/StackScreens/Register";

const Stack = createNativeStackNavigator();

export default function Flora() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Onboarding1" component={Onboarding1} />
                <Stack.Screen name="Onboarding2" component={Onboarding2} />
                <Stack.Screen name="Onboarding3" component={Onboarding3} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
