import React from 'react';
import {StyleSheet, Text} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import {COLOR_1, COLOR_5, COLOR_6} from "../helpers/Variables";
import PollsList from "../../assets/data/polls";
import AccordionItem from "../includes/AccordionItem";
import PollsItem from "../includes/PollsItem";

class Polls extends React.Component {
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
                navigation
            }}>
                <Text style={styles.title}>Уважаемый пользователь!</Text>
                <Text style={styles.description}>Просим принять участие в исследовании общественного мнения участников
                    рынка контейнерных перевозок и ответить на несколько профессиональных вопросов. Ваше мнение важно
                    для нас!</Text>

                {PollsList.map(poll => (
                    <AccordionItem
                        style={styles.item}
                        key={new Date() + Math.random()}
                        title={poll.title}

                    >
                        <PollsItem optionsList={poll.options} />
                    </AccordionItem>
                ))}
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        color: COLOR_1,
        fontFamily: 'GothamProMedium',
        fontSize: 14,
        marginBottom: 26,
        marginTop: 30,
    },
    description: {
        color: COLOR_1,
        fontFamily: 'GothamProRegular',
        fontSize: 12,
        marginBottom: 20,
        lineHeight: 14
    },
    item: {
        backgroundColor: COLOR_5,
        borderBottomWidth: 2,
        borderBottomColor: COLOR_6,
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
)(Polls)


export default Container;
