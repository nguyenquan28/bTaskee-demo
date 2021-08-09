import React, { useRef } from 'react'
import { useState } from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';
import Dialog from "react-native-dialog";
import RBSheet from "react-native-raw-bottom-sheet";

const Login = ({ navigation }) => {

    // Require image
    const VN = require('../assets/images/vn.png')
    const TH = require('../assets/images/thai.jpg')
    const US = require('../assets/images/usa.png')
    const HK = require('../assets/images/HK.png')

    // Constructor
    const refRBSheet = useRef();
    const [phoneNumber, setPhoneNumber] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const [areaNumber, setAreaNumber] = useState('+84')
    const [flag, setFlag] = useState(VN)

    // Method SignIn
    const signInWithPhoneNumber = async (areaNumber, phoneNumber) => {
        let phone = areaNumber + phoneNumber
        if (!phoneNumber || !password) {
            setError('Vui lòng nhập đầy đủ thông tin')
        } else {
            let users = await firestore().collection('users')
                .where('phoneNumber', '==', phone)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc._data.password);
                        if (doc._data.password == password) {
                            setError('')
                            navigation.replace('Trang chủ')
                        } else {
                            setError('Vui lòng kiểm tra lại số điện thoại và mật khẩu.')

                        }
                    })
                })
        }
    }

    // Select Area number
    const hanldeAreaNumber = (code, flag) => {
        setAreaNumber(code)
        setFlag(flag)
        refRBSheet.current.close()
    }

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
                    <TouchableOpacity
                        onPress={() => refRBSheet.current.open()}
                    >
                        <View style={styles.areaNumber}>
                            <Image style={styles.flag} source={flag} />
                            <Text style={[styles.p, { marginHorizontal: 5 }]}>{areaNumber}</Text>
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

                {/* Error */}
                <Text style={styles.error}>{error}</Text>

                {/* Button */}
                <TouchableOpacity
                    onPress={() => signInWithPhoneNumber(areaNumber, phoneNumber)}
                    style={styles.btnLogin}
                >
                    <Text style={styles.textLogin}>Đăng nhập</Text>
                </TouchableOpacity>

                {/* Footer */}
                <View style={styles.footer}>
                    <View style={styles.register}>
                        <Text style={styles.p}>Bạn chưa có tài khoản?</Text>

                        {/* onRegister */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Đăng ký')}
                        >
                            <Text style={styles.textLink}>Tạo tài khoản</Text>
                        </TouchableOpacity>
                    </View>

                    {/* onForgot Password */}
                    <TouchableOpacity style={styles.forgotPass}>
                        <Text style={styles.textLink}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* AreaCode */}
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "#bfbbbb",
                        opacity: 0.8
                    },
                    draggableIcon: {
                        backgroundColor: "#000",
                        marginBottom: 20
                    }
                }}
            >
                {/* Viet Nam */}
                <TouchableOpacity
                    onPress={() => hanldeAreaNumber('+84', VN)}
                >
                    <View style={styles.AreaCode}>
                        <Image style={styles.flag} source={VN} />
                        <Text style={[styles.p, { marginHorizontal: 20 }]}>VN +84</Text>
                    </View>
                </TouchableOpacity>

                {/* Thailand */}
                <TouchableOpacity
                    onPress={() => hanldeAreaNumber('+66', TH)}
                >
                    <View style={styles.AreaCode}>
                        <Image style={styles.flag} source={TH} />
                        <Text style={[styles.p, { marginHorizontal: 20 }]}>TH +66</Text>
                    </View>
                </TouchableOpacity>

                {/* HongKong */}
                <TouchableOpacity
                    onPress={() => hanldeAreaNumber('+852', HK)}
                >
                    <View style={styles.AreaCode}>
                        <Image style={styles.flag} source={HK} />
                        <Text style={[styles.p, { marginHorizontal: 20 }]}>HK +852</Text>
                    </View>
                </TouchableOpacity>

                {/* US */}
                <TouchableOpacity
                    onPress={() => hanldeAreaNumber('+1', US)}
                >
                    <View style={styles.AreaCode}>
                        <Image style={styles.flag} source={US} />
                        <Text style={[styles.p, { marginHorizontal: 20 }]}>US +1</Text>
                    </View>
                </TouchableOpacity>
            </RBSheet>

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

    error: {
        color: 'red',
        marginTop: -20,
        marginBottom: 30,
        alignSelf: 'flex-end'
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

    AreaCode: {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginBottom: 30,
        alignItems: 'center'
    },

    input: {
        fontSize: 18,
        minWidth: 227,
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