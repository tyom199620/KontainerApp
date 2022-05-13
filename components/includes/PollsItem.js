import React, {Component} from 'react';
import {Pressable, StyleSheet, View, Text} from "react-native";
import {COLOR_1, COLOR_3} from "../helpers/Variables";
import {connect} from "react-redux";
import MyCheckbox from "./MyCheckbox";
import MyButton from "./MyButton";

class PollsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: [],
            submitted: false,
        }
    }

    checkBoxPressed = (option, shouldDelete) => {
       /* let {checkedList} = this.state;

        if (shouldDelete) {
            checkedList = checkedList.filter(c => c.id !== option.id)
        } else {
            checkedList.push(option)
        }*/

    }

    submit = () => {
        this.setState({submitted: true})
    }

    render() {
        const {optionsList} = this.props;
        const {submitted} = this.state;

        return (
            submitted ? (
                <View>
                    {optionsList.map(option => {
                        const lineWidth = Math.floor(Math.random() * 100);
                        return <View key={Math.random()}>
                            <View style={styles.firstLine}>
                                <Text style={styles.percentage}>{lineWidth}%</Text>
                                <Text style={styles.title}>{option.key}</Text>
                            </View>
                            <View style={[styles.line, {width: `${lineWidth}%`}]}/>
                        </View>
                    })}
                    <Text style={styles.smallText}>{Math.floor(Math.random() * 1000)} голоса</Text>
                </View>
            ) : (
                <View>
                    {optionsList.map(option => (
                        <MyCheckbox
                            onPress={this.checkBoxPressed}
                            option={option}
                            key={Math.random()}
                        />
                    ))}
                    <MyButton onPress={this.submit} style={styles.button}>Отправить</MyButton>
                </View>
            )
        );
    }
}


const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
        marginTop: 18,
        alignSelf: 'center'
    },
    firstLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    percentage: {
        fontSize: 10,
        fontFamily: 'GothamProMedium',
        width: 30,
        marginRight: 20,
        color: COLOR_1
    },
    title: {
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        color: COLOR_1
    },
    line: {
        height: 4,
        borderRadius: 4,
        backgroundColor: COLOR_3,
        marginTop: 8,
        marginBottom: 20,
    },
    smallText: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_1,
        marginBottom: 20
    }
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
)(PollsItem)


export default Container;
