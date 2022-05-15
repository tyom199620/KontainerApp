import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import MyInput from "./MyInput";
import {ImageCalendarSmall, ImageSearch} from "../helpers/images";
import {COLOR_6} from "../helpers/Variables";
import moment from "moment";

class MyDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDatePicker: false
        }
    }

    render() {
        const {style, date, setDate} = this.props;
        const {showDatePicker} = this.state
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.setState({showDatePicker: true})}
            >
                <MyInput
                    label={'Дата погрузки'}
                    disabled
                    style={styles.input}
                    editable={false}
                    value={moment(date).format('DD.MM.YY')}
                />
                <ImageCalendarSmall style={styles.calendar} />
                {showDatePicker && (
                    <RNDateTimePicker
                        value={date}
                        onChange={(event, date) => {
                            this.setState({showDatePicker: false})
                            setDate(event, date)
                        }}
                        minimumDate={new Date()}
                        mode={'date'}
                    />
                )}
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 40
    },
    calendar: {
        position: 'absolute',
        left: 14,
        top: 34
    }
})

export default MyDatePicker;
