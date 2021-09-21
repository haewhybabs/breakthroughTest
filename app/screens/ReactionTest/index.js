import React from 'react'
import { Vibration } from 'react-native'
import * as Actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import { status,vibrationDuration } from '../../constants/const_strings';
import { useFocusEffect } from '@react-navigation/native';
import GreenScreen from './GreenScreen';
import InvalidScreen from './InvalidScreen';
import RedScreen from './RedScreen';
export default function index({navigation,route}) {
    
    const [showStatus,setShowStatus]=React.useState(status.red);
    const [now,setNow]=React.useState(null);
    const [startTime,setStartTime] = React.useState(null);
    const updateRounds = useSelector(state => state.stateContent.updateRounds);
    const dispatch = useDispatch();
    const timerRef = React.useRef(null);
    const stopWatchRef = React.useRef(null);
    const roundRef = React.useRef(0);
    const invalidRef=React.useRef(true);
    React.useEffect(()=>{
        if(invalidRef.current){
            return handleClearOut();
        }
        handleRandom();
    },[showStatus])
    useFocusEffect(
        React.useCallback(() => {
            roundRef.current=0;
            handleRefresh();
        }, [navigation])
    );
    const handleRefresh = () => {
        setShowStatus(status.red);
        setNow(null);
        setStartTime(null);
        if(roundRef.current>4){
            handleClearOut();
            return navigation.navigate('Result');
        }
        handleRandom();
    }
    const handleRandom = ()=>{
        Actions.getRandomNumber().then((randomNumber) => {
            if(randomNumber){
                timerRef.current = setTimeout(()=>{
                    console.log('timeout random')
                    setShowStatus(status.green);
                    handleWatchTimer();
                },randomNumber*1000)
            }
        });
    }
    const handleWatchTimer = () =>{
        setStartTime(new Date().getTime());
        stopWatchRef.current = setInterval(()=>{
            setNow(new Date().getTime());
        },100)
    }
    const handleTouch = () =>{
        if(showStatus===status.red){
            invalidRef.current=true;
            handleClearOut();
            Vibration.vibrate(vibrationDuration);
            setShowStatus(status.invalid);
            return dispatch({type:Actions.UpdateRounds,payload:{
                roundNumber:updateRounds.length+1,
                status:0,
                timeSpent:(now-startTime)/1000
            }});
        }
        if(showStatus===status.invalid){
            return handleRefresh();
        }
        if(showStatus===status.green){
            clearInterval(stopWatchRef.current);
            dispatch({type:Actions.UpdateRounds,payload:{
                roundNumber:updateRounds.length+1,
                status:1,
                timeSpent:(now-startTime)/1000
            }});
            roundRef.current=roundRef.current+1;
            handleRefresh();
        }
    }
    const handleClearOut = ()=>{
        clearTimeout(timerRef.current);
        clearInterval(stopWatchRef.current);
    }
    const mainTimer = (now-startTime)/1000;
    if(showStatus===status.green){
        return(
            <GreenScreen handleTouch={handleTouch} mainTimer={mainTimer} updateRounds={updateRounds}/>
        )
    }
    else if(showStatus===status.invalid){
        return(
            <InvalidScreen handleTouch={handleTouch}/>
        )
    }
    else{
        return (
           <RedScreen handleTouch={handleTouch} updateRounds={updateRounds}/>
        )
    }
    
}
