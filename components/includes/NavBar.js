import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {COLOR_1, COLOR_2} from "../helpers/Variables";

class NavBar extends Component {
    render() {
        const {tabs, activeTab, onPress} = this.props;
        return (
            <View style={styles.wrapper}>
                {tabs.map(tab => (
                    <TouchableOpacity
                        activeOpacity={0.3}
                        style={styles.block}
                        onPress={() => onPress(tab)}
                        key={tab}
                    >
                        <Text style={styles.text}>{tab}</Text>
                        {activeTab === tab && <View style={styles.line}/>}
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginTop: 20
    },
    block: {
        marginRight: 30
    },
    text: {
        fontFamily: 'GothamProMedium',
        fontSize: 12,
        color: COLOR_1,
        marginBottom: 7
    },
    line: {
        width: '100%',
        height: 3,
        borderRadius: 4,
        backgroundColor: COLOR_2
    }
});

export default NavBar;
