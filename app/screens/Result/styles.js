import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import {danger, green, green2, primaryColor, white} from '../../constants/colors'
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:white,
        padding:20
    },
    imageCover:{
        alignItems:'center'
    },
    headerText:{
        alignSelf:'center',
        paddingTop:20,
        fontSize:20
    },
    resultWrapper:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap'
    },
    resultContainer:{
        paddingTop:20,
        flexDirection:'row'
    },
    resultContent:{
        width:width/3-40
    },
    circleRound:{
        height:25,
        width:25,
        borderRadius:25/2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:green2

    },
    cancelRound:{
        height:25,
        width:25,
        borderRadius:25/2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:danger
    },
    numberText:{
        padding:1,
        fontSize:16,
        paddingLeft:10,
    },
    roundText:{
        padding:5
    },
    buttonWrapper:{justifyContent:'flex-end',flex:1}
})