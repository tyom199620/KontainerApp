import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, TouchableOpacityComponent} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import NavBar from "../includes/NavBar";
import {COLOR_1, COLOR_2, COLOR_3, COLOR_5, COLOR_6, COLOR_8, COLOR_9, WRAPPER_PADDINGS} from "../helpers/Variables";
import {SwipeListView} from "react-native-swipe-list-view";
import OffersList from "../../assets/data/offers";
import {
    ImageAddNew,
    ImageBlankApplications,
    ImageEdit,
    ImageFadePart,
    ImageOffersArrow,
    ImageSend
} from "../helpers/images";
import Search from "../includes/Search";
import AddNew from "../includes/AddNew";

class MyApplications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ['В работе', 'Черновик', 'Архив'],
            activeTab: 'В работе',
            searchValue: ''
        };
    }

    renderItem = ({item, index}) => (
        <View style={styles.item}>
            <View style={styles.row}>
                <Text style={styles.number}>№83</Text>
                <Text style={styles.date}>10.04.2022</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.leftBlock}>
                    <Text style={styles.type}>Поиск КТК</Text>
                    <Text style={styles.type2}>Тип КТК: 20</Text>
                </View>
                <View style={styles.rightBlock}>
                    <View style={styles.locationInfo}>
                        <Text style={styles.fromCity}>Москва</Text>
                        <ImageOffersArrow/>
                        <Text style={styles.toCity}>Новосибирск</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.quantity}>Количество: 3</Text>
                        <Text style={styles.priceText}>Цена:</Text>
                        <Text style={styles.price}>по запросу</Text>
                    </View>
                </View>
            </View>
            {index % 2 === 0 && (
                <View style={styles.commentBlock}>
                    <Text style={styles.commentHeader}>Комментарий:</Text>
                    <Text style={styles.commentText}>Повседневная практика показывает, что начало повседневной работы по
                        формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании позиций,
                        занимаемых участниками в отношении поставленных задач.</Text>
                </View>
            )}
        </View>
    )

    headerComponent = () => {
        const {tabs, activeTab, searchValue} = this.state;

        return (
            <View style={styles.header}>
                <NavBar tabs={tabs} activeTab={activeTab} onPress={tab => this.setState({activeTab: tab})}/>
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

    render() {
        const {route, navigation} = this.props;
        const {currentPage} = route.params;
        const {tabs, activeTab} = this.state;

        return (
            <Wrapper withContainer withoutScrollView header={{
                currentPage,
                home: true,
                navigation
            }}>
                {activeTab === 'Черновик' ? (
                    <View style={styles.wrapper}>
                        <SwipeListView
                            data={OffersList}
                            renderItem={this.renderItem}
                            ListHeaderComponent={this.headerComponent()}
                            renderHiddenItem={() => (
                                <View style={styles.hiddenWrapper}>
                                    <TouchableOpacity
                                        style={styles.hiddenItem}
                                        onPress={() => navigation.navigate('EditApplication', {currentPage: 'Редактирование заявки'})}
                                    >
                                        <View style={styles.hiddenBlock}>
                                            <ImageEdit/>

                                            <View style={styles.hiddenItemTextBlock}>
                                                <Text style={styles.hiddenItemText}>Редактировать</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            rightOpenValue={-112}
                            disableRightSwipe
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{flexGrow: 1}}
                            stickyHeaderIndices={[0]}
                        />
                        <View style={styles.fadeBlock}>
                            <Image source={ImageFadePart} style={styles.fade}/>
                        </View>
                    </View>
                ) : (
                    <View style={styles.wrapper}>
                        <NavBar tabs={tabs} activeTab={activeTab} onPress={tab => this.setState({activeTab: tab})}/>
                        <View style={styles.blankTextBlock}>
                            <Text style={styles.blankText}>Здесь будут ваши заявки.</Text>
                            <Text style={styles.blankText}>Нажмите на «+» чтобы</Text>
                            <Text style={styles.blankText}>добавить заявку</Text>
                        </View>
                        <View style={styles.blankImage}>
                            <ImageBlankApplications />
                        </View>
                    </View>
                )}

                <AddNew onPress={() => navigation.navigate('CreatingApplication', {currentPage: 'Создание новой заявки'})} />

            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        height: '100%'
    },
    header: {
        backgroundColor: COLOR_5
    },
    searchRow: {
        paddingHorizontal: WRAPPER_PADDINGS,
        marginTop: -20
    },
    item: {
        backgroundColor: COLOR_5,
        paddingVertical: 20,
        borderBottomColor: COLOR_6,
        borderBottomWidth: 1,
        paddingHorizontal: WRAPPER_PADDINGS,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    number: {
        marginRight: 20,
        color: COLOR_5,
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        paddingVertical: 7,
        paddingHorizontal: 8,
        backgroundColor: COLOR_3,
        borderRadius: 10
    },
    date: {
        color: COLOR_9,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
    },
    leftBlock: {
        marginRight: 20,
        height: 50,
        justifyContent: 'space-between',
    },
    type: {
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
    },
    type2: {
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
    },
    rightBlock: {
        height: 50,
        justifyContent: 'space-between',
    },
    locationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
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
    quantity: {
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        marginRight: 24
    },
    priceText: {
        color: COLOR_8,
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        marginRight: 8
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
    fadeBlock: {
        height: '100%',
        width: WRAPPER_PADDINGS,
        position: 'absolute',
        zIndex: 2,
        top: 150,
        left: 0,
    },
    fade: {
        width: '100%',
        height: '100%',
    },
    hiddenWrapper: {
        paddingVertical: 16,
        position: 'absolute',
        right: 0,
        top: 0,
        paddingRight: WRAPPER_PADDINGS,
        height: '100%',
    },
    hiddenItem: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderLeftColor: COLOR_6,
        borderLeftWidth: 1,
        height: '100%',
        paddingLeft: 8,
    },
    hiddenBlock: {
        alignItems: 'center',
    },
    hiddenItemTextBlock: {
        alignItems: 'center',
        marginTop: 10
    },
    hiddenItemText: {
        color: '#000',
        fontSize: 9,
        fontFamily: 'GothamProRegular',
    },
    commentBlock: {
        marginTop: 8
    },
    commentHeader: {
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProMedium',
        marginBottom: 8
    },
    commentText: {
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        lineHeight: 11
    },
    blankTextBlock: {
        marginTop: 70
    },
    blankText: {
        alignSelf: 'center',
        marginBottom: 10,
        color: COLOR_1,
        fontFamily: 'GothamProRegular',
        fontSize: 14
    },
    blankImage: {
        alignSelf: 'center',
        marginTop: 50
    },
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
)(MyApplications)


export default Container;
