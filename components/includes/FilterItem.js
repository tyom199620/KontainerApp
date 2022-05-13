import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {View, TouchableOpacity, Text} from "react-native";
import {ImageArrowSmall, ImageArrowSmallUp} from "../helpers/images";
import Modal from "react-native-modal";
import {COLOR_1, COLOR_5, COLOR_6, COLOR_7, COLOR_9} from "../helpers/Variables";

class FilterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
    }


    render() {
        const {title, onSelect, options} = this.props
        const {expanded} = this.state
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.3}
                    onPress={() => this.setState({expanded: !expanded})}
                    style={styles.wrapper}
                >
                    <Text style={styles.title}>{title}</Text>
                    {expanded ? <ImageArrowSmallUp /> : <ImageArrowSmall /> }
                </TouchableOpacity>

                {expanded && (
                    <View style={styles.showPart}>
                        {options.map(option => (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => {
                                    this.setState({expanded: false})
                                    onSelect(option)
                                }}
                                style={styles.optionBlock}
                                key={option}
                            >
                                <Text style={styles.option}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 25
    },
    title: {
        color: COLOR_1,
        fontFamily: 'GothamProMedium',
        fontSize: 10,
        marginRight: 10
    },
    showPart: {
        position: 'absolute',
        backgroundColor: COLOR_5,
        paddingHorizontal: 8,
        paddingVertical: 20,
        top: 20,
        zIndex: 2,
        borderLeftWidth: 1,
        borderLeftColor: COLOR_9,
        borderRightWidth: 1,
        borderRightColor: COLOR_9,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_9,
    },
    optionBlock: {
        marginBottom: 18
    },
    option: {
        color: COLOR_1,
        fontFamily: 'GothamProMedium',
        fontSize: 12,

    },
})

export default FilterItem;
