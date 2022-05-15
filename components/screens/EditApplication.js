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
import BlockWithSwitchButton from "../includes/BlockWithSwitchButton";

class EditApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondaryTabs: ['Поиск КТК', 'Продажа КТК', 'Выдача КТК', 'Поездной сервис', 'Заявка на ТЭО'],
            activeSecondaryTab: 'Поиск КТК',
            whereFrom: 'Новосибирск',
            whereTo: 'Москва',
            containerCount: '2',
            date: new Date(),
            comment: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.',
            price: '28 900',
            showDatePicker: false,
            turnOffApplication: false,
            deleteApplication: false
        };
    }

    save = () => {
        console.log('saved')
        this.props.navigation.goBack();
    }

    render() {
        const {route, navigation} = this.props;
        const {
            whereFrom,
            whereTo,
            containerCount,
            date,
            price,
            comment,
            turnOffApplication,
            deleteApplication,
        } = this.state;
        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: false,
                navigation,
                onSavePress: this.save
            }}>

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
                        titleComponent={
                            <Text style={styles.selectText}>
                                Тип контейнера: <Text style={styles.bold}>рефрижератор</Text>
                            </Text>
                    }
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
                        titleComponent={
                            <Text style={styles.selectText}>
                                Ответственный: <Text style={styles.bold}>Петров Иван Алексеевич</Text>
                            </Text>
                        }
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
                    <BlockWithSwitchButton
                        title={'Снять с публикации'}
                        description={'Публикация будет сохранена в Черновиках'}
                        isOn={turnOffApplication}
                        onToggle={val => this.setState({turnOffApplication: val})}
                        titleStyle={styles.switchTitle}
                        descriptionStyle={styles.switchDescription}
                        style={styles.switch}
                    />
                    <BlockWithSwitchButton
                        title={'Закрыть'}
                        description={'Публикация будет отправлена в Архив'}
                        isOn={deleteApplication}
                        onToggle={val => this.setState({deleteApplication: val})}
                        titleStyle={styles.switchTitle}
                        descriptionStyle={styles.switchDescription}
                        style={styles.switch}
                    />
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
        fontFamily: 'GothamProRegular',
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
    },
    bold: {
        fontFamily: 'GothamProMedium'
    },
    switchTitle: {
        color: COLOR_1,
        fontFamily: 'GothamProMedium',
        fontSize: 10
    },
    switchDescription: {
        marginTop: -2
    },
    switch: {
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
)(EditApplication)


export default Container;
