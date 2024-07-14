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
import { useAuth } from '../context/AuthContext';

const Drawer = createDrawerNavigator();
const GradientBackground = styled(LinearGradient);

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
                    <Text className='text-white text-xl font-bold text-center ml-2'>Opciones</Text>
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
                        name="right-from-bracket"
                        size={30}
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
            <View className={`w-[20%] bg-[${Colors.primary}] h-10 justify-center pl-5`} >
                <Icon
                    color={"orange"}
                    // backgroundColor={Colors.primary}
                    name="arrow-left"
                    size={30}
                    onPress={() => navigation.goBack()}
                // onPress={() => navigation.navigate("Welcome")}
                >
                </Icon>
            </View>
            <View className={`w-[60%] bg-[#00ABE0] items-center`}>
                <Text className='text-lg'>{screen.label}</Text>
            </View>
            <View className={`w-[20%] bg-[${Colors.primary}] h-10`} />
        </View>
    )
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
