import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import { white } from '../../constants/colors';
export default function index({background,color}){
  return (
    <View style={{...styles.spinContainer}}>
      <Spinner type='Bounce' isVisible={true} size={100} color={color} />
    </View>
  );
};
const styles = StyleSheet.create({
  spinContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: white
  }
});

