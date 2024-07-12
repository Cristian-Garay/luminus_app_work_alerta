import React from 'react'

import { LoginScreen } from '../screens/login/LoginScreen';
import { SignUpScreen } from '../screens/login/SignUpScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/login/WelcomeScreen';

export type LoginStackParamList = {
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
};

const Stack = createStackNavigator<LoginStackParamList>();
// const Stack = createStackNavigator();

export const LoginNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                cardStyleInterpolator: ({ current, layouts }) => {
                    return {
                        cardStyle: {
                            transform: [
                                {
                                    translateX: current.progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [layouts.screen.width, 0],
                                    }),
                                },
                            ],
                        },
                    };
                },
            }}>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
