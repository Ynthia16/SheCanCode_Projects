import React from 'react';
import { StyleSheet, Text, View,Pressable } from 'react-native';


export default function Button({Word, onPress}) {
  return (
        <Pressable style={styles.pressable} onPress={onPress}>
            <Text style={styles.text3}> {Word}</Text>
          </Pressable>
  )
}

// the styling part of the button component

const styles = StyleSheet.create({
   
    pressable:{
      backgroundColor:'#f9be02',
      marginHorizontal:20,
      marginBottom:20,
      borderRadius:8,
      overflow:'hidden',
    },
    text3:{
        textAlign:'center',
        alignItems:'center',
        paddingVertical:7,
        fontSize:17,
        opacity:0.7
      },

  });