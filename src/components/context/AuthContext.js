import React, { createContext, useState, useEffect } from 'react';
import { Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { LogIn } from '../../helpers/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const loadAuthState = async () => {
            try {
                setIsLoading(true)
                const user = await AsyncStorage.getItem('user');
                if (user !== null) {
                    // showToast('success', '¡Bienvenido de vuelta!');
                    setLoggedUser(JSON.parse(user));
                }
                setIsLoading(false)
            } catch (error) {
                console.error('Error loading auth state:', error);
                setIsLoading(false)
            }
        };

        loadAuthState();
    }, []);

    const logIn = async (data) => {
        try {
            setIsLoading(true)
            const response = await LogIn(data)
            console.log(response);

            if (response.isOk) {
                showToast('success', 'Inicio correcto', '¡Bienvenido de vuelta!');
                setLoggedUser(response.data.cuenta);
                await AsyncStorage.setItem('user', JSON.stringify(response.data.cuenta));
            }
            else {
                showToast('error', 'Ups', 'Verifica tu dni y contraseña');
                console.log(response.errorMsg);
            }

            setIsLoading(false)
        } catch (error) {
            showToast('error', 'Ups', 'Ocurrió un error, intente en un momento de nuevo');
            console.error('Error saving auth state:', error);
            setIsLoading(false)
        }
    };

    const logOut = async () => {
        setIsLoading(true)
        setLoggedUser(null);
        try {
            await AsyncStorage.removeItem('user');
        } catch (error) {
            console.error('Error removing auth state:', error);
        } finally {
            setIsLoading(false)
        }
    };

    const showToast = (type, text1, text2) => {
        Toast.show({
            type: type,
            text1: text1,
            text2: text2
        });
    };

    return (
        <AuthContext.Provider value={{ loggedUser, logIn, logOut, isLoading, setIsLoading, showToast }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
