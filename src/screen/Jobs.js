import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { store } from '../store'

const Jobs = ({ navigate }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Jobs Page</Text>
            <Text>Hellp</Text>
            <Text>{store.getState().app}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 18
    }
})

export default Jobs;