import * as React from 'react';
import {COLOR_1, COLOR_6} from "../helpers/Variables";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {ImageOk} from "../helpers/images";

class MyCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }


    render() {
        const {checked} = this.state;
        const {option, onPress} = this.props;

        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({checked: !checked});
                    onPress(option, !checked)
                }}
                activeOpacity={0.4}
                style={styles.wrapper}
            >
                <View style={styles.checkbox} >
                    {checked && <ImageOk style={styles.image} />}
                </View>
                <Text style={styles.label}>{option.key}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: COLOR_6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    image: {

    },
    label: {
        fontFamily: 'GothamProMedium',
        fontSize: 10,
        color: COLOR_1
    }
});

export default MyCheckbox;
