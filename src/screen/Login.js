import React from 'react'
import { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {

    const VN = require('../assets/images/vn.png')
    const THAI = require('../assets/images/thai.jpg')
    const USA = require('../assets/images/usa.png')
    const HK = require('../assets/images/HK.png')

    const [phoneNumber, setPhoneNumber] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    // const { login } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <View style={styles.container}>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>Mừng trở lại,</Text>
                    <Text style={styles.p}>Vui lòng đăng nhập để tiếp tục.</Text>
                </View>

                {/* Phone number */}
                <Text style={styles.titleInput}>Số điện thoại</Text>
                <View style={styles.phoneArea}>
                    <TouchableOpacity>
                        <View style={styles.areaNumber}>
                            <Image style={styles.flag} source={VN} />
                            <Text style={[styles.p, { marginHorizontal: 5 }]}>+84</Text>
                            <Ionicons name={'caret-down'} size={20} color={'#4f4f4f'} />
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder='Nhập số điện thoại'
                        onChangeText={setPhoneNumber}
                        borderColor={'#bdbdbd'}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>

                {/* Password */}
                <Text style={styles.titleInput}>Mật khẩu</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                    borderColor={'#bdbdbd'}
                />

                {/* Button */}
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textLogin}>Đăng nhập</Text>
                </TouchableOpacity>

                {/* Footer */}
                <View style={styles.footer}>
                    <View style={styles.register}>
                        <Text style={styles.p}>Bạn chưa có tài khoản?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Đăng ký')}
                        >
                            <Text style={styles.textLink}>Tạo tài khoản</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.forgotPass}>
                        <Text style={styles.textLink}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    container: {
        // flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },

    header: {
        marginTop: 30,
        marginBottom: 30
    },

    phoneArea: {
        flexDirection: 'row',
    },

    headerText: {
        // fontFamily: ''
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },

    p: {
        fontSize: 18,
        fontWeight: '300'
    },

    titleInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#524e4e'
    },

    flag: {
        width: 25,
        height: 20,
        marginLeft: 5
    },

    areaNumber: {
        height: 60,
        backgroundColor: '#ebebeb',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10,
    },

    input: {
        fontSize: 18,
        minWidth: 250,
        height: 60,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 0,
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginBottom: 30,
    },

    btnLogin: {
        backgroundColor: '#ebebeb',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },

    textLogin: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#47d173'
    },

    footer: {
        marginTop: 160,
        alignItems: 'center'
    },

    register: {
        flexDirection: 'row',
        marginBottom: 20
    },

    textLink: {
        fontSize: 18,
        color: '#47d173',
        fontWeight: 'bold',
        marginHorizontal: 10
    }
})

export default Login;