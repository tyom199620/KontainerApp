import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, TouchableOpacityComponent} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import NavBar from "../includes/NavBar";
import {COLOR_1, COLOR_2, COLOR_3, COLOR_5, COLOR_6, COLOR_8, COLOR_9, WRAPPER_PADDINGS} from "../helpers/Variables";
import {SwipeListView} from "react-native-swipe-list-view";
import OffersList from "../../assets/data/offers";
import {ImageDelete, ImageFadePart,} from "../helpers/images";
import Search from "../includes/Search";
import AddNew from "../includes/AddNew";
import ScrollableAccordionItem from "../includes/ScrollableAccordionItem";
import NewDialogModal from "../includes/NewDialogModal";

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ['Диалоги', 'Чаты'],
            activeTab: 'Диалоги',
            searchValue: '',
            expandedList: [],
            showNewDialogModal: false,
            companyName: '',
            userName: '',
        };
    }

    delete = item => {
        console.log('delete:', item)
    }

    renderItem = ({item, index}) => {
        const {expandedList} = this.state;
        const {navigation} = this.props;
        return (
            <ScrollableAccordionItem
                item={item}
                expandedList={expandedList}
                onArrowPress={() => {
                    expandedList[index] = !expandedList[index]
                    this.setState({expandedList})
                }}
                expanded={expandedList[index]}
                onPress={() => navigation.navigate('Chat', {currentPage: 'Диалог'})}
            />
        )
    }


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
        const {expandedList, showNewDialogModal, companyName, userName} = this.state;

        return (
            <Wrapper withContainer withoutScrollView header={{
                currentPage,
                home: true,
                navigation
            }}>
                <View style={styles.wrapper}>
                    <SwipeListView
                        data={OffersList}
                        renderItem={this.renderItem}
                        ListHeaderComponent={this.headerComponent()}
                        renderHiddenItem={({item, index}) =>
                            expandedList[index] ? (
                                    <View style={styles.hiddenWrapperBig}>
                                        <TouchableOpacity
                                            style={styles.hiddenItemBig}
                                            onPress={() => this.delete(item)}
                                        >
                                            <View style={styles.hiddenBlock}>
                                                <ImageDelete/>

                                                <View style={styles.hiddenItemTextBlock}>
                                                    <Text style={styles.hiddenItemText}>Удалить</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <View style={styles.hiddenWrapper}>
                                        <TouchableOpacity
                                            style={styles.hiddenItem}
                                            onPress={() => this.delete(item)}
                                        >
                                            <View style={styles.hiddenBlock}>
                                                <ImageDelete/>

                                                <View style={styles.hiddenItemTextBlock}>
                                                    <Text style={styles.hiddenItemText}>Удалить</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                        )}
                        rightOpenValue={-100}
                        disableRightSwipe
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        stickyHeaderIndices={[0]}
                        //onEndReachedThreshold={0}
                    />
                    <View style={styles.fadeBlock}>
                        <Image source={ImageFadePart} style={styles.fade}/>
                    </View>

                    <AddNew onPress={() => this.setState({showNewDialogModal: true})} />

                    <NewDialogModal
                        onSubmit={() => this.setState({showNewDialogModal: false, companyName: '', userName: ''})}
                        onCancel={() => this.setState({showNewDialogModal: false})}
                        isVisible={showNewDialogModal}
                        companyName={companyName}
                        setCompanyName={val => this.setState({companyName: val})}
                        userName={userName}
                        setUserName={val => this.setState({userName: val})}
                    />
                </View>
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
    },
    header: {
        backgroundColor: COLOR_5
    },
    searchRow: {
        paddingHorizontal: WRAPPER_PADDINGS,
        marginTop: -20
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
    hiddenWrapperBig: {
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
        paddingLeft: 14,
    },
    hiddenItemBig: {
        position: 'absolute',
        top: 70,
        right: 28,
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
)(Messages)


export default Container;
