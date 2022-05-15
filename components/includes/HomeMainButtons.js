import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {COLOR_1, COLOR_2, COLOR_5} from "../helpers/Variables";
import {ImageEvents, ImageParticipants, ImageMessages, ImageOffers, ImageBid, ImagePoll} from "../helpers/images";

const BORDER_RADIUS = 10;

class HomeMainButtons extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Events', {currentPage: 'Мероприятие'})}
                                  style={[styles.block, styles.borderTopLeft, styles.bgBlue]}>
                    <ImageEvents style={styles.image}/>
                    <Text style={styles.text}>Мероприятие</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Participants', {currentPage: 'Участники'})}
                                  style={[styles.block, styles.bgGreen]}>
                    <ImageParticipants style={styles.image}/>
                    <Text style={styles.text}>Участники</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Messages', {currentPage: 'Сообщения'})}
                                  style={[styles.block, styles.borderTopRight, styles.bgBlue]}>
                    <ImageMessages style={styles.image}/>
                    <Text style={styles.text}>Чаты</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Offers', {currentPage: 'Предложения'})}
                                  style={[styles.block, styles.borderBottomLeft, styles.bgGreen]}>
                    <ImageOffers style={styles.image}/>
                    <Text style={styles.text}>Предложения</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('MyApplications', {currentPage: 'Мои заявки'})}
                                  style={[styles.block, styles.bgBlue]}>
                    <ImageBid style={styles.image}/>
                    <Text style={styles.text}>Мои заявки</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Polls', {currentPage: 'Опросы'})}
                                  style={[styles.block, styles.borderBottomRight, styles.bgGreen]}>
                    <ImagePoll style={styles.image}/>
                    <Text style={styles.text}>Опросы</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 230,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    block: {
        width: '32%',
        height: '48.5%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    bgBlue: {
        backgroundColor: COLOR_1,
    },
    bgGreen: {
        backgroundColor: COLOR_2,
    },
    borderTopRight: {
        borderTopRightRadius: BORDER_RADIUS
    },
    borderTopLeft: {
        borderTopLeftRadius: BORDER_RADIUS
    },
    borderBottomRight: {
        borderBottomRightRadius: BORDER_RADIUS
    },
    borderBottomLeft: {
        borderBottomLeftRadius: BORDER_RADIUS
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    text: {
        color: COLOR_5,
        marginBottom: 16,
        marginTop: 16,
        fontSize: 10,
        fontFamily: 'GothamProRegular'
    }
});

export default HomeMainButtons;
