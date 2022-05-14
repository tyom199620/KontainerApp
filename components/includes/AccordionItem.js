import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {COLOR_6} from "../helpers/Variables";
import {ImageArrowDown, ImageArrowUp} from "../helpers/images";

class AccordionItem extends React.Component {
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
            childrenStyle
        } = this.props;
        const {expanded} = this.state;

        return (
            <View style={[styles.wrapper, wrapperStyle]}>
                <TouchableOpacity
                    style={[styles.header, !expanded && styles.headerBorder, headerStyle]}
                    onPress={
                        typeof onPress === 'function' ?
                            onPress :
                            () => this.setExpanded(!expanded)
                    }
                    activeOpacity={0.5}
                >
                    {titleComponent}
                    <View style={[styles.arrowView, arrowStyle]}>
                        {arrowComponent ? arrowComponent : (
                            expanded ? <ImageArrowUp /> : <ImageArrowDown />
                        )}
                    </View>
                </TouchableOpacity>
                {expanded && <View style={[styles.children, childrenStyle]}>{children}</View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    header: {
    },
    headerBorder: {
        borderBottomWidth: 2,
        borderBottomColor: COLOR_6
    },
    arrowView: {
        position: 'absolute',
        right: 8,
    },
    children: {
        marginTop: 20,
    }
});

export default AccordionItem;
