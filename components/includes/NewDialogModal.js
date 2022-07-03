import React, {Component} from 'react';
import Modal from "react-native-modal";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import MyButton from "./MyButton";
import {COLOR_1, COLOR_5, COLOR_9} from "../helpers/Variables";
import MyInput from "./MyInput";
import {ImageModalClose} from "../helpers/images";

class NewDialogModal extends Component {
    render() {
        const {onSubmit, onCancel, isVisible, companyName, setCompanyName, userName, setUserName} = this.props;
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
                    <View style={styles.header}>
                        <Text style={styles.title}>Новый диалог</Text>
                        <TouchableOpacity style={styles.closeModal} onPress={onCancel}>
                            <ImageModalClose />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.description}>
                        Введите название компании или имя пользователя, чтобы найти собеседника и начать диалог
                    </Text>
                    <MyInput
                        value={companyName}
                        onChangeText={setCompanyName}
                        label={'Название компании'}
                    />
                    <MyInput
                        value={userName}
                        onChangeText={setUserName}
                        label={'Ф.И.О. пользователя'}
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    closeModal: {
        padding: 10,
        paddingRight: 0
    },
    title: {
        color: COLOR_1,
        fontFamily: 'GothamProMedium',
        fontSize: 12,
        lineHeight: 14
    },
    description: {
        color: COLOR_9,
        fontFamily: 'GothamProRegular',
        fontSize: 9,
        lineHeight: 11,
        marginVertical: 20
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

export default NewDialogModal;
