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
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNaviagtor = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#628A73',
                tabBarInactiveTintColor: '#94A3B8',
                tabBarStyle: {
                    position: 'absolute',
                    left: '4%',
                    margin: '2%',
                    height: '9.3%',
                    width: '87%',
                    borderRadius: 19,
                    bottom: '3.5%',
                    backgroundColor: '#FFFFFF',
                },
                tabBarLabelStyle: {
                    fontFamily: 'Adamina-Regular',
                    fontSize: 13,
                    textAlign: 'center',
                    marginBottom: '4.8%',
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
                            style={{ width: 22, height: 22, tintColor: color }}
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
                            style={{ width: 22, height: 22, tintColor: color }}
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
                            style={{ width: 22, height: 22, tintColor: color }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function Flora() {
    return (
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
