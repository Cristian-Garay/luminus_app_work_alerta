import React, { useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, ScrollView } from 'react-native';

import { NoticiasGet, NoticiaGet } from '../../../helpers/api';

import LinearGradient from 'react-native-linear-gradient';

import { Colors } from '../../../helpers/constants';

import { styled } from 'nativewind';

import Icon from 'react-native-vector-icons/FontAwesome6';

import { ImagenGet } from '../../../helpers/api';

import logo_url from '../../../assets/img/logo.png'

import RenderHtml from 'react-native-render-html';

import { useAuth } from '../../context/AuthContext';

import Animated from 'react-native-reanimated';


const GradientBackground = styled(LinearGradient);

const Card = ({ nw, onClick }) => {
    const source = {
        html: nw.resumen
    };


    // console.log(nw.id);
    // console.log({ nw, key, onClick });

    // const clickOnItem = () => {
    //     onClick("ID")
    // }

    return (
        <View className="bg-white rounded-t-lg shadow-lg overflow-hidden mb-3" key={nw.id} style={{ shadowRadius: 1, shadowColor: "black" }}>
            <View className="p-4 flex-row items-center" style={{ backgroundColor: Colors.blue }}>
                <Icon color={"yellow"} name="bookmark" size={25} />
                <Text className="text-white text-base font-bold ml-4">{nw.titulo}</Text>
            </View>

            <View className="">
                {/* <Image
                    source={{ uri: `https://app.moreno.gob.ar/api/Imagen?id=${nw.imagen1}` }}
                    className="w-full h-40 object-cover"
                    resizeMode='cover'
                /> */}

                <Animated.Image
                    source={{ uri: `https://app.moreno.gob.ar/api/Imagen?id=${nw.imagen1}` }}
                    // source={{ uri: 'https://picsum.photos/id/39/200' }}
                    className="w-full h-40 object-cover"
                    // style={{ width: 300, height: 300 }}
                    sharedTransitionTag="tag"
                    resizeMode='cover'
                />

                {/* <Animated.Image
                    source={{ uri: 'https://picsum.photos/id/39/200' }}
                    style={{ width: 300, height: 300 }}
                    sharedTransitionTag="tag"
                    resizeMode='stretch'
                /> */}

                <View className='pl-2'>
                    {/* <RenderHtml
                        contentWidth={400}
                        source={source}
                    /> */}
                </View>
            </View>

            <TouchableOpacity className="py-2 px-4" style={{ backgroundColor: Colors.primary }} onPress={() => onClick(nw)}>
                <Text className="text-white text-center font-bold">LEER NOTA COMPLETA</Text>
            </TouchableOpacity>
        </View>
    );
};


export const NewsScreen = ({ navigation }) => {
    const { setIsLoading } = useAuth();

    const [news, setNews] = useState([])

    useEffect(() => {
        getNews();
    }, [])

    const getNews = async () => {
        await setIsLoading(true);
        const resp = await NoticiasGet();

        if (resp.isOk)
            setNews(resp.data)

        setIsLoading(false);
    }


    const goToDetail = (neww) => {
        // console.log("CLICK EN ID", idNew);

        navigation.navigate("NewDetail", { newwSumary: neww })
    }


    return (
        <SafeAreaView className='flex-1 flex bg-white'>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

            <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
                <View className='flex-1 p-2 mt-1'>

                    {
                        news.map((nw, index) => (
                            <Card nw={nw} key={index} onClick={(id) => goToDetail(id)} />
                        ))
                    }

                    {/* {
                        news.map((nw, index) => (
                            <Card nw={nw} key={index + 10} />
                        ))
                    }

                    {
                        news.map((nw, index) => (
                            <Card nw={nw} key={index + 10} />
                        ))
                    } */}

                </View>
            </ScrollView>

            <View className='h-18 flex-row bg-white justify-center items-center'>
                {/* <GradientBackground
                    colors={["white", "transparent"]}
                    className='flex flex-1'
                > */}
                <Image source={logo_url} className='w-36 h-16' />
                {/* </GradientBackground> */}
            </View>

            {/* <LinearGradient
                colors={['transparent', 'white']}
                style={{ flex: 1 }}
            >
            </LinearGradient> */}

            <View className='h-7 flex-row'>
                <View className='flex w-[76%]' style={{ backgroundColor: Colors.primary }} />
                <View className='flex w-[7%]' style={{ backgroundColor: Colors.blue }} />
                <View className='flex w-[7%]' style={{ backgroundColor: Colors.purple }} />
                <View className='flex w-[10%]' style={{ backgroundColor: Colors.red }} />
            </View>
        </SafeAreaView >
    )
}