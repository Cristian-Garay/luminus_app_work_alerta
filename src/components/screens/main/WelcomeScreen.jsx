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

            <View className='flex-1'>
                <Text className='text-gray-400 text-center p-4 text-md'>La respuesta a esta alerta es sólo válida dentro del partido de Moreno, Buenos Aires - Argentina</Text>
                {/* <Text className='text-center text-xl'>{loggedUser.nombre} {loggedUser.apellido}</Text> */}
                {/* 
                <View className='h-7 flex-row justify-center'>
                    <Text className='absolute w-[100%] bottom-0  mx-auto justify-center bg-slate-50'>Hola</Text>
                    <View className={`flex w-[76%] bg-[#BBBB]`}>
                    </View>
                    <View className={`flex w-[76%] bg-[#BBBB]`}>
                    </View>
                </View> */}


                <View className="flex-row h-16">
                    <View className="flex-1 bg-blue-500 justify-center" />
                    <Text className="absolute self-center text-lg text-white">
                        Centro del Texto
                    </Text>
                    <View className="flex-1 bg-green-500 justify-center" />
                </View>
            </View>

        </SafeAreaView>
    )
}