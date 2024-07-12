import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/main/WelcomeScreen';

export type LoginStackParamList = {
    Welcome: undefined;
};

const Stack = createStackNavigator<LoginStackParamList>();
// const Stack = createStackNavigator();

export const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome'
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
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
