import React, { useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, ScrollView } from 'react-native';

import { NoticiasGet, NoticiaGet } from '../../../helpers/api';

import LinearGradient from 'react-native-linear-gradient';

import { Colors } from '../../../helpers/constants';

import { styled } from 'nativewind';

import Icon from 'react-native-vector-icons/FontAwesome6';

import logo_url from '../../../assets/img/logo.png'
import { useAuth } from '../../context/AuthContext';

import Animated from 'react-native-reanimated';

import RenderHtml from 'react-native-render-html';



export const NewsDetailScreen = ({ route, ...props }) => {
    const { setIsLoading } = useAuth();


    const [neww, setNeww] = useState(null)
    const { newwSumary } = route.params;

    // console.log(newwSumary);

    useEffect(() => {
        getNew();
    }, [])

    // const getNews = async () => {
    //     const resp = await NoticiasGet();

    //     if (resp.isOk)
    //         setNews(resp.data)

    //     // console.log("news", resp.data);

    //     // getNew();
    // }

    const getNew = async () => {
        await setIsLoading(true);

        const resp = await NoticiaGet({ id: newwSumary.id });

        if (resp.isOk)
            setNeww(resp.data)

        // await NoticiaGet({ id: newwSumary.id });

        setIsLoading(false);
    }

    const Body = (text) => {

        const source = {
            html: text
        };

        return (
            <View className='p-2'>
                <RenderHtml
                    contentWidth={400}
                    source={source}
                    {...props}
                />
            </View>
        )
    }


    return (
        <SafeAreaView className='flex-1 flex bg-white'>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

            <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
                <View className='flex-1'>
                    <Animated.Image
                        source={{ uri: `https://app.moreno.gob.ar/api/Imagen?id=${newwSumary.imagen1}` }}
                        // source={{ uri: 'https://picsum.photos/id/39/200' }}
                        className="w-full h-96 object-cover"
                        // style={{ width: 300, height: 300 }}
                        sharedTransitionTag="tag"
                        resizeMode='stretch'
                    />

                    <Text className="text-black text-base font-bold p-2">{newwSumary.titulo}</Text>

                    {
                        neww &&
                        <>
                            {Body(neww.descripcion)}
                            {/* <Text className="text-black text-base font-bold p-2">{neww.descripcion}</Text> */}
                            {/* <RenderHtml
                                contentWidth={400}
                                source={
                                    source: {
                                html: nw.resumen
                                    }
                                }
                            /> */}
                        </>
                    }

                </View>
            </ScrollView>

            {/* <View className='h-18 flex-row bg-white justify-center items-center'>
                <Image source={logo_url} className='w-36 h-16' />
            </View> */}



            <View className='h-7 flex-row'>
                <View className='flex w-[76%]' style={{ backgroundColor: Colors.primary }} />
                <View className='flex w-[7%]' style={{ backgroundColor: Colors.blue }} />
                <View className='flex w-[7%]' style={{ backgroundColor: Colors.purple }} />
                <View className='flex w-[10%]' style={{ backgroundColor: Colors.red }} />
            </View>
        </SafeAreaView >
    )
}