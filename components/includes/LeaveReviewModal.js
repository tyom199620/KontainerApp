import React, {Component} from 'react';
import Modal from "react-native-modal";
import {View, Text, StyleSheet, TouchableOpacity, Image, Pressable} from "react-native";
import MyButton from "./MyButton";
import {
    COLOR_1,
    COLOR_3,
    COLOR_5,
    COLOR_6,
    COLOR_9,
    RATINGS_ACTIVE_IMAGE_WIDTH,
    RATINGS_IMAGE_WIDTH
} from "../helpers/Variables";
import MyInput from "./MyInput";
import {ImageModalClose, ImageRatings, ImageStar, ImageStarBlue} from "../helpers/images";

class LeaveReviewModal extends Component {
    render() {
        const {onSubmit, onCancel, isVisible, value, onChangeText, rating, setRating} = this.props;
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
                        <Text style={styles.title}>Оставьте отзыв</Text>
                        <TouchableOpacity style={styles.closeModal} onPress={onCancel}>
                            <ImageModalClose />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ratings}>
                        <Text style={styles.ratingsText}>Выберите оценку:</Text>
                        {new Array(5).fill(null).map((_, i) => (
                            <TouchableOpacity key={i} style={styles.star} onPressIn={() => setRating(i + 1)}>
                                {i + 1 <= rating ? <ImageStarBlue/> : <ImageStar/>}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <MyInput
                        value={value}
                        onChangeText={onChangeText}
                        multiline
                        maxHeight={300}
                        style={{height: undefined, lineHeight: 20}}
                        label={'Комментарий'}
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
        width: '80%',
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
    button: {
        color: COLOR_1,
        fontFamily: 'GothamProRegular',
        fontSize: 12,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    ratingsBlock: {},
    ratingsText: {
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        color: COLOR_1,
        marginRight: 10
    },
})

export default LeaveReviewModal;
