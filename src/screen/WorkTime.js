import { useNavigation } from '@react-navigation/native'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { store } from '../store';

const WorkTime = (props) => {

    const navigation = useNavigation();
    const [date, setDate] = useState(Date());
    const [job, setJob] = useState(false);
    const [time, setTime] = useState(new Date());
    const [address, setAddress] = useState()
    const [note, setNote] = useState('')

    // Handle pick date
    const onDateSelected = selectedDate => {
        setDate(selectedDate)
        console.log(selectedDate.format('DD-MM-YYYY'));
        job.date = selectedDate.format('DD-MM-YYYY')
    }

    // Handle pick time
    const onChangTime = (event) => {
        const timestamp = event.nativeEvent.timestamp;
        let date;
        let d = ''
        console.log(timestamp);
        if (timestamp) {
            date = new Date(timestamp);
            // d = date
            console.log(date.getHours() + ':' + date.getMinutes());
            setTime(date)
            job.time = date.getHours() + ':' + date.getMinutes()
        }
    }

    useEffect(() => {
        setJob(store.getState().app.job)
    })

    // Handle create job
    const handleCreateJob = () => {
        job.note = note
        job.address = address
        // console.log(job);
        props.onAddJob(job)
        navigation.navigate('Xác nhận công việc')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Day picker */}
                <View style={{ marginHorizontal: 20 }}>
                    <CalendarStrip
                        calendarAnimation={{ type: 'sequence', duration: 30 }}
                        daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: '#ff8c0f' }}
                        selectedDate={date}
                        onDateSelected={(day) => onDateSelected(day)}
                        style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
                        headerText='Thời gian làm việc'
                        calendarHeaderContainerStyle={{ flexDirection: 'row' }}
                        calendarHeaderStyle={{ fontSize: 16 }}
                    />
                </View>

                {/* Time picker */}
                <View style={styles.show_time}>
                    <Text style={styles.title}>Chọn giờ làm</Text>
                    <RNDateTimePicker
                        style={styles.time}
                        value={time}
                        mode="time"
                        display='spinner'
                        onChange={(time) => onChangTime(time)}
                        is24Hour={true}
                        timeZoneOffsetInMinutes={420}
                    />
                </View>

                {/* Address */}
                <View style={styles.address}>
                    <Text style={styles.title}>Địa chỉ</Text>
                    <TextInput
                        style={[styles.input, { marginHorizontal: 20 }]}
                        onChangeText={setAddress}
                        placeholderText="Password"
                        iconType="lock"
                        borderColor={'#bdbdbd'}
                    />
                </View>

                {/* Note */}
                <View style={styles.address}>
                    <Text style={styles.title}>Ghi chú</Text>
                    <TextInput
                        style={[styles.input, { marginHorizontal: 20 }]}
                        onChangeText={setNote}
                        placeholderText="Password"
                        iconType="lock"
                        borderColor={'#bdbdbd'}
                    />
                </View>
            </ScrollView>

            {/* Total */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCreateJob}
                >
                    <Text style={styles.price}>{job.price / 1000},000 VND/{(job.duration == null) ? '0' : job.duration}h</Text>
                    <Text style={{ color: '#fff', fontSize: 16 }}>Tiếp theo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },

    p: {
        fontSize: 16,
        color: '#c2c2c2'
    },
    show_time: {
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    time: {
        width: 170,
        height: 100,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#47d173',
        marginBottom: 20
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        fontSize: 18,
        height: 100,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 0,
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginBottom: 20,
    },
})
export default WorkTime;