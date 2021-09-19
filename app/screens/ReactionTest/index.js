import React from 'react'
import { View, Text,StatusBar,Pressable } from 'react-native'
import Rounds from './Rounds';
import { styles } from './styles';
import Texts from '../../components/Texts';
import { danger, green, primaryColor, white } from '../../constants/colors';
import Spinner from '../../components/Spinner';
import * as Actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
export default function index({navigation,route}) {
    const [showStatus,setShowStatus]=React.useState('red');
    const updateRounds = useSelector(state => state.stateContent.updateRounds);
    const dispatch = useDispatch();
    const timerRef = React.useRef(null);
    React.useEffect(()=>{
        handleRandom();
    },[dispatch])
    const handleRefresh = () => {
        setShowStatus('red');
        handleRandom();
    }
    const handleRandom = ()=>{
        Actions.getRandomNumber().then((randomNumber) => {
            if(randomNumber){
                timerRef.current = setTimeout(()=>{
                    setShowStatus('green');
                },randomNumber*1000)
            }
        });
    }
    const handleTouch = () =>{
        if(showStatus==='red'){
            setShowStatus('invalid');
            clearTimeout(timerRef.current);
            return dispatch({type:Actions.UpdateRounds,payload:{
                roundNumber:updateRounds.length+1,
                status:0,
                timeSpent:10 
            }});
        }
        if(showStatus==='invalid'){
            return handleRefresh();
        }
        if(showStatus==='green'){
            dispatch({type:Actions.UpdateRounds,payload:{
                roundNumber:updateRounds.length+1,
                status:1,
                timeSpent:10
            }});
            handleRefresh();
        }
        
        
        
        //if round === 5 navigate to result 
        
    }
    if(showStatus==='green'){
        return(
            <Pressable style={{...styles.container,backgroundColor:green}} onPress={handleTouch}>
                <Texts style={styles.currentRoundText}>Round {updateRounds.length+1}</Texts>
                <StatusBar backgroundColor={green} barStyle="dark-content" />
                <Spinner background={white} color={white}/>
                    
            </Pressable>
        )
    }
    else if(showStatus==='invalid'){
        return(
            <Pressable style={{...styles.container,backgroundColor:danger}} onPress={handleTouch}>
                <Texts style={styles.currentRoundText}>Opps!!!</Texts>
                <Texts style={styles.currentRoundText}>Round {updateRounds.length} is Invalid.</Texts>
                <Texts style={styles.currentRoundText}>Get set for the next round</Texts>
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
