import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

const SetPassword = ({ navigation, route }) => {

    const [password, setPassword] = useState("0")
    const { phoneNumber } = route.params
    const { name } = route.params
    const { email } = route.params
    const { introducCode } = route.params
    const { UID } = route.params

    const onCreateAccount = () => {
        alert('success')
    }

    return (
        <SafeAreaView style={styles.container}>
            {console.log(phoneNumber + "/" + name + "/" + email + "/" + introducCode + "/" + UID)}
            {/* Title */}
            <Text style={styles.p}>Vui lòng nhập mật khẩu. Mật khẩu này sẽ được sử dụng cho lần đăng nhập sau</Text>

            {/* Input */}
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                placeholder="Mật khẩu 6 - 12 ký tự, không khoảng trắng"
                autoCapitalize="none"
                autoCorrect={false}
                borderColor={'#bdbdbd'}
            />

            {/* Button */}
            <TouchableOpacity
                style={[styles.btnSave, { backgroundColor: password.length > 6 ? '#47d173' : '#ebebeb' }]}
            // onPress={onCreateAccount}
            >
                <Text style={[styles.p, { color: '#fff', fontWeight: 'bold' }]}>Hoàn thành</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },

    p: {
        fontSize: 18,
        fontWeight: '300'
    },

    input: {
        fontSize: 18,
        minWidth: 250,
        height: 60,
        borderWidth: 1,
        marginTop: 50,
        marginBottom: 0,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        marginBottom: 30,
        color: '#ddd',
    },

    error: {
        color: 'red',
        marginTop: -20,
        marginBottom: 10,
        alignSelf: 'flex-end'
    },

    btnSave: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
})

export default SetPassword;