import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>
                Home Page
            </Text>
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
export default Home;