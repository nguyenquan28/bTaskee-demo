import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { store } from '../store'
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarStrip from 'react-native-calendar-strip';

const WorkTime = ({ navigation }) => {
    useEffect(() => {
        console.log(store.getState());
    })

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const onSelectDay = (day) => {
        var d = new Date();
        var n = d.getDate();
        console.log(day);
        console.log(n);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Thời gian làm việc</Text>

            {/* Day picker */}
            <Text>Chọn ngày làm</Text>
            <CalendarStrip
                onDateSelected={(day) => onSelectDay(day)}
                style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
            />

            {/* Time picker */}
            <View>
                <Text>Chọn giờ làm</Text>
                <View>
                    <Button onPress={showTimepicker} title="Show time picker!" />
                </View>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
})
export default WorkTime;