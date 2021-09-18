import React from 'react'
import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import Styles from './styles';
import Texts from '../Texts';
import { white } from '../../constants/colors';
export default function index({title,style,onPress,disabled,loading,textStyle}) {
    const renderButtonContent = ()=>{
        return(
            <>
                <Texts style={{...Styles.defaultButtonText,...textStyle}}>{title}</Texts>
                {
                    loading&&((
                        <View style={Styles.activityIndicatorWrapper}>
                            <ActivityIndicator color={white} />
                        </View>
                    ))
                }
            </>
        )
    }
    return (
        <View style={Styles.buttonWrapper}>
        {
            disabled?
            <View style={{...Styles.defaultButton,...style,opacity: 0.6}} onPress={onPress}>
                {renderButtonContent()}
            </View>
            :
            <TouchableOpacity style={{...Styles.defaultButton,...style}} onPress={onPress}>
                {renderButtonContent()}
            </TouchableOpacity>

        }
        </View>
    )
}
