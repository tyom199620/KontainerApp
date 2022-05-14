import React from 'react';
import {StyleSheet} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import NavBar from "../includes/NavBar";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ['1 день', '2 день'],
            activeTab: '1 день'
        };
    }

    render() {
        const {route, navigation} = this.props;
        const {tabs, activeTab} = this.state;
        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: true,
                navigation,
            }}>
                <NavBar
                    onPress={tab => this.setState({activeTab: tab})}
                    tabs={tabs}
                    activeTab={activeTab}
                />
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({

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
)(Events)


export default Container;
