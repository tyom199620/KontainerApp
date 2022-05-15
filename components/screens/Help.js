import React from 'react';
import {StyleSheet, Text,View} from "react-native";
import Wrapper from "../helpers/Wrapper";
import Questions from "../../assets/data/questions";
import HelpFooter from "../includes/HelpFooter";
import AccordionItem from "../includes/AccordionItem";
import {COLOR_1, COLOR_5, COLOR_6, WRAPPER_PADDINGS} from "../helpers/Variables";
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
                <View style={styles.wrapper}>
                    {Questions.map(question => (
                        <AccordionItem
                            key={new Date() + Math.random()}
                            headerStyle={styles.headerStyle}
                            arrowStyle={styles.arrowStyle}
                            titleComponent={<Text style={styles.header}>{question.title}</Text>}
                        >
                            <Text style={styles.text}>{question.question}</Text>
                        </AccordionItem>
                    ))}

                    <AccordionItem
                        wrapperStyle={styles.wrapperStyle}
                        headerStyle={{...styles.headerStyle, borderBottomWidth: 0}}
                        arrowStyle={styles.arrowStyle}
                        arrowComponent={<ImageArrowRight style={styles.arrowRight} />}
                        titleComponent={<Text style={styles.header}>Пользовательское соглашение</Text>}
                        onPress={() => {}}
                    />
                </View>
            </Wrapper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: WRAPPER_PADDINGS
    },
    text: {
        fontSize: 11,
        fontFamily: 'GothamProRegular',
        lineHeight: 14,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_6,
        paddingBottom: 20
    },
    arrowRight: {
        marginRight: 3
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
    }
});

export default Help;
