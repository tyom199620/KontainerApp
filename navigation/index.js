import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {connect} from "react-redux";
import LogOutNavigation from "./LogOutNavigation";
import MainNavigation from "./MainNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken } from "../store/actions/users";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
        }
    }

    componentDidMount() {
        (async () => {
            const token = await AsyncStorage.getItem('token');
            await this.props.setToken(token);

            await this.setState({ready: true});
        })()
    }


    render() {
        const {token} = this.props;
        const {ready} = this.state;

        if (!ready) {
            return null;
        }
        return (
            <NavigationContainer>
                {token ? <MainNavigation/> : <LogOutNavigation/>}
            </NavigationContainer>
        );
    }
}


const mapStateToProps = (store) => ({
    token: store.users.token
})

const mapDispatchToProps = {
    setToken
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)


export default Container;
