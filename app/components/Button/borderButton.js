import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import Styles from './styles'
import Texts from '../Texts'
import { primaryColorText,white } from '../../constants/const_strings'
export default function borderButton({style,onPress,title,textStyle}) {
    return (
        <TouchableOpacity style={{...Styles.borderButtonCover,...style}} onPress={onPress}>
            <Texts style={{...textStyle,color:primaryColorText}}>{title}</Texts>
        </TouchableOpacity>
    )
}
