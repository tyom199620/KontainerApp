import React from 'react';
import {StyleSheet, View} from "react-native";
import {List} from "react-native-paper";
import {COLOR_1, COLOR_5, COLOR_6} from "../helpers/Variables";
import {ImageArrowDown, ImageArrowUp} from "../helpers/images";

class AccordionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        }
    }

    setExpanded = val => this.setState({expanded: val});

    render() {
        const {children, title} = this.props;
        const {expanded} = this.state;

        return (
            <List.Accordion
                title={title}
                style={[styles.title, !expanded && styles.titleBorder]}
                titleStyle={styles.titleText}
                expanded={expanded}
                onPress={() => this.setExpanded(!expanded)}
                right={() => expanded ? <ImageArrowUp style={styles.arrow}/> : <ImageArrowDown style={styles.arrow}/>}
            >
                <View style={styles.container}>
                    {children}
                </View>
            </List.Accordion>
        )

    }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: COLOR_5,
    },
    titleBorder: {
        borderBottomWidth: 2,
        borderBottomColor: COLOR_6
    },
    titleText: {
        color: COLOR_1,
        fontFamily: 'GothamProMedium',
        fontSize: 12,
        marginLeft: -14
    },
    arrow: {
        height: 14,
        width: 14,
        resizeMode: 'contain'
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20
    }
});

export default AccordionItem;
