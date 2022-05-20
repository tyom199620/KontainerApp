import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import NavBar from "../includes/NavBar";
import MyInput from "../includes/MyInput";
import {COLOR_1, COLOR_10, COLOR_8, WRAPPER_PADDINGS} from "../helpers/Variables";
import DatePicker from "../includes/DatePicker";
import AccordionItem from "../includes/AccordionItem";
import MyButton from "../includes/MyButton";
import BlockWithSwitchButton from "../includes/BlockWithSwitchButton";

class CreatingApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondaryTabs: ['Продажа КТК', 'Поиск КТК', 'Выдача КТК', 'Поездной сервис', 'Заявка на ТЭО'],
            activeSecondaryTab: 'Продажа КТК',
            whereFrom: '',
            whereTo: '',
            containerCount: '',
            date: new Date(),
            comment: '',
            price: '',
            showDatePicker: false,
            currency: '',
            termOfUse: null,
            weight: '',
            saveAsDraft: false,
            whereToCount: 1
        };
    }

    save = () => {
        console.log('saved')
        this.props.navigation.goBack();
    }

    searchKTK = () => {
        const {secondaryTabs, activeSecondaryTab, whereFrom, whereTo, containerCount, date, price, comment} = this.state;
        return (
            <>
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
                    titleComponent={<Text style={styles.selectText}>Валюта</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >
                </AccordionItem>
            </>
        )
    }

    sellKTK = () => {
        const {secondaryTabs, activeSecondaryTab, whereFrom, whereTo, containerCount, date, price, comment} = this.state;
        return (
            <>
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
                <MyInput
                    label={'Цена'}
                    value={price}
                    onChangeText={val => this.setState({price: val})}
                    keyboardType={'numeric'}
                />
                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Валюта</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >
                </AccordionItem>

                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Город расположения</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >
                </AccordionItem>

                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Состояние</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >
                </AccordionItem>

                <TouchableOpacity><Text style={{fontFamily: 'GothamProRegular', color: COLOR_1, marginVertical: 40}}>Добавить фото</Text></TouchableOpacity>

                <MyInput
                    label={'Описание'}
                    value={comment}
                    onChangeText={val => this.setState({comment: val})}
                    style={styles.commentInput}
                    multiline
                />

                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Условия оплаты</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >
                </AccordionItem>

                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Реестр РЖД</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >
                </AccordionItem>

            </>
        )
    }

    extraditionKTK = () => {
        const {termOfUse, whereToCount, whereFrom, whereTo, containerCount, date, price, comment} = this.state;
        return (
            <>
                <MyInput
                    label={'Откуда'}
                    value={whereFrom}
                    onChangeText={val => this.setState({whereFrom: val})}
                />
                {new Array(whereToCount).fill(null).map((_, i) => (
                    <MyInput
                        key={i}
                        label={'Куда'}
                        //value={whereTo}
                        //onChangeText={val => this.setState({whereTo: val})}
                    />
                ))}
                <TouchableOpacity onPress={() => this.setState({whereToCount: whereToCount + 1})}><Text style={{fontFamily: 'GothamProRegular', color: COLOR_1, marginBottom: 10}}>Добавить ещё</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({whereToCount: whereToCount - 1 > 0 ? whereToCount - 1 : 1})}><Text style={{fontFamily: 'GothamProRegular', color: COLOR_1, marginBottom: 40}}>Удалить</Text></TouchableOpacity>


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
                <MyInput
                    label={'Срок пользования'}
                    value={termOfUse}
                    onChangeText={val => this.setState({termOfUse: val})}
                    keyboardType={'numeric'}
                />
                <MyInput
                    label={'Ставка'}
                    value={price}
                    onChangeText={val => this.setState({price: val})}
                    keyboardType={'numeric'}
                />
                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Валюта</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >
                </AccordionItem>
            </>
        )
    }

    trainService = () => {
        const {termOfUse, activeSecondaryTab, whereFrom, whereTo, containerCount, date, price, comment} = this.state;
        return (
            <>
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
                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Принадлежность контейнера</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >

                </AccordionItem>
                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Охрана</Text>}
                    wrapperStyle={styles.select}
                    headerStyle={styles.selectHeader}
                    arrowStyle={styles.selectArrowStyle}
                >

                </AccordionItem>
                <MyInput
                    label={'Ставка'}
                    value={price}
                    onChangeText={val => this.setState({price: val})}
                    keyboardType={'numeric'}
                />
                <AccordionItem
                    titleComponent={<Text style={styles.selectText}>Валюта</Text>}
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
            </>
        )
    }

    applicationOnTEO = () => {
        const {termOfUse, activeSecondaryTab, whereFrom, whereTo, containerCount, weight, price, comment} = this.state;
        return (
            <>
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
                <MyInput
                    label={'Груз'}
                    value={weight}
                    onChangeText={val => this.setState({weight: val})}
                    keyboardType={'numeric'}
                />
                <MyInput
                    label={'Комментарий'}
                    value={comment}
                    onChangeText={val => this.setState({comment: val})}
                    style={styles.commentInput}
                    multiline
                />
            </>
        )
    }

    render() {
        const {route, navigation} = this.props;
        const {secondaryTabs, activeSecondaryTab, saveAsDraft} = this.state;
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
                    {
                        activeSecondaryTab === 'Поиск КТК' ? this.searchKTK() :
                        activeSecondaryTab === 'Продажа КТК' ? this.sellKTK() :
                        activeSecondaryTab === 'Выдача КТК' ? this.extraditionKTK() :
                        activeSecondaryTab === 'Поездной сервис' ? this.trainService() :
                        activeSecondaryTab === 'Заявка на ТЭО' ? this.applicationOnTEO() : null
                    }
                    <BlockWithSwitchButton
                        title={'Сохранить как черновик'}
                        titleStyle={styles.selectText}
                        onToggle={val => this.setState({saveAsDraft: val})}
                        isOn={saveAsDraft}
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
