import React from 'react'
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native'
const Setting = ({ navigate }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Setting Page</Text>
            <Button
                testID='logout_btn'
                title='Log out'
                color="#841584"
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Đăng nhập' }],
                })}
            />
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

export default Setting;