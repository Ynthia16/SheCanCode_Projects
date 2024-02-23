import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { TextInput} from 'react-native-paper';
// import React, { useState } from "react";

export default function Input({label,mode,value,onChangeText,secureTextEntry,iconNameLeft,iconSize,placeholder,iconColor,iconNameRight,TextTitle, emailError}) {
  return(
    <View style={styles.container}> 
    <View style={styles.textcontainer}>
    <Text style={styles.texttitle}>{TextTitle}</Text>
    </View>
    <TextInput
      mode='outlined'
      label={label}
      value={value}
      dense
      theme={{roundness:8, colors:{primary:'#333336', background:'transparent'}, borderColor:'#333336', underlineColor:'#333336'}}
      placeholder={placeholder}
      textColor='white'
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      error={emailError}
      style={styles.textinput}
      // style={{ height: , justifyContent: "center" }}
      left={<TextInput.Icon 
      icon={iconNameLeft}
      size={iconSize}
      color={iconColor}
      />}

      right={<TextInput.Icon 
      icon={iconNameRight}
      size={iconSize}
      color={iconColor}
      />}
    />
    </View>
  )
}

// the styling of the textinput component

const styles=StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:5
  },
  textinput:{
    borderRadius:10,
    underlineColor:'transparent',
    opacity:0.5,
    paddingVertical:0,
    height:37
    
  },
  textcontainer:{
    paddingBottom:4,
    
  },
  texttitle:{
    opacity:0.6,
    color:'#C2C5C6'
  },


})