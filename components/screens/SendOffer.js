import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import {ImageCallGreen, ImageEmailGreen, ImageFavorite, ImageOffersArrow, ImageRatingSmall} from "../helpers/images";
import {COLOR_1, COLOR_2, COLOR_5, COLOR_6, COLOR_8, COLOR_9, WRAPPER_PADDINGS} from "../helpers/Variables";
import SingleParticipantBlock from "../includes/SingleParticipantBlock";
import MyInput from "../includes/MyInput";
import MyButton from "../includes/MyButton";

class SendOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: null,
            periodOfUsing: null,
            comment: '',
        };
    }

    render() {
        const {route, navigation} = this.props;
        const {price, periodOfUsing, comment} = this.state;
        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: true,
                navigation
            }}>
                <View style={styles.wrapper}>
                    <View style={styles.infoBlock}>
                        <View style={styles.row}>
                            <View style={styles.locationInfo}>
                                <Text style={styles.fromCity}>Калининград</Text>
                                <ImageOffersArrow />
                                <Text style={styles.toCity}>Петрозаводск</Text>
                            </View>
                            <Text style={styles.price}>32.000 p.</Text>
                        </View>
                        <View style={styles.row}>
                            <View>
                                <Text style={styles.type}>Рефрижератор, 20 т.</Text>
                                <Text style={styles.type}>20-22 апреля</Text>
                            </View>
                            <Text style={styles.dateAdded}>9.04.2022</Text>
                        </View>
                    </View>
                    <View style={styles.company}>
                        <Image style={styles.companyPhoto} source={{uri: 'https://thumbs.dreamstime.com/b/light-gray-beton-background-loft-design-empty-pure-wallpaper-light-gray-beton-background-loft-design-empty-pure-wallpaper-copy-174515451.jpg'}} />
                        <View style={styles.companyInfo}>
                            <Text style={styles.companyName}>ЖелДорИнвест</Text>
                            <Text style={styles.companyCity}>Россия, Новосибирск</Text>
                            <Text style={styles.companyPosition}>оператор КП</Text>
                            <View style={styles.companyRating}>
                                <ImageRatingSmall />
                                <Text style={styles.companyRatingText}>4.2</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.header}>Контакты</Text>
                    <SingleParticipantBlock
                        uri={'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}
                        button={{
                            label: 'Написать',
                            onPress: () => {}
                        }}
                        style={styles.contactWrapper}
                    >
                        <Text style={styles.name}>Иванов Пётр Сергеевич</Text>
                        <Text style={styles.location}>Россия, Новосибирск</Text>
                        <View style={styles.contacts}>
                            <Text style={styles.contactsText}>+7 913 320 0001</Text>
                            <ImageCallGreen />
                        </View>
                        <View style={styles.contacts}>
                            <Text style={styles.contactsText}>petrivanov@company.com</Text>
                            <ImageEmailGreen />
                        </View>
                    </SingleParticipantBlock>

                    <Text style={styles.header}>Направить предложение</Text>
                    <MyInput
                        label={'Ваша цена'}
                        keyboardType={'numeric'}
                        value={price}
                        onChangeText={val => this.setState({price: val})}
                    />
                    <MyInput
                        label={'Срок пользования/перевозки, дней'}
                        keyboardType={'numeric'}
                        value={periodOfUsing}
                        onChangeText={val => this.setState({periodOfUsing: val})}
                    />
                    <MyInput
                        label={'Комментарий'}
                        value={comment}
                        onChangeText={val => this.setState({comment: val})}
                        style={styles.commentInput}
                        multiline
                    />
                    <MyButton style={styles.submitButton} onPress={() => {}}>Направить предложение</MyButton>
                </View>
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: WRAPPER_PADDINGS
    },
    infoBlock: {
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_6
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    locationInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fromCity: {
        marginRight: 10,
        color: COLOR_8,
        fontSize: 12,
        fontFamily: 'GothamProMedium'
    },
    toCity: {
        marginLeft: 10,
        color: COLOR_8,
        fontSize: 12,
        fontFamily: 'GothamProMedium'
    },
    price: {
        color: COLOR_5,
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: COLOR_2,
        borderRadius: 10
    },
    type: {
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        marginBottom: 4
    },
    dateAdded: {
        color: COLOR_9,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        marginTop: 18,
        marginRight: 10
    },
    company: {
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    companyPhoto: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginRight: 30
    },
    companyInfo: {

    },
    companyName: {
        color: COLOR_1,
        fontSize: 12,
        fontFamily: 'GothamProRegular',
        marginBottom: 6,
    },
    companyCity: {
        color: COLOR_1,
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        marginBottom: 6,
    },
    companyPosition: {
        color: COLOR_1,
        fontSize: 9,
        fontFamily: 'GothamProMedium',
        marginBottom: 10,
    },
    companyRating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    companyRatingText: {
        marginLeft: 4,
        color: COLOR_1,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
    },
    header: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        marginBottom: 20,
        color: COLOR_1
    },
    contactLine: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    contactInfo: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_1,
        marginLeft: 10
    },
    contacts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    contactsText: {
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        color: COLOR_1,
    },
    name: {
        marginBottom: 4
    },
    location: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_1,
        marginBottom: 20
    },
    contactWrapper: {
        borderBottomColor: COLOR_6,
        borderBottomWidth: 1,
        paddingBottom: 30
    },
    commentInput: {
        height: undefined,
        marginBottom: 20
    },
    submitButton: {
        alignSelf: 'center',
        marginBottom: 50
    }
});

const mapStateToProps = (store) => ({
    //token: store.users.token
})

const mapDispatchToProps = {
    //setToken
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(SendOffer)


export default Container;
