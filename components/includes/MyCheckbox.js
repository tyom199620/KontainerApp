import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import {COLOR_1, COLOR_2, COLOR_6} from "../helpers/Variables";
import CheckBox from 'expo-checkbox';
import {StyleSheet} from "react-native";

class MyCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }


    render() {
        const {checked} = this.state

        return (
            /*<Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => this.setState({checked: !checked})}
                color={COLOR_2}
                uncheckedColor={COLOR_6}
            />*/
            <CheckBox
                value={checked}
                onValueChange={val => this.setState({checked: val})}
                style={styles.checkbox}
            />
        );
    }
}

const styles = StyleSheet.create({
    checkbox: {
        backgroundColor: COLOR_6,
        borderColor: COLOR_6
    },
});

export default MyCheckbox;
