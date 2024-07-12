import React from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParamList } from '../../navigation/loginNavigation';

import { useAuth } from '../../context/AuthContext';

type WelcomeScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>;

type Props = {
    navigation: WelcomeScreenNavigationProp;
};

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
    const { logout } = useAuth();

    const loggingOut = () => {
        logout();
        console.log("CERRANDO SESION");
    }

    return (
        <SafeAreaView className='flex-1 flex' style={{ backgroundColor: "purple" }}>
            <Text>Logueado</Text>
            <TouchableOpacity className='py-3 bg-yellow-400 mx-7 rounded-xl' onPress={() => loggingOut()}>
                <Text className=' text-xl font-bold text-center text-gray-700'>
                    Cerrar Sessión
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
