import React from 'react'
import { View, Text } from 'react-native'
import CompleteIcon from '../../assets/svg/complete3.svg';
import styles  from './styles';
import Texts from '../../components/Texts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { danger, green2, white } from '../../constants/colors';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../store/actions';

export default function index({navigation,route}) {
    const updateRounds = useSelector(state => state.stateContent.updateRounds);
    const activeRounds = updateRounds.filter((item)=>item.status===1);
    const dispatch = useDispatch();
    const handleRestart = () =>{
        dispatch({type:Actions.ClearRounds})
        navigation.navigate('ReactionTest');
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageCover}>
                <CompleteIcon width={400} height={300}/>
            </View>
            <Texts weight ="bold" style={styles.headerText}>Your results are here</Texts>
            <View style={styles.resultWrapper}>
                {
                    activeRounds.map((item,index)=>(
                        <View style={styles.resultContent} key={index}> 
                            <View style={styles.resultContainer}>
                                <AntDesign name="checkcircle" color={green2} size={25}/>
                                <Texts weight="bold" style={styles.numberText}>{item.timeSpent}</Texts>
                            </View>
                            <Texts style={styles.roundText}>Round {item.roundNumber}</Texts>
                        </View>
                    ))
                }
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Click here to restart" onPress={handleRestart}/>
            </View>
        </View>
    )
}
