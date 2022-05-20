import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback} from "react-native";
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
        const {title, onSelect, options, top} = this.props
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

                <Modal
                    isVisible={expanded}
                    transparent={true}
                    animationIn={'fadeInDown'}
                    animationOut={'fadeOutUp'}
                    onRequestClose={() => this.setState({expanded: false})}
                    hardwareAccelerated={true}
                    style={styles.modal}
                    onBackdropPress={() => this.setState({expanded: false})}
                    backdropOpacity={0}
                    animationInTiming={100}
                    animationOutTiming={100}
                >
                    <View style={[styles.showPart, {top}]}>
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
                </Modal>
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
        width: '70%',
        left: 6,
        zIndex: 2,
        borderWidth: 1,
        borderColor: COLOR_1,
        borderRadius: 10,
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
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
