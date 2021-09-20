import React from "react";
import { Platform, StyleSheet } from "react-native";
import {
    black,
    primaryColor,
    textColor,
    white,
} from "../../constants/colors";
import { screenHeight, screenWidth } from "../../constants/dimensions";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:primaryColor,
        alignItems:'center',
        justifyContent:'center'
    },
    circleRound:{
        borderWidth:1,
        height:200,
        width:200,
        borderRadius:200/2,
        borderColor:white,
        alignItems:'center',
        justifyContent:'center'

    },
    roundsText:{
        color:white,
        fontSize:60
    },
    currentRoundText:{
        color:white,
        paddingBottom:20,
        fontSize:18,
        textAlign:'center'
    },
    currentRoundTitleText:{
        color:white,
        paddingBottom:20,
        fontSize:30,
        textAlign:'center',
    },
    errorImage:{
        height:300,
        width:300
    }
});
