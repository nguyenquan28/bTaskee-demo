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
                    <View style={styles.areaNumber}>
                        <Image style={styles.flag} source={VN} />
                        <Text style={[styles.p, { marginHorizontal: 5 }]}>+84</Text>
                        <Ionicons name={'caret-down'} size={20} color={'#4f4f4f'} />
                    </View>
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
                <TouchableOpacity>
                    <Text style={styles.btnLogin}>Đăng nhập</Text>
                </TouchableOpacity>

                {/* Footer */}
                <View>
                    <View>
                        <Text>Bạn chưa có tài khoản?</Text>
                        <TouchableOpacity>
                            <Text>Tạo tài khoản</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Text>Quên mật khẩu</Text>
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
        flexDirection: 'row'
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
    },

    areaNumber: {
        backgroundColor: '#ebebeb',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    input: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white'
    }
})

export default Login;