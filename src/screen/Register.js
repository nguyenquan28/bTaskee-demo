import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth'

const Register = ({ navigation, route }) => {

    // Require image
    const VN = require('../assets/images/vn.png')
    const THAI = require('../assets/images/thai.jpg')
    const USA = require('../assets/images/usa.png')
    const HK = require('../assets/images/HK.png')

    // Create var
    const [phoneNumber, setPhoneNumber] = useState('+84397411511')
    const [name, setName] = useState('Quan')
    const [email, setEmail] = useState('nvquan.itdn@gmail.com')
    const [introducCode, setIntroducCode] = useState('abcxyz')

    // Create account with phone number
    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
        navigation.navigate('Xác thực tài khoản', {
            phoneNumber: phoneNumber,
            name: name,
            email: email,
            introducCode: introducCode,
            confirmation: confirmation
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>Rất vui được gặp bạn</Text>
                    <Text style={styles.p}>Tạo ngay tài khoản để trải nghiệm dịch vụ.</Text>
                </View>

                {/* Name */}
                <Text style={styles.titleInput}>Họ và tên</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    placeholder="John Lengend"
                    borderColor={'#bdbdbd'}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.error}>{name ? '' : 'Thông tin bắt buộc'}</Text>

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
                        placeholder='0987123456'
                        onChangeText={setPhoneNumber}
                        borderColor={'#bdbdbd'}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>

                {/* Email */}
                <Text style={styles.titleInput}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    placeholder="johnlegend@gmail.com"
                    autoCapitalize="none"
                    autoCorrect={false}
                    borderColor={'#bdbdbd'}
                />

                {/* Code */}
                <Text style={styles.titleInput}>Mã giới thiệu</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setIntroducCode}
                    placeholder="123456"
                    autoCapitalize="none"
                    autoCorrect={false}
                    borderColor={'#bdbdbd'}
                />
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.p}>Tôi đồng ý cới các </Text>
                        <Text style={styles.textLink}>Điều khoản </Text>
                        <Text style={styles.p}>& </Text>
                        <Text style={styles.textLink}>Chính </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textLink}>sách </Text>
                        <Text style={styles.p}>của bTaske</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => signInWithPhoneNumber(phoneNumber)}
                >
                    <View style={[styles.footerRight, { backgroundColor: (name && phoneNumber) ? '#47d173' : '#ebebeb' }]}>
                        <Ionicons name={'chevron-forward'} size={40} color={'#fff'} />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20
    },

    header: {
        marginTop: 10,
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
        marginBottom: 10,
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
        // flex: 130,
        marginTop: -10,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingBottom: 30,
        paddingTop: 20,
    },

    footerRight: {
        justifyContent: 'center',
        marginLeft: 10,
        padding: 10,
        borderRadius: 10,
    },

    textLink: {
        fontSize: 18,
        color: '#47d173',
        textDecorationLine: 'underline'
    }

})

export default Register