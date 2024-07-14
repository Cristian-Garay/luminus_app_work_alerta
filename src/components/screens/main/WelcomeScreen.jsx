import React, { useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList } from '../../navigation/loginNavigation';

import Icon from 'react-native-vector-icons/FontAwesome6';

import logo_url from '../../../assets/img/logo.png'

import { useAuth } from '../../context/AuthContext';
import { Colors } from '../../../helpers/constants';

export const WelcomeScreen = ({ navigation }) => {
    const { loggedUser, logOut } = useAuth();

    const color = Colors;

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


                <View className="flex-row h-12">
                    <View className="flex-1 bg-blue-500 justify-center" />
                    <View className="flex-1 bg-green-500 justify-center" />
                    <View className="absolute w-[100%] justify-center items-center h-[100%]" >
                        <Text className=" text-lg text-white">
                            REPORTAR ALERTA:
                        </Text>
                    </View>
                </View>

                <View className='flex-1 bg-white'>

                    <View className='h-48 flex-row m-3 justify-between my-7'>
                        <View className="flex-1 mx-1 flex-col p-4 justify-center items-center" style={{ backgroundColor: Colors.blue }}>
                            <Icon color={"white"} name="handcuffs" size={60} />
                            <Text className='mt-7 text-white text-base font-bold'>POLICIA</Text>
                        </View>
                        <View className="flex-1 mx-1 flex-col p-4 justify-center items-center" style={{ backgroundColor: Colors.red }}>
                            <Icon color={"white"} name="fire" size={60} />
                            <Text className='mt-7 text-white text-base font-bold'>BOMEROS</Text>
                        </View>
                        <View className="flex-1 mx-1 flex-col p-4 justify-center items-center" style={{ backgroundColor: "green" }}>
                            <Icon color={"white"} name="heart-pulse" size={60} />
                            <Text className='mt-7 text-white text-base font-bold'>MEDICA</Text>
                        </View>
                    </View>

                    <View className='h-2 flex-row'>
                        <View className='flex w-[76%]' style={{ backgroundColor: Colors.primary }} />
                        <View className='flex w-[7%]' style={{ backgroundColor: Colors.blue }} />
                        <View className='flex w-[7%]' style={{ backgroundColor: Colors.purple }} />
                        <View className='flex w-[10%]' style={{ backgroundColor: Colors.red }} />
                    </View>

                    <View className='h-40 flex-row m-3 justify-between mt-7'>
                        <TouchableOpacity className="flex-1 mx-1 flex-col p-4 justify-center items-center" style={{ backgroundColor: Colors.primary }} onPress={() => navigation.navigate("News")}>
                            <Icon color={"white"} name="bullhorn" size={60} />
                            <Text className='mt-5 text-white text-xs font-bold text-center'>NOVEDADES</Text>
                        </TouchableOpacity>
                        <View className="flex-1 mx-1 flex-col p-4 justify-center items-center" style={{ backgroundColor: Colors.blue }}>
                            <Icon color={"white"} name="tower-broadcast" size={60} />
                            <Text className='mt-5 text-white text-base font-bold text-center'>RADIO MORENO</Text>
                        </View>
                        <View className="flex-1 mx-1 flex-col p-4 justify-center items-center" style={{ backgroundColor: Colors.purple }}>
                            <Icon color={"white"} name="comment-dots" size={60} />
                            <Text className='mt-5 text-white text-xs text-center font-bold'>SUGERENCIAS</Text>
                        </View>
                    </View>

                </View>

                <View className='h-10 flex-row justify-center items-center'>
                    <Text className='text-gray-400 text-center text-md mr-1'>Copyright © - Municipio de Moreno, Bs As - Argentina</Text>
                    <Icon color={Colors.primary} name="heart" size={28} />
                </View>

                <View className='h-7 flex-row'>
                    <View className='flex w-[76%]' style={{ backgroundColor: Colors.primary }} />
                    <View className='flex w-[7%]' style={{ backgroundColor: Colors.blue }} />
                    <View className='flex w-[7%]' style={{ backgroundColor: Colors.purple }} />
                    <View className='flex w-[10%]' style={{ backgroundColor: Colors.red }} />
                </View>
            </View>
        </SafeAreaView>
    )
}