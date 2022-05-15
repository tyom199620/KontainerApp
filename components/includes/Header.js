import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {COLOR_1, COLOR_5, WRAPPER_PADDINGS} from "../helpers/Variables";
import {ImageBackArrow, ImageHomeIcon, ImageNotificationsIcon, ImageSave} from "../helpers/images";

class Header extends React.Component {
    render() {
        const {currentPage, home, navigation, onSavePress} = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.leftPart}>
                    {currentPage && (
                        <>
                            <TouchableOpacity onPress={navigation.goBack} style={styles.imageView}>
                                <ImageBackArrow style={styles.image}/>
                            </TouchableOpacity>
                            <Text style={styles.currentPage}>{currentPage}</Text>
                        </>
                    )}
                </View>
                <View style={styles.rightPart}>
                    {home ? (
                        <>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeImageView}>
                                <ImageHomeIcon style={styles.homeImage}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}
                                              style={styles.notificationImageView}>
                                <ImageNotificationsIcon style={styles.notificationImage}/>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity style={styles.saveIconView} onPress={onSavePress}>
                            <ImageSave style={styles.saveIcon} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        paddingTop: 60,
        width: '100%',
        paddingHorizontal: WRAPPER_PADDINGS,
        backgroundColor: COLOR_5,
        zIndex: 2,
        paddingBottom: 14

    },
    imageView: {
        marginRight: 20
    },
    image: {
        width: 22,
        height: 20,
    },
    currentPage: {
        fontFamily: 'GothamProRegular',
        fontSize: 14,
        color: COLOR_1
    },
    leftPart: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightPart: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    homeImageView: {
        marginRight: 20
    },
    homeImage: {
        width: 22,
        height: 22,
    },
    notificationImageView: {},
    notificationImage: {
        width: 19,
        height: 22,
    },
    saveIconView: {},
    saveIcon: {}
})

export default Header;
