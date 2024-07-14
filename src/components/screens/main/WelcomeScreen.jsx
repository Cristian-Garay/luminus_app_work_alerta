import React, { useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList } from '../../navigation/loginNavigation';

import logo_url from '../../../assets/img/logo.png'

import { useAuth } from '../../context/AuthContext';
import { Colors } from '../../../helpers/constants';

export const WelcomeScreen = ({ navigation }) => {
    const { loggedUser, logOut } = useAuth();

    const loggingOut = () => {
        console.log(loggedUser);

        logOut();
    }

    return (
        <SafeAreaView className='flex-1 flex bg-white'>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

            <View className='flex-1 justify-center'>
                <Text className='text-center p-4 text-lg'>Bienvenido</Text>
                <Text className='text-center text-xl'>{loggedUser.nombre} {loggedUser.apellido}</Text>
            </View>

        </SafeAreaView>
    )
}