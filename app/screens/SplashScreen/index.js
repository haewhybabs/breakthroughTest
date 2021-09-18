import React from 'react'
import { View,Image,StatusBar } from 'react-native'
import styles from './styles';
import {combineColor, defaultColor, touchBlue} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
export default function Splash({navigation,route}) {
    const [mainSplash, setMainSplash] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setMainSplash(true)
        }, 3000);
        if(mainSplash){
            navigation.navigate('Introduction');
        }
    }, [mainSplash]);
    
    return (
        <LinearGradient 
        style={styles.container}
        colors={[defaultColor,touchBlue]}
        end={{ x: 0.5, y: -1 }}
        start={{ x: 0.6, y: 1 }}
        locations={[0.1, 0.9]}
        >
            <View >
                <StatusBar backgroundColor={combineColor} barStyle="light-content" />
                <Image 
                    source = {require('../../assets/images/logo.png')}                         
                    style={styles.logoCover}      
                />
            </View>
        </LinearGradient>
    )
}
