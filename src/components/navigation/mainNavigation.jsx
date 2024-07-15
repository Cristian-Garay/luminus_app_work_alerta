import React, { useRef } from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation, ParamListBase } from '@react-navigation/native';

import { WelcomeScreen } from '../screens/main/WelcomeScreen';
import { SuggestionScreen } from '../screens/main/SuggestionScreen';
import { NewsScreen } from '../screens/main/NewsScreen';

import { NewsDetailScreen } from '../screens/main/NewsDetailScreen';

import logo_url from '../../assets/img/logo.png'
import logo_solo_url from '../../assets/img/logo_solo.png'
import menu_url from '../../assets/icons/menu.png'

import Icon from 'react-native-vector-icons/FontAwesome6';

import { Colors, Screens } from '../../helpers/constants';

import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'nativewind';
import { useAuth } from '../context/AuthContext';

const Drawer = createDrawerNavigator();
const GradientBackground = styled(LinearGradient);

const Stack = createNativeStackNavigator();

const CustomDrawerContent = ({ navigation }) => {
    const { logOut } = useAuth();

    return (
        <View className='flex flex-1'>
            <GradientBackground
                colors={[Colors.primary, Colors.secondary]}
                className='flex flex-1'
            >
                <View className='flex flex-row mt-10 justify-center'>
                    <Icon
                        color={"white"}
                        name="gear"
                        size={30}
                    ></Icon>
                    <Text className='text-white text-xl font-bold text-center ml-2'>Menú de Opciones</Text>
                </View>

                <View className='flex mt-16 ml-7'>
                    {Screens.map((screen, index) => (
                        <View key={index} >
                            <TouchableOpacity
                                onPress={() => navigation.navigate(screen.name)}
                            >
                                <Text className='text-white text-lg'>{screen.label}</Text>
                            </TouchableOpacity>
                            <View className='h-[1px] w-[80%] bg-white mb-4 mt-1' />
                        </View>
                    ))}
                </View>

                <View className='absolute bottom-44 justify-center w-[100%] items-center flex ml-1 flex-row'>
                    <Icon
                        color={"white"}
                        name="power-off"
                        size={16}
                    ></Icon>
                    <Text className='text-white text-xl font-bold text-center ml-2' onPress={() => logOut()}>Cerrar sesión</Text>
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
    return (
        <View className={`flex-grow flex-row justify-center items-center`}>
            <View className={`w-[20%] bg-[${Colors.primary}] h-14 justify-center pl-5`} >
                <Icon color={"white"} name="arrow-left" size={30} onPress={() => navigation.goBack()} />
            </View>
            <View className={`w-[60%] bg-[#00ABE0] items-center flex-row justify-center h-[100%]`}>
                <Icon color={"white"} name={screen.icon} size={30} />
                <Text className='text-lg ml-3 text-white bg-bl'>{screen.label}</Text>
            </View>
            <View className={`w-[20%] bg-[${Colors.primary}] h-14`} />
        </View>
    )
}

function NewsStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="News">
            <Stack.Screen
                name="News"
                component={NewsScreen}
                options={{
                    headerTitle: () => <CustomHeader navigation={navigation} screen={{ icon: "house", label: "Novedades" }} />
                }}
            />
            <Stack.Screen
                name="NewDetail"
                component={NewsDetailScreen}
                options={{
                    // headerShown: false,
                    header: () =>
                        <View className={`flex-grow flex-row justify-center items-center`}>
                            <View className={`w-full bg-[${Colors.primary}] h-14 justify-center pl-5`} >
                                <Icon color={"white"} name="arrow-left" size={30} onPress={() => navigation.navigate("News")} />
                            </View>
                        </View>
                }}
            />
        </Stack.Navigator>
    );
}

export const MainNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName='Welcome' drawerContent={(props) => <CustomDrawerContent {...props} />}>

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
                        }
                    }
                />
            ))}

            <Drawer.Screen name="NewsStack" component={NewsStack} />

            {/* <Drawer.Screen
                key={999}
                name={"NewDetail"}
                component={NewsDetailScreen}
                options={({ navigation }) =>
                    "screen.name" === 'Welcome' ? {
                        headerTitle: () => <CustomWelcomeHeader navigation={navigation} screen={screen} />,
                        headerTitleAlign: "center",
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image source={menu_url} className='w-8 h-8 ml-5' />
                            </TouchableOpacity>
                        )
                    } : {
                        header: () =>
                            <View className={`flex-grow flex-row justify-center items-center`}>
                                <View className={`w-full bg-[${Colors.primary}] h-14 justify-center pl-5`} >
                                    <Icon color={"white"} name="arrow-left" size={30} onPress={() => navigation.navigate("News")} />
                                </View>
                            </View>,
                    }
                }
            /> */}
        </Drawer.Navigator >
    );
}

