import React, { useRef } from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation, ParamListBase } from '@react-navigation/native';

import { WelcomeScreen } from '../screens/main/WelcomeScreen';
import { SuggestionScreen } from '../screens/main/SuggestionScreen';
import { NewsScreen } from '../screens/main/NewsScreen';

import logo_url from '../../assets/img/logo.png'
import logo_solo_url from '../../assets/img/logo_solo.png'
import menu_url from '../../assets/icons/menu.png'

import Icon from 'react-native-vector-icons/FontAwesome6';

import { Colors, Screens } from '../../helpers/constants';

import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';

const Drawer = createDrawerNavigator();
const GradientBackground = styled(LinearGradient);

const CustomDrawerContent = ({ navigation }) => {
    return (
        <View className='flex flex-1'>
            <GradientBackground
                colors={[Colors.primary, Colors.secondary]}
                className='flex flex-1'
            >
                <View className='flex-1 justify-center mt-10'>
                    {Screens.map((screen, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate(screen.name)}
                            className='mb-4'
                        >
                            <Text className='text-white text-lg'>{screen.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View className='absolute bottom-10 justify-center w-[100%] items-center'>
                    <Image source={logo_solo_url} className='w-32 h-32 ml-5 opacity-40' />
                </View>
            </GradientBackground>
        </View>
    );
}

const CustomWelcomeHeader = () => (
    <View className='flex-1 justify-center align-middle'>
        <Image source={logo_url} className='w-48 h-20' />
    </View>
);

const CustomHeader = ({ screen, navigation }) => {
    console.log(screen)

    return (
        <View className='flex-grow flex-row bg-slate-400 justify-center items-center'>
            <View className='w-[20%] bg-slate-500'>
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                    onPress={() => navigation.navigate("Welcome")}
                >
                </Icon.Button>
            </View>
            <View className='w-[60%] bg-slate-500 items-center'>
                <Text>{screen.label}</Text>
            </View>
            <View className='w-[20%] bg-slate-900'>

            </View>
        </View>
    )
}

export const MainNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName='Suggestion' drawerContent={(props) => <CustomDrawerContent {...props} />}>

            {Screens.map((screen, index) => (
                <Drawer.Screen
                    key={index}
                    name={screen.name}
                    component={screen.component}
                    options={({ navigation }) =>
                        screen.name === 'Welcome' ? {
                            headerTitle: () => <CustomWelcomeHeader navigation={navigation} screen={screen} />,
                            headerTitleAlign: "center",
                            headerLeft: () => (
                                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                    <Image source={menu_url} className='w-8 h-8 ml-5' />
                                </TouchableOpacity>
                            )
                        } : {
                            header: () => <CustomHeader navigation={navigation} screen={screen} />,
                            // headerTitleAlign: "center",
                            // headerLeft: () => (
                            //     <TouchableOpacity onPress={() => navigation.goBack()}>
                            //         <Image source={menu_url} className='w-8 h-8 ml-5' />
                            //     </TouchableOpacity>
                            // )
                        }
                    }
                />
            ))}

            {/* <Drawer.Screen
                options={({ navigation }) => ({
                    headerTitle: () => <CustomHeader navigation={navigation} />,
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image source={menu_url} className='w-8 h-8 ml-5' />
                        </TouchableOpacity>
                    )
                })}
                name="Welcome"
                component={WelcomeScreen}
            />
            <Drawer.Screen
                name="Suggestion"
                component={SuggestionScreen}
            />
            <Drawer.Screen
                name="News"
                component={NewsScreen}
            /> */}
        </Drawer.Navigator >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerContent: {
        flex: 1
    },
    header: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    headerImage: {
        width: 120,
        height: 60,
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
