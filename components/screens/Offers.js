import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import NavBar from "../includes/NavBar";
import Search from "../includes/Search";
import {ImageFavorite, ImageFilter, ImageOffersArrow, ImageRatingSmall, ImageSend} from "../helpers/images";
import FilterItem from "../includes/FilterItem";
import {SwipeListView} from "react-native-swipe-list-view";
import OffersList from "../../assets/data/offers";
import {COLOR_2, COLOR_5, COLOR_6, COLOR_8, COLOR_9} from "../helpers/Variables";

class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ['Все предложения', 'Избранное'],
            activeTab: 'Все предложения',
            secondaryTabs: ['Поиск КТК', 'Продажа КТК', 'Выдача КТК', 'Контейнерный сервис', 'Заявка на ТЭО'],
            activeSecondaryTab: 'Поиск КТК',
            filters: {
                ['Продажа КТК']: ['Город', 'Тип контейнера'],
                ['Поиск КТК']: ['Откуда', 'Куда', 'Тип контейнера'],
                ['Выдача КТК']: ['Откуда', 'Куда', 'Тип контейнера'],
                ['Контейнерный сервис']: ['Откуда', 'Куда', 'Тип контейнера'],
                ['Заявка на ТЭО']: ['Откуда', 'Куда', 'Тип контейнера'],
            },
            showFilters: false,
            searchValue: '',
            listViewData: Array(150)
                .fill("")
                .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
        };
    }

    renderItem = ({item}) => (
        <View style={styles.item}>
            <View style={styles.row}>
                <View style={styles.locationInfo}>
                    <Text style={styles.fromCity}>{item.from}</Text>
                    <ImageOffersArrow />
                    <Text style={styles.toCity}>{item.to}</Text>
                </View>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.type}>{item.date}</Text>
                </View>
                <TouchableOpacity>
                    <ImageFavorite />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.ratingBlock}>
                    <ImageRatingSmall />
                    <Text style={styles.rating}>{item.rating}</Text>
                    <Text style={styles.companyName}>{item.companyName}</Text>
                </View>
                <Text style={styles.dateAdded}>{item.dateAdded}</Text>
            </View>
        </View>
    )

    render() {
        const {route, navigation} = this.props;
        const {tabs, activeTab, secondaryTabs, activeSecondaryTab, filters, showFilters, searchValue} = this.state;
        const {currentPage} = route.params;
        return (
            <Wrapper withoutScrollView withContainer header={{
                currentPage,
                home: true,
                navigation
            }}>
                <NavBar
                    tabs={tabs}
                    activeTab={activeTab}
                    onPress={tab => this.setState({activeTab: tab})}
                />
                <NavBar
                    tabs={secondaryTabs}
                    activeTab={activeSecondaryTab}
                    onPress={tab => this.setState({activeSecondaryTab: tab})}
                    secondary
                />

                <View style={styles.searchRow}>
                    <Search
                        style={styles.search}
                        value={searchValue}
                        onChangeText={val => this.setState({searchValue: val})}
                    />
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={() => this.setState({showFilters: !showFilters})}
                    >
                        <ImageFilter />
                    </TouchableOpacity>
                </View>
                {showFilters && (
                    <View style={styles.filtersRow}>
                        {filters[activeSecondaryTab].map(option => (
                            <FilterItem
                                title={option}
                                options={[1982374, 23987462893, 28394789, 28368932]}
                                onSelect={option => console.log({option})}
                                key={Math.random()}
                            />
                        ))}
                    </View>
                )}


                <SwipeListView
                    data={OffersList}
                    renderItem={this.renderItem}
                    renderHiddenItem={ () => (
                        <TouchableOpacity
                            style={styles.hiddenItem}
                            onPress={() => navigation.navigate('SendOffer', {currentPage: 'Отправить предложение'})}
                        >
                            <ImageSend />
                            <View style={styles.hiddenItemTextBlock}>
                                <Text style={styles.hiddenItemText}>Отправить</Text>
                                <Text style={styles.hiddenItemText}>предложение</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    rightOpenValue={-85}
                    disableRightSwipe
                />


            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    searchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    search: {
        width: '90%'
    },
    filtersRow: {
        flexDirection: 'row',
    },
    item: {
        backgroundColor: COLOR_5,
        paddingVertical: 20,
        borderBottomColor: COLOR_6,
        borderBottomWidth: 1,
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
        fontFamily: 'GothamProRegular'
    },
    ratingBlock: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rating: {
        color: COLOR_9,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        marginLeft: 5,
        marginRight: 15
    },
    companyName: {
        color: COLOR_9,
        fontSize: 10,
        fontFamily: 'GothamProRegular'
    },
    dateAdded: {
        color: COLOR_9,
        fontSize: 10,
        fontFamily: 'GothamProRegular'
    },
    hiddenItem: {
        alignSelf: 'flex-end',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderLeftColor: COLOR_6,
        borderLeftWidth: 1,
        paddingLeft: 8,
        height: 90,

        position: 'absolute',
        right: 0,
        top: 20
    },
    hiddenItemTextBlock: {
        alignItems: 'center',
    },
    hiddenItemText: {
        color: '#000',
        fontSize: 9,
        fontFamily: 'GothamProRegular'
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
)(Offers)


export default Container;
