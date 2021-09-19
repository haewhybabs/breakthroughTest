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
        backgroundColor:white
    },

    wrapper: {
        backgroundColor: "white",
    },
    dotStyle: {
        marginBottom: screenHeight(18),
        backgroundColor: "#BDBDBD",
        width: 10,
    },
    welcomeCover1:{
        width:300,
        height:200
    },
    activeDot: {
        marginBottom: screenHeight(18),
        backgroundColor: primaryColor,
        width: 22,
    },
    button: {
        padding: 12,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        width: screenWidth(88),
        height: 56,
        marginBottom: 12,
    },

    welcomeContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    welcome: {
        marginTop: 4,
        color: white,
        fontSize: 32,
        fontWeight: "700",
        lineHeight: 48,
    },
    welcomeText: {
        color: textColor,
        textAlign: "center",
        fontSize: 15,
        paddingHorizontal: 20,
        lineHeight:25
    },
    buttomContainer: {
        flex: 1,
        position: "absolute",
        alignSelf: "center",
        bottom: 20,
    },

    imageSegment: {},
    introItems: {
        paddingTop: screenHeight(2),
        alignItems: "center",
    },
    welcomeHeader: {
        marginVertical: 20,
        color: "#333333",
        fontSize: 28,
        textAlign: "center",
    },
    welcomeBtn: {
        position: "absolute",
        bottom: screenHeight(5),
        width: screenWidth(90),
        alignSelf: "center",
    },
    loginButton: {
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: screenHeight(1),
    },
    signupBtn: {
        position: "absolute",
        bottom: 10,
        width: screenWidth(80),
        alignSelf: "center",
        backgroundColor: primaryColor,
    },
    skipButton: {
        alignSelf: "flex-end",
        marginTop: Platform.OS == "ios" ? 20 : 0,
    },
});
