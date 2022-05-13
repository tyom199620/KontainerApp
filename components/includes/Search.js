import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import {COLOR_6} from "../helpers/Variables";
import MyInput from "./MyInput";
import {ImageSearch} from "../helpers/images";

class Search extends Component {
    render() {
        const {style} = this.props;
        return (
            <View style={style}>
                <MyInput
                    style={styles.input}
                />
                <ImageSearch style={styles.search} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: COLOR_6,
        paddingLeft: 50
    },
    search: {
        position: 'absolute',
        left: 14,
        top: 36
    }
});

export default Search;
