import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import SingleParticipantBlock from "../includes/SingleParticipantBlock";
import {
    ImageCallGreen,
    ImageEmailGreen,
    ImageMapPlaceholder,
    ImageMouseCursor,
    ImageOkSmall,
    ImageRating
} from "../helpers/images";
import {COLOR_1, COLOR_6} from "../helpers/Variables";
import MyButton from "../includes/MyButton";
import ReviewItem from "../includes/ReviewItem";

class SingleParticipant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    leaveReview = () => {}
    moreReviews = () => {}

    render() {
        const {route, navigation} = this.props;
        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: true,
                navigation
            }}>
                <Text style={styles.header}>Основные данные</Text>
                <SingleParticipantBlock
                    uri={'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}
                >
                    <View style={styles.coWorked}>
                        <ImageOkSmall />
                        <Text style={styles.coWorkedText}>Сотрудничали</Text>
                    </View>
                    <Text style={styles.companyName}>CompanyName</Text>
                    <Text style={styles.additionalInfo}>Россия, Новосибирск</Text>
                    <Text style={styles.additionalInfo}>ИНН 5300000040 / ОГРН 0000000000001</Text>
                    <Text style={styles.additionalInfo}>Вид налогообложения: УСН</Text>
                    <Text style={styles.jobInfo}>оператор КП</Text>
                    <View style={styles.contactLine}>
                        <ImageMapPlaceholder />
                        <Text style={styles.contactInfo}>г. Новосибирск, ул. Транспортая, д.4, ст. 12</Text>
                    </View>
                    <View style={styles.contactLine}>
                        <ImageMouseCursor />
                        <Text style={styles.contactInfo}>www.company.com</Text>
                    </View>
                </SingleParticipantBlock>

                <Text style={styles.header}>Контакты</Text>
                <SingleParticipantBlock
                    uri={'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}
                    button={{
                        label: 'Написать',
                        onPress: () => {}
                    }}
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

                <View style={styles.reviewBlock}>
                    <Text style={styles.header}>Отзывы на участника</Text>
                    <View style={styles.reviewLine}>
                        <ImageRating />
                        <View style={styles.reviewDescription}>
                            <Text style={styles.averageReview}>Общий рейтинг — 4,5</Text>
                            <Text style={styles.reviewInfo}>(основан на 339 отзывах)</Text>
                        </View>
                    </View>
                    <ReviewItem toOrFrom={'от'} review={{
                        uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                        name: 'ЖелДорИнвест',
                        date: '14.03.2022',
                        text: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры способствует подготовки и реализации системы обучения кадров.',
                        rating: 1.5
                    }} />
                    <ReviewItem toOrFrom={'от'} review={{
                        uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                        name: 'ЖелДорИнвест',
                        date: '14.03.2022',
                        text: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры способствует подготовки и реализации системы обучения кадров.',
                        rating: 4
                    }} />
                    <View style={styles.buttonRow}>
                        <MyButton
                            textStyle={styles.buttonText}
                            style={styles.button}
                            onPress={this.leaveReview}
                        >
                            Оставить отзыв
                        </MyButton>
                        <MyButton
                            textStyle={styles.buttonText}
                            style={styles.button}
                            onPress={this.moreReviews}
                        >
                            Ещё отзывы
                        </MyButton>
                    </View>
                </View>

                <Text style={styles.header}>Отзывы участника</Text>
                <ReviewItem toOrFrom={'на'} review={{
                    uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                    name: 'ЖелДорИнвест',
                    date: '14.03.2022',
                    text: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры способствует подготовки и реализации системы обучения кадров.',
                    rating: 1.5
                }} />
                <ReviewItem toOrFrom={'на'} review={{
                    uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                    name: 'ЖелДорИнвест',
                    date: '14.03.2022',
                    text: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры способствует подготовки и реализации системы обучения кадров.',
                    rating: 4
                }} />
                <View style={styles.buttonRow}>
                    <MyButton
                        textStyle={styles.buttonText}
                        style={styles.button}
                        onPress={this.moreReviews}
                    >
                        Ещё отзывы
                    </MyButton>
                </View>

            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    block: {
        marginBottom: 50
    },
    coWorked: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    coWorkedText: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        marginLeft: 12,
        color: COLOR_1
    },
    header: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        marginBottom: 20,
        color: COLOR_1
    },
    companyName: {
        fontFamily: 'GothamProMedium',
        color: COLOR_1,
        fontSize: 14,
        marginBottom: 20
    },
    additionalInfo: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_1,
        marginBottom: 5
    },
    jobInfo: {
        fontSize: 9,
        fontFamily: 'GothamProMedium',
        color: COLOR_1,
        marginBottom: 20
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
    reviewLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewDescription: {
        marginLeft: 14
    },
    averageReview: {
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        color: COLOR_1,
        marginBottom: 2
    },
    reviewInfo: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_1,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20
    },
    button: {
        paddingHorizontal: 18,
        paddingVertical: 6,
    },
    buttonText: {
        fontSize: 12
    },
    reviewBlock: {
        borderBottomWidth: 1,
        borderBottomColor: COLOR_6,
        marginBottom: 20
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
)(SingleParticipant)


export default Container;
