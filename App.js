import React from 'react'
import { StatusBar,BackHandler,Alert} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './app/store/reducers';
import MainStack from './app/navigation';
import * as Actions from './app/store/actions';
export default function App() {
  React.useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () =>{
          store.dispatch({type:Actions.ClearRounds})
          BackHandler.exitApp()}
        }
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <MainStack />
    </Provider>
  )
}
let store = createStore(reducers);
