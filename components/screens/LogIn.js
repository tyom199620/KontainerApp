import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {COLOR_1, COLOR_2, LOGIN_PAGE_PADDINGS} from "../helpers/Variables";
import MyInput from "../includes/MyInput";
import MyButton from "../includes/MyButton";
import RegistrationModal from "../includes/RegistrationModal";
import {connect} from "react-redux";
import {loginRequest} from "../../store/actions/users";
import ForgotPasswordModal from "../includes/ForgotPasswordModal";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            loginError: '',
            passwordError: '',
            showModal: false,
            showForgotPasswordModal: false,
            showPassword: false,
            emailForNewPassword: ''
        }
    }

    onLoginPress = () => {
        const {login, password} = this.state;

        if (!login) {
            this.setState({loginError: 'Заполните эту строку'})
            if (!password) {
                this.setState({passwordError: 'Заполните эту строку'})
                return
            }
            return
        }
        if (!password) {
            this.setState({passwordError: 'Заполните эту строку'})
            return
        }

        this.props.loginRequest({login, password})
    }

    setShowModal = val => this.setState({showModal: val});
    setShowPassword = val => this.setState({showPassword: val});

    onLoginChange = val => {
        const {loginError} = this.state;
        this.setState({login: val});

        if (loginError) this.setState({loginError: ''});
    }

    onPasswordChange = val => {
        const {passwordError} = this.state;
        this.setState({password: val});

        if (passwordError) this.setState({passwordError: ''});
    }

    submitEmailForNewPassword = () => {
        this.setState({showForgotPasswordModal: false, emailForNewPassword: ''})
    }

    render() {
        const {login, password, loginError, passwordError, showModal, showPassword, showForgotPasswordModal, emailForNewPassword} = this.state;

        return (
            <Wrapper withImage withPaddings>
                <View style={styles.block}>
                    <View style={styles.logoView}>
                    </View>
                    <MyInput
                        label={'Логин'}
                        autoCapitalize={'none'}
                        onChangeText={this.onLoginChange}
                        value={login}
                        error={[loginError]}
                    />
                    <MyInput
                        label={'Пароль'}
                        autoCapitalize={'none'}
                        secureTextEntry={!showPassword}
                        showEye={true}
                        style={!showPassword && styles.passwordInput}
                        textContentType={'password'}
                        onChangeText={this.onPasswordChange}
                        value={password}
                        onEyePressed={this.setShowPassword}
                        error={[passwordError]}
                    />
                    <View style={styles.buttonsView}>
                        <MyButton style={styles.loginButton} onPress={this.onLoginPress}>
                            Войти
                        </MyButton>
                        <TouchableOpacity onPress={() => this.setState({showForgotPasswordModal: true})}>
                            <Text style={styles.smallButton}>Забыли пароль?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({showModal: true}) }>
                            <Text style={styles.smallButton}>Регистрация</Text>
                        </TouchableOpacity>
                        <RegistrationModal showModal={showModal} setShowModal={this.setShowModal}/>
                        <ForgotPasswordModal
                            isVisible={showForgotPasswordModal}
                            onSubmit={this.submitEmailForNewPassword}
                            value={emailForNewPassword}
                            onChangeText={val => this.setState({emailForNewPassword: val})}
                            onCancel={() => this.setState({showForgotPasswordModal: false, emailForNewPassword: ''})}
                        />
                    </View>
                </View>
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    block: {
        marginTop: Dimensions.get('window').height * 20 / 100,
        paddingHorizontal: LOGIN_PAGE_PADDINGS,
    },
    logoView: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 40
    },
    logo: {
        width: 120,
        height: 32,
    },
    passwordInput: {
        color: COLOR_2,
        fontSize: 24,
        letterSpacing: 4,
        paddingTop: 0,
        paddingBottom: 0,
    },
    loginButton: {
        marginVertical: Dimensions.get('window').height * 5 / 100
    },
    buttonsView: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    smallButton: {
        color: COLOR_1,
        marginBottom: 20
    }
});

const mapStateToProps = (store) => ({})

const mapDispatchToProps = {
    loginRequest
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)


export default Container;
