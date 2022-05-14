import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {ImageFavorite} from "../helpers/images";
import {COLOR_1} from "../helpers/Variables";

class ParticipantItem extends Component {
    render() {
        const {imageUri, companyName, city, doingProfile, navigation, id} = this.props;
        return (
            <TouchableOpacity
                style={styles.wrapper}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('SingleParticipant', {currentPage: 'Страница участника', id})}
            >
                <View style={styles.leftPart}>
                    <Image
                        source={{uri: imageUri}}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.name}>{companyName}</Text>
                        <Text style={styles.city}>{city}</Text>
                        <Text style={styles.prof}>{doingProfile}</Text>
                    </View>
                </View>
                <TouchableOpacity styles={styles.favImgBlock}>
                    <ImageFavorite styles={styles.favImg} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10
    },
    leftPart: {
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 26
    },
    info: {
        paddingVertical: 10,
        justifyContent: 'space-evenly',
    },
    name: {
        fontSize: 12,
        fontFamily: 'GothamProRegular',
        color: COLOR_1
    },
    city: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_1
    },
    prof: {
        fontSize: 9,
        fontFamily: 'GothamProMedium',
        color: COLOR_1
    },
    favImgBlock: {
    },
    favImg: {
    }
})

export default ParticipantItem;
