import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewJob = ({ navigate }) => {

    const pan = require('../assets/images/pan.png')
    const clothes = require('../assets/images/clothes.png')
    const wash = require('../assets/images/wash.png')

    const highlight = string =>
        string.split(' ').map((word, i) => (
            <Text key={i}>
                <Text style={styles.highlighted}>{word} </Text>
            </Text>
        ));

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                {/* Duration */}
                <Text style={styles.title}>Thời lượng</Text>
                <Text style={styles.p}>Vui lòng ước tính chính xác diện tích cần dọn dẹp.</Text>
                <TouchableOpacity>
                    <View style={styles.area}>
                        <Text style={styles.head_area}>2 giờ</Text>
                        <Text style={styles.content_area}>55m2 / 2 phòng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.area}>
                        <Text style={styles.head_area}>3 giờ</Text>
                        <Text style={styles.content_area}>85m2 / 3 phòng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.area}>
                        <Text style={styles.head_area}>4 giờ</Text>
                        <Text style={styles.content_area}>105m2 / 4 phòng</Text>
                    </View>
                </TouchableOpacity>

                {/* Add-on service */}
                <Text style={styles.title}>Dịch vụ thêm</Text>
                <Text style={styles.p}>Bạn có thể chọn thêm dịch vụ.</Text>
                <View style={styles.more_services}>
                    <TouchableOpacity>
                        <View style={styles.service}>
                            <Image style={styles.image} source={pan} />
                            <Text style={styles.head_area}>Nấu ăn</Text>
                            <Text style={styles.content_area}>+1h</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.service}>
                            <Image style={styles.image} source={clothes} />
                            <Text style={styles.head_area}>Ủi đồ</Text>
                            <Text style={styles.content_area}> +1h</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.service}>
                            <Image style={styles.image} source={wash} />
                            <Text style={[styles.head_area, { textAlign: 'center' }]}>Mang theo dụng cụ</Text>
                            <Text style={styles.content_area}> +30, 000 VND</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Optional */}
                <Text style={styles.title}>Tuỳ chọn</Text>
                <View style={styles.option}>
                    <View style={styles.name_option}>
                        <Ionicons name={'hand-left-outline'} size={25} color={'#ff8c0f'} />
                        <Text style={styles.p}>Bạn tự chọn người làm</Text>
                    </View>
                    <View style={styles.name_option}>
                        <Ionicons name={'logo-octocat'} size={25} color={'#ff8c0f'} />
                        <Text style={styles.p}>Nhà có vật nuôi</Text>
                    </View>
                    <View style={styles.name_option}>
                        <Ionicons name={'heart-circle-outline'} size={25} color={'#ff8c0f'} />
                        <Text style={styles.p}>Ưu tiên người làm yêu thích</Text>
                    </View>
                </View>
                <Text style={styles.note}>*Lưu ý: Dịch vụ chỉ hỗ trợ tối đa 4h. Nếu bạn muốn đặt thêm vui lòng chọn {highlight('dịch vụ Tổng vệ sinh')} hoặc đặt 2 công việc có khung giờ gần nhau.</Text>
            </ScrollView>

            {/* Total */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.price}>230,000 VND/4h</Text>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Tiếp theo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    p: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 16
    },
    area: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c2c2c2',
        marginVertical: 10,
        padding: 20
    },
    head_area: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16
    },
    content_area: {
        color: 'gray',
    },
    more_services: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-around'
    },
    service: {
        alignItems: 'center',
        width: 100
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
        borderColor: '#c2c2c2',
        borderWidth: 1,
        marginBottom: 15
    },
    option: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        // marginVertical: 10
    },
    name_option: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    note: {
        margin: 20,
        fontSize: 14
    },
    highlighted: {
        fontWeight: 'bold',
        color: '#47d173',
    },
    footer: {
        backgroundColor: '#fff',
        padding: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#47d173',
        padding: 20,
        borderRadius: 10
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default NewJob;