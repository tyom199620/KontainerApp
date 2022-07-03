import React, {Component} from 'react';
import Modal from "react-native-modal";
import {View, Text, StyleSheet} from "react-native";
import MyButton from "./MyButton";
import {COLOR_1, COLOR_5} from "../helpers/Variables";
import MyInput from "./MyInput";

class ForgotPasswordModal extends Component {
    render() {
        const {onSubmit, onCancel, isVisible, value, onChangeText} = this.props;
        return (
            <Modal
                style={styles.modal}
                isVisible={isVisible}
                transparent={true}
                animationIn={'fadeInUp'}
                animationOut={'fadeOutDown'}
                onRequestClose={onCancel}
                hardwareAccelerated={true}
                onBackdropPress={onCancel}
                backdropOpacity={0.3}
                animationInTiming={100}
                animationOutTiming={100}
                useNativeDriver
            >
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Для восстановления пароля укажите свою эл.почту</Text>
                    <MyInput
                        value={value}
                        onChangeText={onChangeText}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}

                    />
                    <MyButton
                        onPress={onSubmit}
                        style={styles.button}
                    >
                        Отправить
                    </MyButton>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        backgroundColor: COLOR_5,
        width: '76%',
        position: 'absolute',
        paddingHorizontal: 30,
        paddingVertical: 25,
        borderRadius: 10,

    },
    title: {
        color: COLOR_1,
        fontFamily: 'GothamProMedium',
        fontSize: 12,
        lineHeight: 14
    },
    button: {
        color: COLOR_1,
        fontFamily: 'GothamProRegular',
        fontSize: 12,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    }
})

export default ForgotPasswordModal;
