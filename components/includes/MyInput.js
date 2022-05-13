import React from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {COLOR_1, COLOR_6, COLOR_9} from "../helpers/Variables";
import {ImageSeePassword, ImageUnSeePassword} from "../helpers/images";

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActivated: false
        }
    }


    render() {
        const {label, style, labelStyle, error, onEyePressed, showEye, ...p} = this.props
        const {isActive} = this.state;

        return (
            <View style={styles.wrapper}>
                <Text style={[styles.label, labelStyle]}>{label}</Text>
                <TextInput
                    {...p}
                    style={[styles.input, {borderColor: isActive ? COLOR_9 : COLOR_6}, showEye && {paddingRight: 50}, style]}
                    onFocus={() => this.setState({isActive: true})}
                    onBlur={() => this.setState({isActive: false})}
                />
                {showEye ? (
                    <TouchableOpacity
                        style={styles.seeUnseeView}
                        onPress={() => onEyePressed(this.props.secureTextEntry)}
                    >
                        {!this.props.secureTextEntry ?
                            <ImageSeePassword style={styles.see} /> :
                            <ImageUnSeePassword style={styles.unsee} />}
                    </TouchableOpacity>
                ) : null}
                {error && error[0] ? (
                    <Text style={styles.error}>{error[0]}</Text>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 16,
    },
    input: {
        borderWidth: 2,
        fontSize: 14,
        borderRadius: 8,
        color: '#000',
        paddingHorizontal: 15,
        height: 46,
        paddingTop: 14,
        paddingBottom: 12,
        fontFamily: 'GothamProLight',
        lineHeight: 13,
    },
    label: {
        fontSize: 10,
        color: COLOR_1,
        fontFamily: 'GothamProMedium',
        marginLeft: 10,
        marginBottom: 6
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    seeUnseeView: {
        position: 'absolute',
        right: '4%',
        top: 32,
    },
    unsee: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    see: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginTop: 2
    }
})

export default MyInput;
