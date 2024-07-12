import React from 'react';
import { View, Button, Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParamList } from '../../navigation/loginNavigation';

type SignUpScreenNavigationProp = StackNavigationProp<
    LoginStackParamList,
    'SignUp'
>;

type Props = {
    navigation: SignUpScreenNavigationProp;
};

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View>
            <Text>SignUp Screen</Text>
            <Button title='Login' onPress={() => navigation.navigate("Login")}></Button>
        </View>
    )
}
