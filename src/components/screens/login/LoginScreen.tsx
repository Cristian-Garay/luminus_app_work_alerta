import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, KeyboardAvoidingView, Platform, StyleSheet, FlatList, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList } from '../../navigation/loginNavigation';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';

import logo_url from '../../../assets/img/logo.png'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { makeHash } from '../../../helpers/makeHash';

import { useAuth } from '../../context/AuthContext';

type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

type FormData = {
    dni: string;
    password: string;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const { logIn } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        logIn(data);
    };

    return (
        <View className='flex-1'>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                extraScrollHeight={20}
                enableOnAndroid={true}
            >
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

                <View className='flex-1 bg-white'>
                    <View className='flex-row justify-center'>
                        <Image source={logo_url} className=' h-[200] w-[100%]' style={{ resizeMode: "contain" }} />
                    </View>

                    <View className='form space-y-5 mt-16'>
                        <Controller
                            control={control}
                            // rules={{
                            //     required: 'E-Mail es requerido',
                            //     pattern: {
                            //         value: /^\S+@\S+$/i,
                            //         message: 'E-Mail inválido',
                            //     },
                            // }}
                            defaultValue='31014119'
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='border-b border-gray-400 mx-4 text-gray-400 mt-3'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder='DNI'
                                />
                            )}
                            name="dni"
                        />
                        {errors.dni && <Text className='text-red-500 ml-4'>{errors.dni.message}</Text>}

                        <Controller
                            control={control}
                            // rules={{ required: 'Contraseña es requerida' }}
                            defaultValue='sonvolt'
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    secureTextEntry
                                    className='border-b border-gray-400 mx-4 text-gray-400 mt-6'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder='Contraseña'
                                />
                            )}
                            name="password"
                        />
                        {errors.password && <Text className='text-red-500 ml-4'>{errors.password.message}</Text>}


                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className='flex items-center mb-5 pt-3'
                        >
                            <Text className='text-[#00ABE0] font-bold text-base'>Olvidaste tu Contraseña??</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className='py-3 bg-[#00ABE0] rounded-3xl mx-10' onPress={handleSubmit(onSubmit)}>
                            <Text className=' text-lg font-bold text-center text-white'>
                                INGRESAR A MI CUENTA
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View className='h-7 flex-row'>
                    <View className='flex w-[76%] bg-[#00ABE0]'>
                    </View>
                    <View className='flex w-[7%] bg-[#3C4C6E]'>
                    </View>
                    <View className='flex w-[7%] bg-[#9A76A6]'>
                    </View>
                    <View className='flex w-[10%] bg-[#EB557A]'>
                    </View>
                </View>
            </KeyboardAwareScrollView >
        </View>

    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     scrollContainer: {
//         flexGrow: 1,
//     },
//     content: {
//         flex: 1,
//         backgroundColor: 'white',
//         paddingBottom: 50, // Add padding to ensure footer is not covered
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         margin: 20,
//     },
//     footer: {
//         height: 50,
//         flexDirection: 'row',
//     },
//     bar: {
//         flex: 1,
//     },
//     blue: {
//         backgroundColor: '#00ABE0',
//     },
//     darkBlue: {
//         backgroundColor: '#3C4C6E',
//     },
//     purple: {
//         backgroundColor: '#9A76A6',
//     },
//     pink: {
//         backgroundColor: '#EB557A',
//     },
// });