import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewJob = (props) => {

    const navigation = useNavigation();

    const pan = require('../assets/images/pan.png')
    const clothes = require('../assets/images/clothes.png')
    const wash = require('../assets/images/wash.png')

    const [duration, setDuration] = useState(null)
    const [price, setPrice] = useState()
    const [cook, setCook] = useState(false)
    const [ironing, setIroning] = useState(false)
    const [tools, setTools] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);

    // Handle services
    const handleCook = () => setCook(previousState => !previousState)
    const handleIroning = () => setIroning(previousState => !previousState)
    const handleTools = () => setTools(previousState => !previousState)

    // Control switch
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    // Handle duration
    const onSetDuration = (value) => {
        setDuration(value)
    }

    // Handle price
    const handlePrice = () => {
        let total = 0
        if (duration == null) {
            total += total
        } else {
            total += 100000 * duration
        }
        if (cook) {
            total += 50000
        }
        if (ironing) {
            total += 50000
        }
        if (tools) {
            total += 30000
        }
        // console.log(total);
        setPrice(total)
    }

    useEffect(() => {
        handlePrice()
        // console.log(price);
    })

    // Highlight text
    const highlight = string =>
        string.split(' ').map((word, i) => (
            <Text key={i}>
                <Text style={styles.highlighted}>{word} </Text>
            </Text>
        ));

    const handleCreateJob = () => {
        let object = {}
        object.duration = duration,
            object.cook = cook,
            object.ironing = ironing,
            object.tools = tools,
            object.choosePeople = isEnabled,
            object.pet = isEnabled1,
            object.prioritized = isEnabled2,
            object.price = price
        if (duration) {
            props.onAddJob(object)
            navigation.navigate('Ch???n th???i gian l??m vi???c')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                testID='scroll_view'
            >

                {/* Duration */}
                <Text style={styles.title}>Th???i l?????ng</Text>
                <Text style={styles.p}>Vui l??ng ?????c t??nh ch??nh x??c di???n t??ch c???n d???n d???p.</Text>
                <TouchableOpacity
                    testID='duration_2'
                    onPress={() => onSetDuration(2)}
                >
                    <View style={[styles.area, { borderColor: (duration === 2) ? '#ff8c0f' : '#c2c2c2' }]}>
                        <Text style={styles.head_area}>2 gi???</Text>
                        <Text style={styles.content_area}>55m2 / 2 ph??ng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    testID='duration_3'
                    onPress={() => onSetDuration(3)}
                >
                    <View style={[styles.area, { borderColor: (duration === 3) ? '#ff8c0f' : '#c2c2c2' }]}>
                        <Text style={styles.head_area}>3 gi???</Text>
                        <Text style={styles.content_area}>85m2 / 3 ph??ng</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    testID='duration_4'
                    onPress={() => onSetDuration(4)}
                >
                    <View style={[styles.area, { borderColor: (duration === 4) ? '#ff8c0f' : '#c2c2c2' }]}>
                        <Text style={styles.head_area}>4 gi???</Text>
                        <Text style={styles.content_area}>105m2 / 4 ph??ng</Text>
                    </View>
                </TouchableOpacity>

                {/* Add-on service */}
                <Text style={styles.title}>D???ch v??? th??m</Text>
                <Text style={styles.p}>B???n c?? th??? ch???n th??m d???ch v???.</Text>
                <View style={styles.more_services}>
                    <TouchableOpacity
                        testID='cook'
                        onPress={handleCook}
                    >
                        <View style={styles.service}>
                            <Image style={[styles.image, { borderColor: (cook) ? '#ff8c0f' : '#c2c2c2' }]} source={pan} />
                            <Text style={styles.head_area}>N???u ??n</Text>
                            <Text style={styles.content_area}>+1h</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID='ironing'
                        onPress={handleIroning}
                    >
                        <View style={styles.service}>
                            <Image style={[styles.image, { borderColor: (ironing) ? '#ff8c0f' : '#c2c2c2' }]} source={clothes} />
                            <Text style={styles.head_area}>???i ?????</Text>
                            <Text style={styles.content_area}> +1h</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID='tools'
                        onPress={handleTools}
                    >
                        <View style={styles.service}>
                            <Image style={[styles.image, { borderColor: (tools) ? '#ff8c0f' : '#c2c2c2' }]} source={wash} />
                            <Text style={[styles.head_area, { textAlign: 'center' }]}>Mang theo d???ng c???</Text>
                            <Text style={styles.content_area}> +30, 000 VND</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Optional */}
                <Text style={styles.title}>Tu??? ch???n</Text>
                <View style={styles.option}>
                    <View style={styles.option_line}>
                        <View style={styles.name_option}>
                            <Ionicons name={'hand-left-outline'} size={25} color={'#ff8c0f'} />
                            <Text style={styles.p}>B???n t??? ch???n ng?????i l??m</Text>
                        </View>
                        <Switch
                            testID='choose_people'
                            style={styles.switch}
                            trackColor={{ false: "#c2c2c2", true: "#47d173" }}
                            thumbColor={isEnabled ? "#285433" : "#f4f3f4"}
                            ios_backgroundColor="#c2c2c2"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.option_line}>
                        <View style={styles.name_option}>
                            <Ionicons name={'logo-octocat'} size={25} color={'#ff8c0f'} />
                            <Text style={styles.p}>Nh?? c?? v???t nu??i</Text>
                        </View>
                        <Switch
                            testID='pet'
                            trackColor={{ false: "#c2c2c2", true: "#47d173" }}
                            thumbColor={isEnabled1 ? "#285433" : "#f4f3f4"}
                            ios_backgroundColor="#c2c2c2"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>
                    <View style={styles.option_line}>
                        <View style={styles.name_option}>
                            <Ionicons name={'heart-circle-outline'} size={25} color={'#ff8c0f'} />
                            <Text style={styles.p}>??u ti??n ng?????i l??m y??u th??ch</Text>
                        </View>
                        <Switch
                            testID='lovely'
                            trackColor={{ false: "#c2c2c2", true: "#47d173" }}
                            thumbColor={isEnabled2 ? "#285433" : "#f4f3f4"}
                            ios_backgroundColor="#c2c2c2"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </View>
                </View>
                <Text style={styles.note}>*L??u ??: D???ch v??? ch??? h??? tr??? t???i ??a 4h. N???u b???n mu???n ?????t th??m vui l??ng ch???n {highlight('d???ch v??? T???ng v??? sinh')} ho???c ?????t 2 c??ng vi???c c?? khung gi??? g???n nhau.</Text>
            </ScrollView>

            {/* Total */}
            <View style={styles.footer}>
                <TouchableOpacity
                    testID='navigate_workTime'
                    style={[styles.button, { backgroundColor: (duration == null) ? '#ededed' : '#47d173' }]}
                    onPress={handleCreateJob}
                >
                    <Text style={styles.price}>{price / 1000},000 VND/{(duration == null) ? '0' : duration}h</Text>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Ti???p theo</Text>
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
        padding: 20,
        borderRadius: 10
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    option_line: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default NewJob;