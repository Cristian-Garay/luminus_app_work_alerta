import React, { useEffect, useState } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, Image, StatusBar, StyleSheet } from 'react-native';

export const SuggestionScreen = () => {
    return (
        <SafeAreaView className='flex-1 flex bg-white'>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <View className='flex-1 justify-center'>
                <Text className='text-center p-4 text-xg'>Sugerencias</Text>
            </View>
        </SafeAreaView>
    )
}