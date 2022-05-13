import React from 'react';
import {StyleSheet} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {route, navigation} = this.props;
        const {currentPage} = route.params;
        return (
            <Wrapper withContainer header={{
                currentPage,
                home: true,
                navigation,
            }}>

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
