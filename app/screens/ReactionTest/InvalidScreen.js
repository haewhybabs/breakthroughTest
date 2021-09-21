import React from 'react'
import { StatusBar,Pressable,Image } from 'react-native';
import { styles } from './styles';
import Texts from '../../components/Texts';
import { danger, white } from '../../constants/colors';
import Spinner from '../../components/Spinner';
export default function InvalidScreen({handleTouch}) {
    return (
        <Pressable style={{...styles.container,backgroundColor:danger}} onPress={handleTouch}>
            <Image source={require('../../assets/images/error.png')} style={styles.errorImage}/>
            <Texts style={styles.currentRoundTitleText} bold>Invalid Round</Texts>
            <Texts style={styles.currentRoundText}>You tapped the screen before the green screen</Texts>
            <Texts style={styles.currentRoundText}>Tap the screen to continue the next round</Texts>
            <StatusBar backgroundColor={danger} barStyle="dark-content" />
            <Spinner background={white} color={white}/>
        </Pressable>
    )
}
