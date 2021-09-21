import React from 'react'
import { View, Text, StatusBar,Image} from 'react-native'
import { styles } from './styles';
import Swiper from 'react-native-swiper';
import Texts from '../../components/Texts';
import { white } from '../../constants/colors';
import { screenHeight } from '../../constants/dimensions';
import Button from '../../components/Button';
export default function index({navigation,route}) {
    const handlePress = ()=>{
        navigation.navigate('AppStack');
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={white} barStyle="dark-content" />
            <Swiper
                autoplay
                autoplayTimeout={5}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDot}
            >
                <View style={styles.welcomeContainer}>
                    <View style={{ paddingBottom: screenHeight(10) }}>
                        <View style={{ alignSelf: "center" }}>
                            <Image source={require('../../assets/images/welcome1.png')} style={styles.welcomeCover1}/>
                        </View>
                        <View style={styles.imageSegment}>
                            <View style={styles.introItems}>
                                <View style={{ alignItems: "center" }}>
                                    <Texts weight="bold" style={styles.welcomeHeader}>
                                        Reaction time tester
                                    </Texts>
                                    <Texts weight="regular" style={styles.welcomeText}>
                                        This is a simple tool to measure your reaction time.
                                    </Texts>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.welcomeContainer}>
                    <View style={{ paddingBottom: screenHeight(10) }}>
                        <View style={{ alignSelf: "center" }}>
                            <Image source={require('../../assets/images/welcomeRed.png')} style={styles.welcomeCover1}/>
                        </View>
                        <View style={styles.imageSegment}>
                            <View style={styles.introItems}>
                                <View style={{ alignItems: "center" }}>
                                    <Texts weight="bold" style={styles.welcomeHeader}>
                                        Red Screen
                                    </Texts>
                                    <Texts weight="regular" style={styles.welcomeText}>
                                        No action is expected when the screen is red, any action will invalidate that particular round 
                                    </Texts>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.welcomeContainer}>
                    <View style={{ paddingBottom: screenHeight(10) }}>
                        <View style={{ alignSelf: "center" }}>
                            <Image source={require('../../assets/images/welcomeGreen.png')} style={styles.welcomeCover1}/>
                        </View>
                        <View style={styles.imageSegment}>
                            <View style={styles.introItems}>
                                <View style={{ alignItems: "center" }}>
                                    <Texts weight="bold" style={styles.welcomeHeader}>
                                        Green Screen
                                    </Texts>
                                    <Texts weight="regular" style={styles.welcomeText}>
                                        When the screen changes from red to green, user is expected to tap the screen as soon as possible.
                                    </Texts>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.welcomeContainer}>
                    <View style={{ paddingBottom: screenHeight(10) }}>
                        <View style={{ alignSelf: "center" }}>
                            <Image source={require('../../assets/images/welcomeRounds.png')} style={styles.welcomeCover1}/>
                        </View>
                        <View style={styles.imageSegment}>
                            <View style={styles.introItems}>
                                <View style={{ alignItems: "center" }}>
                                    <Texts weight="bold" style={styles.welcomeHeader}>
                                        5 Valid Rounds
                                    </Texts>
                                    <Texts weight="regular" style={styles.welcomeText}>
                                        This will be executed until first 5 valid rounds before the result is generated.
                                    </Texts>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Swiper>
            <View>
                <Button 
                    title="Get Started"
                    onPress={handlePress}
                />
            </View>
        </View>
    )
}
