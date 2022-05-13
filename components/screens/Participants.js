import React from 'react';
import {StyleSheet, View, TouchableOpacity} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import NavBar from "../includes/NavBar";
import Search from "../includes/Search";
import {ImageFilter} from "../helpers/images";
import FilterItem from "../includes/FilterItem";
import ParticipantItem from "../includes/ParticipantItem";

class Participants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ['Все', 'Избранное'],
            activeTab: 'Все',
            searchValue: '',
            showFilters: false,
            doingProfile: '',
            city: '',
        };
    }

    render() {
        const {route, navigation} = this.props;
        const {tabs, activeTab, searchValue, showFilters} = this.state;
        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: true,
                navigation
            }}>
                <NavBar
                    onPress={tab => this.setState({activeTab: tab})}
                    tabs={tabs}
                    activeTab={activeTab}
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
                        <FilterItem
                            title={'Профиль деятельности'}
                            options={[1982374, 23987462893, 28394789, 28368932]}
                            onSelect={option => this.setState({doingProfile: option})}
                        />
                        <FilterItem
                            title={'Город'}
                            options={[1982374, 23987462893, 28394789, 28368932]}
                            onSelect={option => this.setState({city: option})}
                        />
                    </View>
                )}
                <ParticipantItem
                    imageUri={'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}
                    companyName={'Company Name'}
                    city={'Russia, Moscow'}
                    doingProfile={'operator KP'}
                />
                <ParticipantItem
                    imageUri={'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}
                    companyName={'Company Name'}
                    city={'Russia, Moscow'}
                    doingProfile={'operator KP'}
                />
                <ParticipantItem
                    imageUri={'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}
                    companyName={'Company Name'}
                    city={'Russia, Moscow'}
                    doingProfile={'operator KP'}
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
)(Participants)


export default Container;
