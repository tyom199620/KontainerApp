import React from 'react';
import {StyleSheet, View} from "react-native";
import {List} from "react-native-paper";
import {COLOR_1, COLOR_5, COLOR_6} from "../helpers/Variables";
import {ImageArrowDown, ImageArrowUp} from "../helpers/images";

class AccordionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded || false
        }
    }

    setExpanded = val => this.setState({expanded: val});

    render() {
        const {children, title, style, onPress, right, withoutBorder, titleStyle, titleTextStyle} = this.props;
        const {expanded} = this.state;

        return (
            <List.Accordion
                title={title}
                style={[styles.title, !expanded && !withoutBorder && styles.titleBorder, titleStyle]}
                titleStyle={[styles.titleText, titleTextStyle]}
                expanded={expanded}
                onPress={
                    typeof onPress === 'function' ?
                    onPress :
                    () => this.setExpanded(!expanded)
                }
                right={() => right ? right : (
                    expanded ? <ImageArrowUp /> : <ImageArrowDown />
                )}
            >
                <View style={[styles.container, style]}>
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
    },
});

export default AccordionItem;
