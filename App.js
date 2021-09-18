import React from 'react'
import { StatusBar } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './app/store/reducers';
import MainStack from './app/navigation';
import { primaryColor } from './app/constants/colors';
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <MainStack />
    </Provider>
  )
}
const store = createStore(reducers);
