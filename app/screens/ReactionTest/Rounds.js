import React from 'react'
import { View} from 'react-native';
import { styles } from './styles';
import Texts from '../../components/Texts';
export default function Rounds({time}) {
    return (
        <View style={styles.circleRound}>
            <Texts style={styles.roundsText}>{time}</Texts>
        </View>
    )
}
