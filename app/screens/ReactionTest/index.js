import React from 'react'
import { View, Text,StatusBar,Pressable } from 'react-native'
import Rounds from './Rounds';
import { styles } from './styles';
import Texts from '../../components/Texts';
import { primaryColor, white } from '../../constants/colors';
import Spinner from '../../components/Spinner';
import * as Actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
export default function index({navigation,route}) {
    const [showRound,setShowRound] = React.useState(true);
    const [showStatus,setShowStatus]=React.useState('red');
    const [showInvalid,setShowInvalid]=React.useState(false);
    const updateRounds = useSelector(state => state.stateContent.updateRounds);
    console.log('round details',updateRounds)
    const dispatch = useDispatch();
    React.useEffect(()=>{
        handleRandom();
    },[dispatch])
    const handleRefresh = () => {
        setShowInvalid(false);
        setShowStatus('red');
        handleRandom();
    }
    const handleRandom = async()=>{
        await Actions.getRandomNumber().then((randomNumber) => {
            if(randomNumber){
                console.log('im here',randomNumber)
                setTimeout(()=>{
                    setShowStatus('green');
                },randomNumber*1000)
            }
        });
    }
    const handleTouch = () =>{
        if(showStatus !='green'){
            setShowStatus('invalid')
            dispatch({type:Actions.UpdateRounds,payload:{
                roundNumber:updateRounds.length+1,
                status:0,
                timeSpent:10 
            }});
            return setTimeout(()=>{
                handleRefresh();
            },2000)
        }
        dispatch({type:Actions.UpdateRounds,payload:{
            roundNumber:updateRounds.length+1,
            status:1,
            timeSpent:10
            
        }});
        
        //if round === 5 navigate to result 
        handleRefresh();
        
    }
    const handleInvalid = () => {
        alert('invalid')
    }
    return (
        <Pressable style={styles.container} onPress={handleTouch}>
                <Texts style={styles.currentRoundText}>Round {updateRounds.length+1}</Texts>
                <StatusBar backgroundColor={primaryColor} barStyle="dark-content" />
                <Spinner background={white} color={white}/>
            
        </Pressable>
    )
}
