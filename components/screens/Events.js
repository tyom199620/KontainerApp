import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import NavBar from "../includes/NavBar";
import {COLOR_1, COLOR_6, COLOR_8, COLOR_9} from "../helpers/Variables";
import {ImageBiggerPlaceholder, ImageCalendar, ImageLike, ImageNextArrow} from "../helpers/images";
import AccordionItem from "../includes/AccordionItem";
import MyButton from "../includes/MyButton";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ['1 день', '2 день'],
            activeTab: '1 день'
        };
    }

    titleComponent = (startTime, endTime, listTitleText) => {
        return (
            <View style={styles.listTitleBlock}>
                <View style={styles.time}>
                    <Text style={styles.startTime}>{startTime}</Text>
                    <Text style={styles.endTime}>{endTime}</Text>
                </View>
                <Text style={styles.listTitleText}>{listTitleText}</Text>
            </View>
        )
    }

    sectionComponent = (title, text, personName, photoUri, position) => {
        return (
            <View style={styles.section}>
                <View style={styles.sectionContent}>
                    <Text style={styles.sectionTitle}>{title}</Text>
                    <Text style={styles.sectionText}>{text}</Text>
                    <View style={styles.personBlock}>
                        <Text style={styles.personName}>{personName}</Text>
                        <Text style={styles.personPosition}>{position}</Text>
                        <Image source={{uri: photoUri}} style={styles.personPhoto} />
                    </View>
                </View>
                <View style={styles.buttonRow}>
                    <MyButton textStyle={styles.buttonText} style={styles.sectionButton}>Задать вопрос</MyButton>
                    <TouchableOpacity style={styles.like}>
                        <ImageLike />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        const {route, navigation} = this.props;
        const {tabs, activeTab} = this.state;
        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: true,
                navigation,
            }}>
                <NavBar
                    onPress={tab => this.setState({activeTab: tab})}
                    tabs={tabs}
                    activeTab={activeTab}
                />
                <Text style={styles.title}>Единый слет операторов и экспедиторов 2022</Text>
                <View style={styles.info}>
                    <View style={styles.date}>
                        <ImageCalendar />
                        <Text style={styles.dateText}>15.05.2022</Text>
                    </View>
                    <TouchableOpacity style={styles.location}>
                        <ImageBiggerPlaceholder />
                        <Text style={styles.locationText}>Отель Hilton Garden Inn (конференция)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.location}>
                        <ImageBiggerPlaceholder />
                        <Text style={styles.locationText}>Ресторан Пино Шато (гала-ужин)</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.header}>Программа мероприятия</Text>
                <AccordionItem
                    arrowStyle={styles.arrowStyle}
                    titleComponent={this.titleComponent('10:00', '12:00', 'Сессия I «Тренды»')}
                >
                    <View style={styles.item}>
                        {this.sectionComponent(
                            'Актуальные тренды развития контейнерных перевозок',
                            'С другой стороны начало повседневной работы по формированию позиции играет важную роль в формировании существенных финансовых и административных условий.',
                            'Иван Владимиров',
                            'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                            'ген.директор «ЖелДорИнвест»',
                        )}
                        {this.sectionComponent(
                            'Актуальные тренды развития контейнерных перевозок',
                            'С другой стороны начало повседневной работы по формированию позиции играет важную роль в формировании существенных финансовых и административных условий.',
                            'Иван Владимиров',
                            'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                            'ген.директор «ЖелДорИнвест»',
                        )}
                        <TouchableOpacity style={styles.nextArrow}>
                            <ImageNextArrow />
                        </TouchableOpacity>
                    </View>
                </AccordionItem>
                <AccordionItem
                    arrowStyle={styles.arrowStyle}
                    titleComponent={this.titleComponent('10:00', '12:00', 'Сессия I «Тренды»')}
                >
                    <View style={styles.item}>
                        {this.sectionComponent(
                            'Актуальные тренды развития контейнерных перевозок',
                            'С другой стороны начало повседневной работы по формированию позиции играет важную роль в формировании существенных финансовых и административных условий.',
                            'Иван Владимиров',
                            'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                            'ген.директор «ЖелДорИнвест»',
                        )}
                        <TouchableOpacity style={styles.nextArrow}>
                            <ImageNextArrow />
                        </TouchableOpacity>
                    </View>
                </AccordionItem>
                <AccordionItem
                    arrowStyle={styles.arrowStyle}
                    titleComponent={this.titleComponent('10:00', '12:00', 'Сессия I «Тренды»')}
                >
                    <View style={styles.item}>
                        {this.sectionComponent(
                            'Актуальные тренды развития контейнерных перевозок',
                            'С другой стороны начало повседневной работы по формированию позиции играет важную роль в формировании существенных финансовых и административных условий.',
                            'Иван Владимиров',
                            'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg',
                            'ген.директор «ЖелДорИнвест»',
                        )}
                        <TouchableOpacity style={styles.nextArrow}>
                            <ImageNextArrow />
                        </TouchableOpacity>
                    </View>
                </AccordionItem>
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'GothamProMedium',
        fontSize: 12,
        color: COLOR_8,
        marginBottom: 20,
        marginTop: 30
    },
    info: {
        paddingLeft: 20,
        marginBottom: 30
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6
    },
    dateText: {
        fontFamily: 'GothamProMedium',
        fontSize: 12,
        color: COLOR_1,
        marginLeft: 10
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 2
    },
    locationText: {
        fontFamily: 'GothamProRegular',
        fontSize: 10,
        color: COLOR_1,
        marginLeft: 13,
        textDecorationLine: 'underline'
    },
    header: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        marginBottom: 20,
        color: COLOR_1
    },
    listTitleBlock: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    time: {
        marginRight: 20,
    },
    startTime: {
        fontFamily: 'GothamProMedium',
        fontSize: 12,
        color: COLOR_1,
        marginBottom: 6
    },
    endTime: {
        fontFamily: 'GothamProRegular',
        fontSize: 12,
        color: COLOR_1,
    },
    listTitleText: {
        fontFamily: 'GothamProMedium',
        fontSize: 12,
        color: COLOR_1,
    },
    item: {
        marginTop: -26,
        borderBottomColor: COLOR_6,
        borderBottomWidth: 1,
    },
    section: {
        marginBottom: 36
    },
    sectionContent: {
        paddingLeft: 58,
    },
    sectionTitle: {
        fontFamily: 'GothamProRegular',
        fontSize: 12,
        color: COLOR_1,
        marginBottom: 14
    },
    sectionText: {
        fontFamily: 'GothamProRegular',
        fontSize: 9,
        color: COLOR_9,
        marginBottom: 14,
        lineHeight: 11
    },
    personBlock: {
        marginBottom: 34
    },
    personName: {
        fontFamily: 'GothamProRegular',
        fontSize: 10,
        color: COLOR_1,
    },
    personPosition: {
        fontFamily: 'GothamProRegular',
        fontSize: 10,
        color: COLOR_9,
    },
    personPhoto: {
        width: 44,
        height: 44,
        borderRadius: 30,
        position: 'absolute',
        left: -60,
        top: -8
    },
    buttonRow: {
    },
    sectionButton: {
        alignSelf: 'center',
        paddingHorizontal: 18,
        paddingVertical: 6,
    },
    buttonText: {
        fontSize: 12,
    },
    like: {
        position: 'absolute',
        right: 40,
        top: 6
    },
    arrowStyle: {
        top: 14
    },
    nextArrow: {
        position: 'absolute',
        right: 0,
        bottom: 44
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
)(Events)


export default Container;
