import React, {Component} from 'react';
import Modal from "react-native-modal";
import {View, Text, StyleSheet, FlatList} from "react-native";
import MyButton from "./MyButton";
import {COLOR_1, COLOR_5} from "../helpers/Variables";
import MyInput from "./MyInput";
import {connect} from "react-redux";
import Reviews from "../../assets/data/reviews";
import ReviewItem from "./ReviewItem";

class MoreReviewsModal extends Component {
    render() {
        const {onCancel, isVisible, toOrFrom} = this.props;
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
            >

                <View style={styles.wrapper}>
                    <Text style={styles.title}>Отзывы {toOrFrom === 'from' && 'на '}участника</Text>
                    <FlatList
                        data={Reviews}
                        renderItem={({item}) => (
                            <ReviewItem toOrFrom={toOrFrom === 'to' ? 'на' : 'от'} review={item} />
                        )}
                    />
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
        width: '98%',
        height: '80%',
        position: 'absolute',
        paddingHorizontal: 18,
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

const mapStateToProps = (store) => ({
    //token: store.users.token
})

const mapDispatchToProps = {
    //setToken
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoreReviewsModal)


export default Container;
