import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Ionicons from 'react-native-vector-icons/Ionicons';

const VerifyCode = ({ navigation }) => {
    let clockCall = null
    const defaultCountdown = 30
    const [verifyCode, setVerifyCode] = useState()
    const [countdown, setCountdown] = useState(defaultCountdown)

    useEffect(() => {
        clockCall = setInterval(() => {
            decrementClock();
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    })

    const decrementClock = () => {
        if (countdown == 0) {
            setCountdown(0)
            clearInterval(clockCall)
        } else {
            setCountdown(countdown - 1)
        }
    }

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.p}>Nhận mã kích hoạt gồm 4 chữ số đã được gửi đến số điện thoại của bạn.</Text>

            <View style={styles.containerInput}>
                <OTPInputView
                    style={styles.rowOTP}
                    pinCount={4}
                    onCodeChanged={code => setVerifyCode(code)}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(verifyCode => {
                        console.log(`Code is ${verifyCode}, you are good to go!`)
                    })}
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.p}>00:{countdown}</Text>
                <View style={styles.footerRight}>
                    <Ionicons name={'chevron-forward'} size={40} color={'#fff'} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    p: {
        fontSize: 18,
        fontWeight: '300'
    },

    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    rowOTP: {
        width: '80%',
        height: 200,
    },

    codeInputHighlightStyle: {
        marginTop: 50,
        paddingVertical: 11,
        width: 40,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },

    underlineStyleBase: {
        textAlign: 'center',
        width: 35,
        borderColor: '#a5a6a8',
        borderRadius: 30,
        borderWidth: 5,
        color: 'black',
        fontSize: 18
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 40,
        right: 40,
        bottom: 40,
    },

    footerRight: {
        backgroundColor: '#ebebeb',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: -15
    },
})

export default VerifyCode;