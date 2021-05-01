import React, { useState } from 'react';
import { StyleSheet, Text, View, Vibration, Platform} from "react-native";
import { ProgressBar } from 'react-native-paper';
import { Contdowns } from './Contdowns';
import { RoundedBotton } from './RoundedBotton';
import {Timing} from './Timing';
import { useKeepAwake } from 'expo-keep-awake';


export const Timer = ({ focusObject, backme, onTimerEnd, clearFocuse }) => {

  useKeepAwake();
  const interval = React.useRef(null);
  const [minutes, setMinutes] = useState(0.1)
  const [ progress, setProgress ] = useState(1)
  const [ isStarted, setIsStarted ] = useState(false);

  const onProgress = (progress) =>{
    return(setProgress(progress));
  }

  const changeTime = (min) =>{
    setMinutes(min);
    setProgress(1);
    setIsStarted(true)
    return;
  }

  const vibrates = () =>{
    if( Platform.OS === 'ios'){
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000)
      return;
    } else{
      return Vibration.vibrate(5000);
    }
  }

  const onEnd = () =>{
    vibrates();
    setMinutes(0.2);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
    return;
  }

   

  return (
    <View style={styles.container}>
        <View style={styles.cont}>
        <Contdowns minutes={minutes} isPause={!isStarted}  onProgress={onProgress} onEnd={onEnd} />
        </View> 
        <View style={{paddingTop: 40}}>
        <Text style={styles.tittle}>Focus on:</Text>
        <Text style={styles.task}>{focusObject}</Text>
      </View>
      <View style={{paddingTop: 6}} >
      <ProgressBar  progress={progress} color='#84F513' style={{height: 10}} />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing  onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
      {
        (isStarted)
       ? 
      (<RoundedBotton tittle='pause'   onPress={() => setIsStarted(false)} />) 
      : 
      (<RoundedBotton tittle='start'   onPress={() => setIsStarted(true)} />)
      }
      
      
      </View>
      <View style={styles.clearFocuse}>
      <RoundedBotton tittle='-' size={40} textStyle={{fontSize: 20}}  onPress={() => clearFocuse()}  />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  task:{
    color: '#52734d',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tittle:{
    color:'#52734d',
    textAlign: 'center'
  },
  cont:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper:{
    flex:0.3,
    
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems:'center'
  },
  clearFocuse:{
    paddingBottom: 20,
    paddingLeft: 20
  }

});