import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
const Jobs = ({ navigate }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Jobs Page</Text>
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