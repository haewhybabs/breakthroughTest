import { StyleSheet } from "react-native";
import { primaryColor, white } from "../../constants/colors";
export default StyleSheet.create({
    defaultButton:{
        borderRadius: 7,
        backgroundColor:primaryColor,
        height: 50,
        width:'100%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    defaultButtonText:{
        fontSize:19,
        color:white,
    },
    activityIndicatorWrapper:{
        paddingLeft:10
    },
    buttonWrapper:{
        width:'100%',
        padding:20
    },
    borderButtonCover:{
        borderWidth:0.5,
        borderColor:primaryColor,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        width:150,height:30,
        alignSelf:'center'
    }
});