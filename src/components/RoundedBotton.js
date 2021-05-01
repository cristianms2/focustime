import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { TextInput } from 'react-native-paper';

export const RoundedBotton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>
        {props.tittle}
      </Text>
    </TouchableOpacity>
    
  );
};

const styles = (size) => StyleSheet.create({
  radius:{
    borderRadius: size/2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#52734d',
    borderWidth: 2,
  },
  text: {color: '#52734d', fontSize: size/4}
  
});