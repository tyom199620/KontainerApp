import React from 'react';
import {StyleSheet, View} from "react-native";
import {ImageExit, ImageHelp, ImageUser} from "../helpers/images";
import {COLOR_1} from "../helpers/Variables";
import HomeFooterButton from "./HomeFooterButton";
import {logoutRequest} from "../../store/actions/users";
import {connect} from "react-redux";
import LogOutModal from "./LogOutModal";

class HomeFooterButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogOutModal: false
        }
    }

    render() {
        const {navigation} = this.props;
        const {showLogOutModal} = this.state;
        return (
            <View style={styles.wrapper}>
                <HomeFooterButton SvgImage={ImageUser} text={'Мой профиль'}
                                  onPress={() => navigation.navigate('MyProfile', {currentPage: 'Мой профиль'})}/>
                <HomeFooterButton SvgImage={ImageHelp} text={'Помощь'}
                                  onPress={() => navigation.navigate('Help', {currentPage: 'Помощь'})}/>
                <HomeFooterButton SvgImage={ImageExit} text={'Выход'} onPress={() => this.setState({showLogOutModal: true})}/>
                <LogOutModal
                    onSubmit={() => this.props.logoutRequest()}
                    onCancel={() => this.setState({showLogOutModal: false})}
                    isVisible={showLogOutModal}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 50,
    },
    block: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    image: {
        height: 50,
        resizeMode: 'contain'
    },
    text: {
        marginBottom: 16,
        marginTop: 16,
        fontSize: 10,
        fontFamily: 'GothamProMedium',
        color: COLOR_1
    }
});

const mapStateToProps = (store) => ({})

const mapDispatchToProps = {
    logoutRequest
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeFooterButtons)


export default Container;
