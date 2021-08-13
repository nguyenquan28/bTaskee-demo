import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
const Service = ({ navigate }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Service Page</Text>
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

export default Service;