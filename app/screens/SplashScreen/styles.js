import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import {white} from '../../constants/colors'
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:white,
        justifyContent:'center',
        alignItems:'center'
    },
})