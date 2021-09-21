import React from 'react'
import { View,StatusBar,ScrollView} from 'react-native'
import CompleteIcon from '../../assets/svg/complete3.svg';
import styles  from './styles';
import Texts from '../../components/Texts';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../store/actions';
import ResultText from './ResultText';
import { primaryColor } from '../../constants/colors';
export default function index({navigation,route}) {
    const updateRounds = useSelector(state => state.stateContent.updateRounds);
    const activeRounds = updateRounds.filter((item)=>item.status===1);
    const dispatch = useDispatch();
    const handleRestart = () =>{
        dispatch({type:Actions.ClearRounds})
        navigation.navigate('ReactionTest');
    }
    let finalScore = 0;
    const averages = activeRounds.map((item)=>{
        finalScore=item.timeSpent+finalScore
    });
    finalScore=finalScore/activeRounds.length;
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={primaryColor} barStyle="dark-content" />
            <ScrollView>
                <View style={styles.imageCover}>
                    <CompleteIcon width={400} height={250}/>
                </View>
                <Texts weight ="bold" style={styles.headerText}>Your results are here</Texts>
                <View style={styles.resultWrapper}>
                    {
                        activeRounds.map((item,index)=>(
                            <ResultText item={item} key={index}/>
                        ))
                    }
                </View>
                <View style={styles.markContainer}>
                    <View style={styles.markCover}>
                        <Texts style={styles.finalTextResult}>{finalScore.toFixed(2)}</Texts>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonWrapper}>
                <Button title="Click here to restart" onPress={handleRestart}/>
            </View>
        </View>
    )
}
