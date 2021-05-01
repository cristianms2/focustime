import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const minutesToMilliseconts = (min) => min * 1000 * 60;
const formatTime = (time) => {return(time < 10 ? `0${time}` : time);}

export const Contdowns = ({ minutes, isPause, onProgress, onEnd }) => {

  const [millis, setMillis] = useState(minutesToMilliseconts(minutes));

  const interval = React.useRef(null);
  const countDown = () =>{
    setMillis((time) => { 
      if(time === 0){
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    })
  }
  useEffect(() =>{
    setMillis(minutesToMilliseconts(minutes))
  }, [minutes])
  
  useEffect(() =>{
    onProgress(millis/ minutesToMilliseconts(minutes));
    if(millis === 0){
      return onEnd();
    }
  },[millis])

  useEffect(() =>{
    if (isPause){
      if(interval.current) {
        return clearInterval(interval.current);
        }
      return;
    }
    interval.current = setInterval(countDown, 1000)
    return () => clearInterval(interval.current)
  }, [isPause])

  

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.contdown}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  contdown: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    backgroundColor: 'rgba( 132, 245, 19, 0.58 )',
  },
});
