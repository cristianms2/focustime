import React from 'react';
import { StyleSheet, View} from "react-native";
import { RoundedBotton } from './RoundedBotton'

export const Timing = ({onChangeTime}) => {

  return(
    <>
    <View style={styles.timingBotton}>
      <RoundedBotton size={75} tittle='10' onPress={() =>{ onChangeTime(10) }} /> 
    </View>
    <View style={styles.timingBotton}>
     <RoundedBotton size={75} tittle='15' onPress={() =>{ onChangeTime(15) }} />
    </View>
    <View style={styles.timingBotton}>
    <RoundedBotton size={75} tittle='20' onPress={() =>{ onChangeTime(20) }} />
    </View>
    </>
  );
};

const styles= StyleSheet.create({
  timingBotton:{
    flex:1,
    alignItems:'center',
  }
})