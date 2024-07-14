import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList } from '../../navigation/loginNavigation';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from 'react-hook-form';

import logo_url from '../../../assets/img/logo.png'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useAuth } from '../../context/AuthContext';
import { Colors } from '../../../helpers/constants';


export const LoginScreen = ({ navigation }) => {
    const { logIn, showToast } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
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

                        {/* <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            // className='flex items-center mb-5 pt-3'
                            style={{ flex: 1, alignItems: "center", marginBottom: 5, paddingTop: 3 }}
                        >
                            <Text
                                style={{ color: Colors.primary, fontWeight: "bold" }}
                            // className={`text-[${Colors.primary}] font-bold text-base`}
                            >Olvidaste tu Contraseña??</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ marginHorizontal: 70, borderRadius: 50, backgroundColor: Colors.primary, paddingVertical: 10 }}>
                            <Text
                                style={{ color: "white", fontWeight: "bold", alignSelf: "center" }}
                            // className={`text-[${Colors.primary}] font-bold text-base`}
                            >Olvidaste tu Contraseña??</Text>
                        </TouchableOpacity> */}


                        <TouchableOpacity
                            style={{ marginHorizontal: 70, borderRadius: 50, alignItems: "center", paddingTop: 40 }}
                            onPress={() => navigation.goBack()}
                        >
                            <Text className={`text-[#00ABE0] font-bold text-base`}>
                                ¿Olvidaste tu Contraseña?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ marginHorizontal: 70, borderRadius: 50, backgroundColor: Colors.primary, paddingVertical: 10 }}
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text className='text-lg font-bold text-center text-white'>
                                INGRESAR A MI CUENTA
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View className='h-7 flex-row'>
                    <View className={`flex w-[76%] bg-[${Colors.primary}]`} style={{backgroundColor: Colors.primary}}>
                    </View>
                    <View className={`flex w-[7%] bg-[${Colors.blue}]`}>
                    </View>
                    <View className={`flex w-[7%] bg-[${Colors.purple}]`}>
                    </View>
                    <View className={`flex w-[10%] bg-[${Colors.red}]`}>
                    </View>
                </View>
            </KeyboardAwareScrollView >
        </View >

    )
}