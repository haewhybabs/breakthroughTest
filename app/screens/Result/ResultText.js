import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Texts from '../../components/Texts'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { green2 } from '../../constants/colors';
export default function ResultText({item}) {
    return (
        <View style={styles.resultContent}> 
            <View style={styles.resultContainer}>
                <AntDesign name="checkcircle" color={green2} size={25}/>
                <Texts weight="bold" style={styles.numberText}>{item.timeSpent}</Texts>
            </View>
            <Texts style={styles.roundText}>Round {item.roundNumber}</Texts>
        </View>
    )
}
