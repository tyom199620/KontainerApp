import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Wrapper from "../helpers/Wrapper";
import MessagesList from "../../assets/data/messages";
import HelpFooter from "../includes/HelpFooter";
import {COLOR_1, COLOR_5, COLOR_6, COLOR_8, WRAPPER_PADDINGS} from "../helpers/Variables";
import Search from "../includes/Search";
import MyInput from "../includes/MyInput";
import {ImageAttach} from "../helpers/images";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            inputValue: ''
        }
    }

    footerComponent = () => {
        const {inputValue} = this.state;
        return (
            <View style={styles.footer}>
                <TouchableOpacity>
                    <ImageAttach />
                </TouchableOpacity>
                <View style={styles.inputView}>
                    <MyInput
                        value={inputValue}
                        onChangeText={val => this.setState({inputValue: val})}
                        style={styles.input}
                        multiline
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
                <Text>{index}</Text>
            </View>
        )
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
        paddingHorizontal: WRAPPER_PADDINGS
    },
    footer: {
        paddingHorizontal: WRAPPER_PADDINGS,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputView: {
        width: '90%'
    },
    input: {
        height: undefined,
        paddingTop: 8,
        paddingBottom: 6,
        color: COLOR_8,
        fontSize: 10,
        fontFamily: 'GothamProRegular',
    }
});

export default Chat;
