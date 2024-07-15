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

import RenderHtml, { TNodeChildrenRenderer } from 'react-native-render-html';



export const NewsDetailScreen = ({ route, ...props }) => {
    const { setIsLoading, showToast } = useAuth();


    // const { newwSumary } = route.params;

    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // getNew();
    }, []);

    const getNew = async () => {
        await setIsLoading(true);

        const resp = await NoticiaGet({ id: newwSumary.id });

        if (resp.isOk) {
            showToast("error", "Ups", "Ocurrió un error obteniendo la noticia, intenta más tarde.")
            setIsLoading(false);
            return
        }

        let html = resp.data.descripcion;

        resp.data.imagenes.forEach((imageId, index) => {
            const placeholder = `{{imagen${index + 1}}}`; // Start from Imagen0 for imagenes[0]
            const imgTag = `<img src="https://app.moreno.gob.ar/api/Imagen?id=${imageId}" alt="imagen${index + 1}" />`;
            html = html.replace(placeholder, imgTag);
        });

        setHtmlContent(html);

        setIsLoading(false);
    }

    return (
        <SafeAreaView className='flex-1 flex bg-white'>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

            <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
                <View className='flex-1'>
                    <Animated.Image
                        source={{ uri: `https://app.moreno.gob.ar/api/Imagen?id=${"a88680b7-ec1d-46e1-88a9-81cae3ad1abf"}` }}
                        // source={{ uri: `https://app.moreno.gob.ar/api/Imagen?id=${newwSumary.imagen1}` }}
                        className="w-full h-96 object-cover"
                        sharedTransitionTag="tag"
                        // resizeMode='stretch'
                    />

                    {/* <Text className="text-black text-base font-bold p-2">{newwSumary.titulo}</Text>

                    <View className='p-2'>
                        <RenderHtml
                            contentWidth={300}
                            source={{ html: htmlContent }}
                        />
                    </View> */}

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