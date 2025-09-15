import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding1 from './screens/onBoardingScreens/Screen1';
import Onboarding2 from './screens/onBoardingScreens/Screen2';
import Onboarding3 from './screens/onBoardingScreens/Screen3';
import LoginScreen from './screens/StackScreens/Login';
import Register from './screens/StackScreens/Register';
import MyGarden from './screens/BottomTabScreens/MyGarden';
import Profile from './screens/BottomTabScreens/Profile';
import Home from './screens/BottomTabScreens/Home';
import { Image } from 'react-native';
import AddPlant from './screens/StackScreens/AddPlant';
import PlantAdded from './screens/StackScreens/PlantAdded';
import Care from './screens/StackScreens/Care';
import Scanner from './screens/StackScreens/Scanner';
import SymptomChecker from './screens/StackScreens/SymptomChecker';
import CareSchedule from './screens/StackScreens/CareSchedule';
import ExpertTips from './screens/StackScreens/ExpertTips';
import ForgotPasswordScreen from './screens/StackScreens/ForgotPassword';
import MonitorHealth from './screens/StackScreens/MonitorHealth';
import Q2Screen from './screens/StackScreens/Q2Screen';
import { PlantProvider } from './screens/PlantContext';
import rfSpacing from './src/Theme/rfSpacing';
import color from './src/Theme/color';
import Q3Screen from './screens/StackScreens/Q3Screen';
import Q4Screen from './screens/StackScreens/Q4Screen';
import Q5Screen from './screens/StackScreens/Q5Screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNaviagtor = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: color.F_OnBoard,
                tabBarInactiveTintColor: color.F_InActive,
                tabBarStyle: {
                    position: 'absolute',
                    left: rfSpacing['10x'],
                    right: rfSpacing['9x'],
                    height: rfSpacing['70x'],
                    borderRadius: rfSpacing['18x'],
                    bottom: rfSpacing['20x'],
                    backgroundColor: color.F_White,
                },
                tabBarLabelStyle: {
                    fontFamily: 'Adamina-Regular',
                    fontSize: rfSpacing['14x'],
                    textAlign: 'center',
                    paddingBottom: rfSpacing['4x']
                },

                headerShown: false,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('./screens/pic/home.png')}
                            style={{ width: rfSpacing['23x'], height: rfSpacing['23x'], tintColor: color }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="My Garden"
                component={MyGarden}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('./screens/pic/park.png')}
                            style={{ width: rfSpacing['23x'], height: rfSpacing['23x'], tintColor: color }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={require('./screens/pic/user.png')}
                            style={{ width: rfSpacing['23x'], height: rfSpacing['23x'], tintColor: color }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function Flora() {
    return (
        <PlantProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Onboarding1" component={Onboarding1} />
                    <Stack.Screen name="Onboarding2" component={Onboarding2} />
                    <Stack.Screen name="Onboarding3" component={Onboarding3} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Main" component={TabNaviagtor} />
                    <Stack.Screen name='Add Plant' component={AddPlant} />
                    <Stack.Screen name='Plant Added' component={PlantAdded} />
                    <Stack.Screen name='Care' component={Care} />
                    <Stack.Screen name='Scanner' component={Scanner} />
                    <Stack.Screen name='Checker' component={SymptomChecker} />
                    <Stack.Screen name='Care Schedule' component={CareSchedule} />
                    <Stack.Screen name='Expert Tips' component={ExpertTips} />
                    <Stack.Screen name='Forgot' component={ForgotPasswordScreen} />
                    <Stack.Screen name='Monitor' component={MonitorHealth} />
                    <Stack.Screen name='Q2' component={Q2Screen} />
                    <Stack.Screen name='Q3' component={Q3Screen} />
                    <Stack.Screen name='Q4' component={Q4Screen} />
                    <Stack.Screen name='Q5' component={Q5Screen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PlantProvider>

    );
}
