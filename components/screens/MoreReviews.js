import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, TouchableOpacityComponent, FlatList} from "react-native";
import Wrapper from "../helpers/Wrapper";
import Reviews from "../../assets/data/reviews";
import ReviewItem from "../includes/ReviewItem";
import {connect} from "react-redux";
import {WRAPPER_PADDINGS} from "../helpers/Variables";

class MoreReviews extends React.Component {
    render() {
        const {route, navigation, toOrFrom} = this.props;
        const {currentPage} = route.params;

        return (
            <Wrapper withContainer withoutScrollView header={{
                currentPage,
                home: true,
                navigation
            }}>
                <View style={styles.wrapper}>
                    <FlatList
                        data={Reviews}
                        renderItem={({item}) => (
                            <ReviewItem toOrFrom={toOrFrom === 'to' ? 'на' : 'от'} review={item} />
                        )}
                    />
                </View>
            </Wrapper>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: WRAPPER_PADDINGS
    },
});

const mapStateToProps = (store) => ({
    //token: store.users.token
})

const mapDispatchToProps = {
    //setToken
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoreReviews)


export default Container;
