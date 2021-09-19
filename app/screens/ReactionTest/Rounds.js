import React from 'react'
import { View, Text,StatusBar} from 'react-native';
import { styles } from './styles';
import Texts from '../../components/Texts';
import { primaryColor } from '../../constants/colors';
export default function Rounds() {
    return (
        
        <View style={styles.circleRound}>
            <Texts style={styles.roundsText}>1</Texts>
        </View>
       
    )
}
