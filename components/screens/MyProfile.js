import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import {List} from "react-native-paper";
import AccordionItem from "../includes/AccordionItem";
import MyInput from "../includes/MyInput";
import {COLOR_1, COLOR_6} from "../helpers/Variables";
import BlockWithSwitchButton from "../includes/BlockWithSwitchButton";

class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '',
            phoneNumber: '',
            email: '',
            city: '',

            showToOthersPhone: false,
            showToOthersEmail: false,
            dontWorkInThisCompany: false,

            dmEmail: false,
            dmPush: false,

            groupMessagesEmail: false,
            groupMessagesPush: false,

            newMessagesEmail: false,
            newMessagesPush: false,

            hideProfile: false,
            deleteProfile: false,
        };
    }

    save = () => {
        this.props.navigation.navigate('Home')
        console.log('saved')
    }

    render() {
        const {route, navigation} = this.props;

        const {
            name,
            position,
            phoneNumber,
            email,
            city,
            showToOthersPhone,
            showToOthersEmail,
            dontWorkInThisCompany,
            dmEmail,
            dmPush,
            groupMessagesEmail,
            groupMessagesPush,
            newMessagesEmail,
            newMessagesPush,
            hideProfile,
            deleteProfile
        } = this.state;

        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: false,
                navigation,
                onSavePress: this.save
            }}>
                <AccordionItem
                    headerStyle={styles.headerStyle}
                    arrowStyle={styles.arrowStyle}
                    titleComponent={<Text style={styles.header}>Персональные данные</Text>}
                    childrenStyle={styles.block}
                    expanded
                >
                    <View style={styles.imageBlock}>
                        <View style={styles.imageView}>
                            <Image
                                source={{uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}}
                                style={styles.image}
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.smallButton}>Изменить фото</Text>
                        </TouchableOpacity>
                    </View>
                    <MyInput
                        label={'ФИО'}
                        value={name}
                        onChangeText={name => this.setState({name})}
                    />
                    <MyInput
                        label={'Должность'}
                        value={position}
                        onChangeText={position => this.setState({position})}
                    />
                    <MyInput
                        label={'Номер телефона'}
                        value={phoneNumber}
                        onChangeText={phoneNumber => this.setState({phoneNumber})}
                        keyboardType={'phone-pad'}
                    />
                    <BlockWithSwitchButton
                        title={'Показывать другим участникам'}
                        titleStyle={styles.smallSwitchTitle}
                        style={styles.switchBlock}
                        isOn={showToOthersPhone}
                        onToggle={val => this.setState({showToOthersPhone: val})}
                    />
                    <MyInput
                        label={'E-mail'}
                        value={email}
                        onChangeText={email => this.setState({email})}
                        keyboardType={'email-address'}
                    />
                    <BlockWithSwitchButton
                        title={'Показывать другим участникам'}
                        titleStyle={styles.smallSwitchTitle}
                        style={styles.switchBlock}
                        isOn={showToOthersEmail}
                        onToggle={val => this.setState({showToOthersEmail: val})}
                    />
                    <MyInput
                        label={'Город'}
                        value={city}
                        onChangeText={city => this.setState({city})}
                    />
                </AccordionItem>

                <AccordionItem
                    headerStyle={styles.headerStyle}
                    arrowStyle={styles.arrowStyle}
                    titleComponent={<Text style={styles.header}>Компания</Text>}
                    childrenStyle={styles.block}
                >
                    <MyInput
                        label={'Название'}
                        value={'Something'}
                        editable={false}
                        style={styles.nonEditableInput}
                    />
                    <MyInput
                        label={'Страна, город'}
                        value={'Something'}
                        editable={false}
                        style={styles.nonEditableInput}
                    />
                    <MyInput
                        label={'ИНН'}
                        value={'Something'}
                        editable={false}
                        style={styles.nonEditableInput}
                    />
                    <MyInput
                        label={'Профиль деятельности'}
                        value={'Something'}
                        editable={false}
                        style={styles.nonEditableInput}
                    />
                    <MyInput
                        label={'Сайт компании'}
                        value={'Something'}
                        editable={false}
                        style={styles.nonEditableInput}
                    />
                    <BlockWithSwitchButton
                        title={'Я не работаю в данной компании'}
                        titleStyle={styles.smallSwitchTitle}
                        style={styles.switchBlock}
                        isOn={dontWorkInThisCompany}
                        onToggle={val => this.setState({dontWorkInThisCompany: val})}
                    />
                </AccordionItem>

                <AccordionItem
                    headerStyle={styles.headerStyle}
                    arrowStyle={styles.arrowStyle}
                    titleComponent={<Text style={styles.header}>QR-визитка</Text>}
                    childrenStyle={styles.block}
                >
                    <View style={styles.imageBlock}>
                        <View style={styles.imageView}>
                            <Image
                                source={{uri: 'https://thumbs.dreamstime.com/b/light-gray-beton-background-loft-design-empty-pure-wallpaper-light-gray-beton-background-loft-design-empty-pure-wallpaper-copy-174515451.jpg'}}
                                style={styles.imageQr}
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.smallButton}>Отправить визитку</Text>
                        </TouchableOpacity>
                    </View>
                </AccordionItem>

                <AccordionItem
                    headerStyle={styles.headerStyle}
                    arrowStyle={styles.arrowStyle}
                    titleComponent={<Text style={styles.header}>Настройка уведомлений</Text>}
                    childrenStyle={styles.block}
                >
                    <View style={styles.notificationsSection}>
                        <BlockWithSwitchButton
                            title={'Личные сообщения'}
                            titleStyle={styles.bigSwitchTitle}
                            style={[styles.switchBlock, styles.bigSwitch]}
                            isButton={false}
                            description={'Уведомления о новых сообщениях в диалогах'}
                        />
                        <BlockWithSwitchButton
                            title={'Электронная почта'}
                            titleStyle={styles.smallSwitchTitle}
                            style={styles.switchBlock}
                            isOn={dmEmail}
                            onToggle={val => this.setState({dmEmail: val})}
                        />
                        <BlockWithSwitchButton
                            title={'Push-уведомления'}
                            titleStyle={styles.smallSwitchTitle}
                            style={styles.switchBlock}
                            isOn={dmPush}
                            onToggle={val => this.setState({dmPush: val})}
                        />
                    </View>

                    <View style={styles.notificationsSection}>
                        <BlockWithSwitchButton
                            title={'Общие чаты'}
                            titleStyle={styles.bigSwitchTitle}
                            style={[styles.switchBlock, styles.bigSwitch]}
                            isButton={false}
                            description={'Создание новых общих чатов и добавление новых комментариев'}
                        />
                        <BlockWithSwitchButton
                            title={'Электронная почта'}
                            titleStyle={styles.smallSwitchTitle}
                            style={styles.switchBlock}
                            isOn={groupMessagesEmail}
                            onToggle={val => this.setState({groupMessagesEmail: val})}
                        />
                        <BlockWithSwitchButton
                            title={'Push-уведомления'}
                            titleStyle={styles.smallSwitchTitle}
                            style={styles.switchBlock}
                            isOn={groupMessagesPush}
                            onToggle={val => this.setState({groupMessagesPush: val})}
                        />
                    </View>

                    <View style={styles.notificationsSection}>
                        <BlockWithSwitchButton
                            title={'Новые предложения'}
                            titleStyle={styles.bigSwitchTitle}
                            style={[styles.switchBlock, styles.bigSwitch]}
                            isButton={false}
                            description={'Добавление новых запросов и предложений от пользователей в раздел «Все предложения»'}
                        />
                        <BlockWithSwitchButton
                            title={'Электронная почта'}
                            titleStyle={styles.smallSwitchTitle}
                            style={styles.switchBlock}
                            isOn={newMessagesEmail}
                            onToggle={val => this.setState({newMessagesEmail: val})}
                        />
                        <BlockWithSwitchButton
                            title={'Push-уведомления'}
                            titleStyle={styles.smallSwitchTitle}
                            style={styles.switchBlock}
                            isOn={newMessagesPush}
                            onToggle={val => this.setState({newMessagesPush: val})}
                        />
                    </View>
                </AccordionItem>

                <AccordionItem
                    headerStyle={styles.headerStyle}
                    arrowStyle={styles.arrowStyle}
                    titleComponent={<Text style={styles.header}>Действия с профилем</Text>}
                    childrenStyle={styles.block}
                >
                    <BlockWithSwitchButton
                        title={'Скрыть профиль'}
                        titleStyle={styles.bigSwitchTitle}
                        style={[styles.switchBlock, styles.bigSwitch]}
                        description={'Другие участники не видят вашу персональную информацию, но видят информацию о вашей компании'}
                        isOn={hideProfile}
                        onToggle={val => this.setState({hideProfile: val})}
                    />
                    <BlockWithSwitchButton
                        title={'Удалить профиль'}
                        titleStyle={styles.bigSwitchTitle}
                        style={[styles.switchBlock, styles.bigSwitch]}
                        description={'Удаление данных о вашем личном профиле, но не о компании'}
                        isOn={deleteProfile}
                        onToggle={val => this.setState({deleteProfile: val})}
                    />
                </AccordionItem>
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    imageBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 26,
    },
    imageView: {
        width: 100,
        height: 100,
        marginRight: 40,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    imageQr: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    smallButton: {
        color: COLOR_1,
    },
    notificationsSection: {
        marginBottom: 20
    },
    switchBlock: {
        marginBottom: 20,
        marginTop: -10
    },
    smallSwitchTitle: {
        fontSize: 10,
        fontFamily: 'GothamProMedium',
        color: COLOR_1
    },
    bigSwitch: {
        marginBottom: 30
    },
    bigSwitchTitle: {
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        color: COLOR_1,
    },
    nonEditableInput: {
        backgroundColor: COLOR_6
    },
    header: {
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        color: COLOR_1
    },
    headerStyle: {
        paddingVertical: 18
    },
    arrowStyle: {
        top: 20
    },
    block: {}
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
)(MyProfile)


export default Container;
