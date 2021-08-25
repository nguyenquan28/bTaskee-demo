import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { store } from '../store';

const InfoJob = (props) => {
    useEffect(() => {
        console.log(store.getState().app.job)
    })

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Hll</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default InfoJob;