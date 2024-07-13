import React, { useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList } from '../../navigation/loginNavigation';

import logo_url from '../../../assets/img/logo.png'

import { useAuth } from '../../context/AuthContext';

type WelcomeScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>;

type Props = {
    navigation: WelcomeScreenNavigationProp;
};

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
    const { loggedUser, logOut } = useAuth();

    const loggingOut = () => {
        console.log(loggedUser);

        logOut();
    }

    console.log("LOGUEADO", loggedUser.nombre);


    return (
        <SafeAreaView className='flex-1 flex bg-white'>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <View className='h-16 flex-row'>
                <View className='w-[20%]'>

                </View>
                <View className='w-[60%] flex-row justify-center -mt-2'>
                    <Image source={logo_url} className='flex h-20' style={{ resizeMode: "contain" }} />
                </View>
                <View className='w-[20%]'>

                </View>
            </View>

            <View className='flex-1 justify-center'>
                <Text className='text-center p-4 text-lg'>Bienvenido</Text>
                <Text className='text-center text-xl'>{loggedUser.nombre} {loggedUser.apellido}</Text>
                <TouchableOpacity className='py-3 bg-[#00ABE0] rounded-3xl mx-16 mt-10' onPress={() => loggingOut()}>
                    <Text className=' text-lg font-bold text-center text-white'>
                        Cerrar Sessión
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
