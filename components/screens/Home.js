import React from 'react';
import {StyleSheet, View} from "react-native";
import Wrapper from "../helpers/Wrapper";
import HomeMainButtons from "../includes/HomeMainButtons";
import HomeFooterButtons from "../includes/HomeFooterButtons";
import {ImageLogo} from "../helpers/images";

class Home extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <Wrapper
                withImage
                header={{
                    home: true,
                    navigation
                }}>
                <View style={styles.block}>
                    <View style={styles.logoView}>
                        <ImageLogo style={styles.logo}/>
                    </View>
                </View>
                <HomeMainButtons navigation={navigation}/>
                <HomeFooterButtons navigation={navigation}/>
            </Wrapper>
        );
    }
}

const styles = StyleSheet.create({
    block: {
        marginTop: 180
    },
    logoView: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 40
    },
    logo: {
        width: 120,
        height: 32,
    }
});

export default Home;
