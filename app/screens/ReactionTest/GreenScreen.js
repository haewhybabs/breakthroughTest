import React from 'react'
import { StatusBar,Pressable } from 'react-native';
import Rounds from './Rounds';
import { styles } from './styles';
import Texts from '../../components/Texts';
import { green } from '../../constants/colors';

export default function GreenScreen({handleTouch,updateRounds,mainTimer}) {
    return (
        <Pressable style={{...styles.container,backgroundColor:green}} onPress={handleTouch}>
            <Texts style={styles.currentRoundText}>Round {updateRounds.length+1}</Texts>
            <StatusBar backgroundColor={green} barStyle="dark-content" />
            <Rounds time={mainTimer}/>
        </Pressable>
    )
}
