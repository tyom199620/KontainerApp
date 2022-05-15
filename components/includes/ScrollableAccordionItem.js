import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLOR_1, COLOR_5, COLOR_6, COLOR_9, WRAPPER_PADDINGS} from "../helpers/Variables";
import {ImageArrowDown, ImageArrowUp} from "../helpers/images";

class ScrollableAccordionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded || false
        }
    }

    setExpanded = val => this.setState({expanded: val});

    render() {
        const {
            children,
            titleComponent,
            onPress,
            arrowComponent,
            wrapperStyle,
            headerStyle,
            arrowStyle,
            childrenStyle,
            item,
            onArrowPress,
            expanded
        } = this.props;
        //const {expanded} = this.state;

        return (
            <View style={[styles.wrapper, wrapperStyle]}>
                <TouchableOpacity
                    style={[styles.header, !expanded && styles.headerBorder, headerStyle]}
                    onPress={onPress}
                    activeOpacity={0.5}
                >
                    <View style={styles.item}>
                        <Image style={styles.photo} source={{uri: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'}}></Image>
                        <View style={styles.block}>
                            <View style={styles.row}>
                                <View style={styles.nameRow}>
                                    <Text style={styles.personName}>Иванов П.С.</Text>
                                    <Text style={styles.companyName}>(CompanyName)</Text>
                                </View>
                                <Text style={styles.time}>15:36</Text>
                            </View>
                            <Text style={styles.chatName} ellipsizeMode={'tail'} numberOfLines={1}>Поиск КТК Москва-Новосибирск, 40HQasdsadadasdsadadsadadaas</Text>

                            {expanded && (
                                <Text style={styles.expandedText} ellipsizeMode={'tail'} numberOfLines={4}>
                                    Таким образом постоянное
                                    информационно-пропагандистское обеспечение
                                    нашей деятельности представляет собой интересный
                                    эксперимент проверки систем массового участия.
                                </Text>
                            )}

                            <Text style={styles.lastMessage} ellipsizeMode={'tail'} numberOfLines={1}>
                                <Text style={styles.messageAuthor}>Сергей: </Text>
                                Таким образом постоянное
                                информационно-пропагандистское обеспечение
                                нашей деятельности представляет собой интересный
                                эксперимент проверки систем массового участия.
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[styles.arrowView, arrowStyle]}
                        onPress={onArrowPress}
                    >
                        {arrowComponent ? arrowComponent : (
                            expanded ? <ImageArrowUp /> : <ImageArrowDown />
                        )}
                    </TouchableOpacity>
                </TouchableOpacity>
                {expanded && <View style={[styles.children, childrenStyle]}>{children}</View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLOR_5
    },
    header: {
    },
    headerBorder: {
    },
    arrowView: {
        position: 'absolute',
        right: 2,
        top: 10,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    children: {
    },
    expandedText: {
        color: COLOR_9,
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        lineHeight: 11,
        marginVertical: 10,
        marginLeft: 10
    },
    item: {
        backgroundColor: COLOR_5,
        paddingVertical: 20,
        borderBottomColor: COLOR_6,
        borderBottomWidth: 1,
        paddingHorizontal: WRAPPER_PADDINGS,
        flexDirection: 'row',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        justifyContent: 'space-between'
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10
    },
    block: {
        flex: 1
    },
    personName: {
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        color: COLOR_1,
        marginRight: 6
    },
    companyName: {
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        color: COLOR_9
    },
    time: {
        fontSize: 10,
        fontFamily: 'GothamProRegular',
        color: COLOR_9
    },
    chatName: {
        fontSize: 10,
        fontFamily: 'GothamProMedium',
        color: COLOR_1,
        marginBottom: 6,
        width: '90%'
    },
    lastMessage: {
        fontSize: 9,
        fontFamily: 'GothamProRegular',
        color: COLOR_9
    },
    messageAuthor: {
        fontSize: 10,
        fontFamily: 'GothamProMedium',
        color: COLOR_9
    },
    nameRow: {
        flexDirection: 'row'
    },
});

export default ScrollableAccordionItem;
