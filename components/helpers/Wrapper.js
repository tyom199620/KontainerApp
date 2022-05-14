import React from 'react';
import {Dimensions, SafeAreaView} from "react-native";
import {StyleSheet, View, ScrollView} from "react-native";
import {WRAPPER_PADDINGS} from "./Variables";
import Header from "../includes/Header";
import {ImageBackGround} from "./images";
import Container from "./Container";

class Wrapper extends React.Component {
    render() {
        const {children, withImage, header, withContainer, footer} = this.props;

        return (
            <SafeAreaView style={styles.wrapper}>

                {withImage && <ImageBackGround style={styles.backgroundImage} width={Dimensions.get('window').width}/>}

                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={styles.container}>

                        {header && <Header{...header} />}

                        {withContainer ? (
                            <Container>
                                {children}
                            </Container>
                        ) : children}

                    </View>
                    {footer ? footer : null}
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#fff'
    },
    container: {
        paddingHorizontal: WRAPPER_PADDINGS
    },
    backgroundImage: {
        position: 'absolute',
        bottom: -100,
    }
});

export default Wrapper;
