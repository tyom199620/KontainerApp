import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import NavBar from "../includes/NavBar";
import MyInput from "../includes/MyInput";
import {COLOR_1, COLOR_10, COLOR_8, WRAPPER_PADDINGS} from "../helpers/Variables";
import DatePicker from "../includes/DatePicker";
import AccordionItem from "../includes/AccordionItem";
import MyButton from "../includes/MyButton";

class CreatingApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondaryTabs: ['Поиск КТК', 'Продажа КТК', 'Выдача КТК', 'Поездной сервис', 'Заявка на ТЭО'],
            activeSecondaryTab: 'Поиск КТК',
            whereFrom: '',
            whereTo: '',
            containerCount: '',
            date: new Date(),
            comment: '',
            price: '',
            showDatePicker: false
        };
    }

    save = () => {
        console.log('saved')
        this.props.navigation.goBack();
    }

    render() {
        const {route, navigation} = this.props;
        const {secondaryTabs, activeSecondaryTab, whereFrom, whereTo, containerCount, date, price, comment} = this.state;
        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: false,
                navigation,
                onSavePress: this.save
            }}>

                <NavBar
                    tabs={secondaryTabs}
                    activeTab={activeSecondaryTab}
                    onPress={tab => this.setState({activeSecondaryTab: tab})}
                    secondary
                />

                <View style={styles.wrapper}>
                    <MyInput
                        label={'Откуда'}
                        value={whereFrom}
                        onChangeText={val => this.setState({whereFrom: val})}
                    />
                    <MyInput
                        label={'Куда'}
                        value={whereTo}
                        onChangeText={val => this.setState({whereTo: val})}
                    />
                    <AccordionItem
                        titleComponent={<Text style={styles.selectText}>Выберите тип контейнера</Text>}
                        wrapperStyle={styles.select}
                        headerStyle={styles.selectHeader}
                        arrowStyle={styles.selectArrowStyle}
                    >

                    </AccordionItem>
                    <MyInput
                        label={'Количество контейнеров'}
                        value={containerCount}
                        onChangeText={val => this.setState({containerCount: val})}
                        keyboardType={'numeric'}
                    />
                    <DatePicker
                        date={date}
                        setDate={(event, date) => this.setState({date, showDatePicker: false})}
                    />
                    <MyInput
                        label={'Ставка'}
                        value={price}
                        onChangeText={val => this.setState({price: val})}
                        keyboardType={'numeric'}
                    />
                    <AccordionItem
                        titleComponent={<Text style={styles.selectText}>Выберите ответственного</Text>}
                        wrapperStyle={styles.select}
                        headerStyle={styles.selectHeader}
                        arrowStyle={styles.selectArrowStyle}
                    >

                    </AccordionItem>
                    <MyInput
                        label={'Комментарий'}
                        value={comment}
                        onChangeText={val => this.setState({comment: val})}
                        style={styles.commentInput}
                        multiline
                    />
                    <MyButton style={styles.button}>Разместить</MyButton>
                </View>

            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: WRAPPER_PADDINGS
    },
    commentInput: {
        height: undefined,
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProRegular'
    },
    select: {
        backgroundColor: COLOR_10,
        borderRadius: 10,
        marginBottom: 20
    },
    selectText: {
        color: COLOR_1,
        fontSize: 12,
        fontFamily: 'GothamProMedium',
    },
    selectHeader: {
        borderBottomWidth: 0,
        paddingHorizontal: 10,
        paddingVertical: 18,
    },
    selectArrowStyle: {
        top: 20,
        right: 14
    },
    button: {
        alignSelf: 'center',
        marginTop: 20,
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
)(CreatingApplication)


export default Container;
