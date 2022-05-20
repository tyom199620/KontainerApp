import React from 'react';
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import Wrapper from "../helpers/Wrapper";
import MessagesList from "../../assets/data/messages";
import {COLOR_1, COLOR_10, COLOR_2, COLOR_5, COLOR_6, COLOR_8, COLOR_9, WRAPPER_PADDINGS} from "../helpers/Variables";
import Search from "../includes/Search";
import MyInput from "../includes/MyInput";
import {ImageAttach, ImageLikeSmall, ImageReply, ImageSend} from "../helpers/images";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            inputValue: '',
            inputBottom: 6,
            inputHeight: 40
        }
    }

    sendMessage = () => {
        const {inputValue} = this.state;
        console.log({inputValue});
        this.setState({inputValue: '', inputHeight: 40})
    }

    footerComponent = () => {
        const {inputValue, inputBottom, inputHeight} = this.state;
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.attach}>
                    <ImageAttach/>
                </TouchableOpacity>
                <View style={styles.inputView}>
                    <MyInput
                        value={inputValue}
                        onChangeText={val => this.setState({inputValue: val})}
                        style={[styles.input, {height: inputHeight <= 20 ? 30 : inputHeight <= 80 ? inputHeight : 80}]}
                        maxHeight={80}
                        multiline
                        onContentSizeChange={(event) => {
                            this.setState({
                                inputBottom: this.countInputBottom(event.nativeEvent.contentSize.height),
                                inputHeight: event.nativeEvent.contentSize.height
                            })
                        }}
                        placeholder={'Напишите сообщение...'}
                        sendComponent={inputValue ? <TouchableOpacity
                            style={[styles.send, {bottom: this.countSendBottom(inputBottom)}]}
                            onPress={this.sendMessage}
                        >
                            <ImageSend/>
                        </TouchableOpacity> : null}
                    />
                </View>

            </View>
        )
    }

    headerComponent = () => {
        const {searchValue} = this.state;
        return (
            <View style={styles.headerComponent}>
                <Text style={styles.header}>Поиск КТК Москва-Новосибирск, 40HQ</Text>
                <View style={styles.searchRow}>
                    <Search
                        style={styles.search}
                        value={searchValue}
                        onChangeText={val => this.setState({searchValue: val})}
                    />
                </View>
            </View>
        )
    }

    renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Image style={styles.photo} source={{uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}} />
                <View style={styles.messagesList}>
                    <View style={styles.messageBlock}>
                        {index === 0 && (
                            <View style={styles.forwardedBlock}>
                                <View style={styles.nameBlock}>
                                    <Text style={styles.name}>Петренко А.А.</Text>
                                    <Text style={styles.companyName}>(ТрансКорпАзия)</Text>
                                </View>
                                <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.forwardedMessage}>Значимость
                                    этих проблем настолько очевидна, что
                                    консультация с широким активом требуют от нас анализа форм развития. </Text>
                                <View style={styles.forwardIcon}>
                                    <ImageReply />
                                </View>
                            </View>
                        )}
                        <View style={styles.row}>
                            <View style={styles.nameBlock}>
                                <Text style={styles.name}>Петренко А.А.</Text>
                                <Text style={styles.companyName}>(ТрансКорпАзия)</Text>
                            </View>
                            <View style={styles.timeBlock}>
                                <Text style={styles.time}>15:30</Text>
                                <TouchableOpacity>
                                    <ImageLikeSmall/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.message}>
                            С другой стороны дальнейшее развитие различных форм деятельности обеспечивает широкому кругу
                            (специалистов) участие в формировании модели развития. С другой стороны укрепление и развитие
                            структуры требуют определения и уточнения систем массового участия.
                        </Text>
                    </View>
                    <View style={styles.messageBlock}>
                        {index === 0 && (
                            <View style={styles.forwardedBlock}>
                                <View style={styles.nameBlock}>
                                    <Text style={styles.name}>Петренко А.А.</Text>
                                    <Text style={styles.companyName}>(ТрансКорпАзия)</Text>
                                </View>
                                <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.forwardedMessage}>Значимость
                                    этих проблем настолько очевидна, что
                                    консультация с широким активом требуют от нас анализа форм развития. </Text>
                                <View style={styles.forwardIcon}>
                                    <ImageReply />
                                </View>
                            </View>
                        )}
                        <View style={styles.row}>
                            <View style={styles.nameBlock}>
                                <Text style={styles.name}>Петренко А.А.</Text>
                                <Text style={styles.companyName}>(ТрансКорпАзия)</Text>
                            </View>
                            <View style={styles.timeBlock}>
                                <Text style={styles.time}>15:30</Text>
                                <TouchableOpacity>
                                    <ImageLikeSmall/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.message}>
                            С другой стороны дальнейшее развитие различных форм деятельности обеспечивает широкому кругу
                            (специалистов) участие в формировании модели развития. С другой стороны укрепление и развитие
                            структуры требуют определения и уточнения систем массового участия.
                        </Text>
                    </View>
                    <View style={styles.triangle} />
                </View>
            </View>
        )
    }

    countInputBottom = height => {
        const lines = Math.floor((Math.round(height) - 26) / 14);
        return lines < 5 ? lines * 8 : 42;
    }

    countSendBottom = inputBottom => {
        const lines = Math.floor((inputBottom / 10));
        if (!lines) return 5;
        else if (lines < 5) return lines * 8;
        else return 40
    }

    render() {
        const {navigation, route} = this.props;
        const {currentPage} = route.params;

        return (
            <Wrapper
                withoutScrollView
                withContainer
                header={{
                    currentPage,
                    home: true,
                    navigation
                }}
            >
                <View style={styles.listWrapper}>
                    <FlatList
                        data={MessagesList}
                        renderItem={this.renderItem}
                        ListHeaderComponent={this.headerComponent()}
                        stickyHeaderIndices={[0]}
                        initialScrollIndex={MessagesList.length - 1}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                {this.footerComponent()}

            </Wrapper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: WRAPPER_PADDINGS
    },
    headerComponent: {
        backgroundColor: COLOR_5
    },
    header: {
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        color: COLOR_1,
        paddingHorizontal: WRAPPER_PADDINGS,
        marginTop: 20
    },
    searchRow: {
        paddingHorizontal: WRAPPER_PADDINGS,
    },
    listWrapper: {
        height: Dimensions.get('window').height - 150
    },
    item: {
        marginBottom: 20,
        paddingHorizontal: WRAPPER_PADDINGS,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    footer: {
        paddingHorizontal: WRAPPER_PADDINGS,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Dimensions.get('window').height * 8 / 100
    },
    inputView: {
        width: '90%',
    },
    input: {
        height: 40,
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
    },
    send: {
        position: 'absolute',
        zIndex: 2,
        right: 16,
        bottom: 12
    },
    triangle: {
        width: 10,
        height: 10,
        position: "absolute",
        bottom: 0,
        left: -9,
        borderLeftWidth: 10,
        borderLeftColor: "transparent",
        borderRightWidth: 10,
        borderRightColor: "transparent",
        borderBottomWidth: 10,
        borderBottomColor: COLOR_10
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10
    },
    messagesList: {
        width: '82%',
    },
    messageBlock: {
        backgroundColor: COLOR_10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10
    },
    forwardedBlock: {
        paddingLeft: 20,
        marginBottom: 20
    },
    forwardIcon: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    nameBlock: {
        flexDirection: 'row',
        marginBottom: 7
    },
    name: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_1,
        marginRight: 5
    },
    companyName: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_9,
    },
    forwardedMessage: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_9,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeBlock: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_9,
        marginRight: 8
    },
    message: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_9,
        lineHeight: 11
    },
    attach: {
        marginTop: 11
    }
});

export default Chat;
