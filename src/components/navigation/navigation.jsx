import React from 'react'

import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { LoginNavigation } from './loginNavigation';
import { MainNavigation } from './mainNavigation';

import { useAuth } from '../context/AuthContext';

export const Navigation = () => {
    const { loggedUser } = useAuth();

    return (
        <NavigationContainer>
            {
                loggedUser !== null
                    ? <MainNavigation />
                    : <LoginNavigation />
            }
        </NavigationContainer>
    );
}
