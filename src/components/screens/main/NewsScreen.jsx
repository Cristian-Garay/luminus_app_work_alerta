import React, { useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, StyleSheet } from 'react-native';

import { NoticiasGet, NoticiaGet } from '../../../helpers/api';

export const NewsScreen = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        const resp = await NoticiasGet();

        if (resp.isOk)
            setNews(resp.data)

        // console.log("news", resp.data);

        getNew();
    }

    const getNew = async () => {
        await NoticiaGet({ id: 121 });
    }


    return (
        <SafeAreaView className='flex-1 flex bg-white'>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <View className='flex-1'>
                <Text className='text-center p-4 text-xg'>Novedades</Text>

                <View className='flex flex-col'></View>
                {
                    news.map((nw, index) => (
                        <View className='flex' key={index}>
                            <Text>{nw.titulo}</Text>
                        </View>
                    ))
                }
            </View>
        </SafeAreaView>
    )
}