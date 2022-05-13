import React from 'react';
import {StyleSheet, Text} from "react-native";
import Wrapper from "../helpers/Wrapper";
import {List} from 'react-native-paper';
import Questions from "../../assets/data/questions";
import HelpFooter from "../includes/HelpFooter";
import AccordionItem from "../includes/AccordionItem";
import {COLOR_5, COLOR_6} from "../helpers/Variables";
import {ImageArrowRight} from "../helpers/images";

class Help extends React.Component {
    render() {
        const {navigation, route} = this.props;
        const {currentPage} = route.params;

        return (
            <Wrapper
                withContainer
                header={{
                    currentPage,
                    home: true,
                    navigation
                }}
                footer={<HelpFooter />}
            >
                <List.Section>

                    {Questions.map(question => (
                        <AccordionItem
                            style={styles.item}
                            key={new Date() + Math.random()}
                            title={question.title}
                        >
                            <Text style={styles.text}>{question.question}</Text>
                        </AccordionItem>
                    ))}

                    <AccordionItem
                        title={'Пользовательское соглашение'}
                        onPress={() => {}}
                        right={<ImageArrowRight style={styles.arrowRight} />}
                    />

                </List.Section>
            </Wrapper>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLOR_5,
        borderBottomWidth: 2,
        borderBottomColor: COLOR_6,
    },
    text: {
        fontSize: 11,
        fontFamily: 'GothamProRegular',
        lineHeight: 14,
        marginTop: -20,
        marginBottom: 20
    },
    arrowRight: {
        marginRight: 3
    }
});

export default Help;
