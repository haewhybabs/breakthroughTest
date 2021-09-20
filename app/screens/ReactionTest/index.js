import React from 'react'
import { View, Text,StatusBar,Pressable,Image } from 'react-native'
import Rounds from './Rounds';
import { styles } from './styles';
import Texts from '../../components/Texts';
import { danger, green, primaryColor, white } from '../../constants/colors';
import Spinner from '../../components/Spinner';
import * as Actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import { status } from '../../constants/const_strings';
export default function index({navigation,route}) {
    
    const [showStatus,setShowStatus]=React.useState(status.red);
    const [now,setNow]=React.useState(null);
    const [startTime,setStartTime] = React.useState(null);
    const updateRounds = useSelector(state => state.stateContent.updateRounds);
    const dispatch = useDispatch();
    const timerRef = React.useRef(null);
    const stopWatchRef = React.useRef(null);
    
    React.useEffect(()=>{
        handleRandom();
    },[dispatch])
    const handleRefresh = () => {
        setShowStatus(status.red);
        const proceedFilter = updateRounds.filter((item)=>item.status==1);
        if(proceedFilter.length>3){
            clearTimeout(timerRef.current);
            clearInterval(stopWatchRef.current);
            return navigation.navigate('Result');
        }
        handleRandom();
    }
    const handleRandom = ()=>{
        Actions.getRandomNumber().then((randomNumber) => {
            if(randomNumber){
                timerRef.current = setTimeout(()=>{
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
            setShowStatus(status.invalid);
            clearTimeout(timerRef.current);
            clearInterval(stopWatchRef.current);
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
            handleRefresh();
        }
    }
    const mainTimer = (now-startTime)/1000;
    if(showStatus===status.green){
        return(
            <Pressable style={{...styles.container,backgroundColor:green}} onPress={handleTouch}>
                <Texts style={styles.currentRoundText}>Round {updateRounds.length+1}</Texts>
                <StatusBar backgroundColor={green} barStyle="dark-content" />
                {/* <Spinner background={white} color={white}/> */}
                <Rounds time={mainTimer}/>
            </Pressable>
        )
    }
    else if(showStatus===status.invalid){
        return(
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
    else{
        return (
            <Pressable style={styles.container} onPress={handleTouch}>
                <Texts style={styles.currentRoundText}>Round {updateRounds.length+1}</Texts>
                <StatusBar backgroundColor={primaryColor} barStyle="dark-content" />
                <Spinner background={white} color={white}/>
            </Pressable>
        )
    }
    
}
