import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {connect} from "react-redux";
import {COLOR_1, COLOR_5, COLOR_6, WRAPPER_PADDINGS} from "../helpers/Variables";
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
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Уважаемый пользователь!</Text>
                    <Text style={styles.description}>Просим принять участие в исследовании общественного мнения участников
                        рынка контейнерных перевозок и ответить на несколько профессиональных вопросов. Ваше мнение важно
                        для нас!</Text>

                    {PollsList.map(poll => (
                        <AccordionItem
                            key={new Date() + Math.random()}
                            headerStyle={styles.headerStyle}
                            arrowStyle={styles.arrowStyle}
                            titleComponent={<Text style={styles.header}>{poll.title}</Text>}
                        >
                            <View style={styles.itemWrapper}>
                                <PollsItem optionsList={poll.options} />
                            </View>
                        </AccordionItem>
                    ))}
                </View>
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: WRAPPER_PADDINGS
    },
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
    header: {
        fontSize: 12,
        fontFamily: 'GothamProMedium',
        color: COLOR_1
    },
    headerStyle: {
        paddingVertical: 18
    },
    arrowStyle: {
        top: 20
    },
    itemWrapper: {
        borderBottomColor: COLOR_6,
        borderBottomWidth: 1,
        paddingLeft: 20
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
)(Polls)


export default Container;
