import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {IAppTextProps, IBackButtonProps} from "./component.interface";
import {BackButtonWrap} from "./component.style";

export const AppText = (props : IAppTextProps)  =>{
   const {title , style} = props
    return (
        <Text  style={[style , {fontFamily : "NanumSquare_acB"}]}>
            {title}
        </Text>
    )
}

export const LogoComponent = (props: any) => {

    return (
        <View style={styled.headerWrap}>
            <View style={styled.iconBox}>
                <Image style={styled.logoBox}
                       source={require('../../assets/images/logo.png')}/>
            </View>
            <View style={styled.emptyBox}>
            </View>
        </View>
    )
}

export const SearchUiButton = (props: any) => {

    const {onPress} = props

    return (
        <View style={styled.searchWrap}>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                style={styled.searchBox}>
                <View style={styled.searchIconBox}>
                    <FontAwesomeIcon
                        color={"#000"}
                        icon={['fas', "search"]}
                        size={23}/>
                </View>
                <View style={styled.placeholderBox}>
                    <Text style={styled.placeholderText}>
                        검색어를 입력하세요
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const BackButton = (props: IBackButtonProps) => {
    const {navigation} = props;
    return (
        <BackButtonWrap
            activeOpacity={1}
            onPress={() => {
                navigation.goBack();
            }}>
            <FontAwesomeIcon icon={['fas', 'chevron-left']} size={20} color={'#000'}/>
        </BackButtonWrap>
    );
};

const styled = StyleSheet.create({
    // search - button - component
    searchWrap: {
        height: 70,
        backgroundColor: "#fff",
    },
    searchBox: {
        flex: 1,
        margin: 10,
        backgroundColor: "rgba( 0 , 0, 0, 0.05)",
        borderRadius: 10,
        flexDirection: "row"
    },
    searchIconBox: {
        flex: .2,
        alignItems: "center",
        justifyContent: "center",
    },
    placeholderBox: {
        flex: 1,
        backgroundColor: "rgba( 0 , 0, 0, 0.03)",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    placeholderText: {
        fontSize: 15,
        marginLeft: 10
    },

    // logo - component - styled
    headerWrap: {
        height: 60,
        flexDirection: "row"
    },
    logoBox: {
        width: 120,
        height: 60,
        resizeMode: "contain"
    },
    iconBox: {
        flex: .7,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    emptyBox: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
})
