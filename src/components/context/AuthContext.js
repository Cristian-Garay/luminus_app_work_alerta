import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LogIn } from '../../helpers/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const loadAuthState = async () => {
            try {
                const user = await AsyncStorage.getItem('user');
                if (user !== null) {
                    setLoggedUser(JSON.parse(user));
                }
            } catch (error) {
                console.error('Error loading auth state:', error);
            }
        };

        loadAuthState();
    }, []);

    const logIn = async (data) => {
        try {
            const response = await LogIn(data)
            console.log(response);

            if (response.isOk) {
                setLoggedUser(response.data.cuenta);
                await AsyncStorage.setItem('user', JSON.stringify(response.data.cuenta));
            }
            else
                console.log(response.errorMsg);
        } catch (error) {
            console.error('Error saving auth state:', error);
        }
    };

    const logOut = async () => {
        setLoggedUser(null);
        try {
            await AsyncStorage.removeItem('user');
        } catch (error) {
            console.error('Error removing auth state:', error);
        }
    };
    return (
        <AuthContext.Provider value={{ loggedUser, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
