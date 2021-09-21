import React from 'react'
import { StatusBar,Pressable } from 'react-native';
import { styles } from './styles';
import Texts from '../../components/Texts';
import { white,primaryColor } from '../../constants/colors';
import Spinner from '../../components/Spinner';

export default function RedScreen({handleTouch,updateRounds}) {
    return (
        <Pressable style={styles.container} onPress={handleTouch}>
            <Texts style={styles.currentRoundText}>Round {updateRounds.length+1}</Texts>
            <StatusBar backgroundColor={primaryColor} barStyle="dark-content" />
            <Spinner background={white} color={white}/>
        </Pressable>
    )
}
