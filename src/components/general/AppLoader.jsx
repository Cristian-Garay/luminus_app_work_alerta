import React from 'react';
import { ActivityIndicator, View, StyleSheet, Modal } from 'react-native';

import { useAuth } from '../context/AuthContext';

import { Colors } from '../../helpers/constants';

export const AppLoader = () => {
    const { isLoading } = useAuth();

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isLoading}
            style={{ zIndex: 30 }}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator size={100} color={Colors.primary} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    activityIndicatorWrapper: {
        height: 100,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
