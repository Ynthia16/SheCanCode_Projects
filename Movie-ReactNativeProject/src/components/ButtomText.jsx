import React from 'react';
import { StyleSheet, Text, View,Pressable } from 'react-native';

export default function ButtomText({text1,text2,onPress}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>{text1}</Text>
        <Pressable style={styles.pressable} onPress={onPress}>
        <Text style={styles.text2}>{text2}</Text>
        </Pressable>
    </View>
    
  )
}

// the styling part of the bottom component

const styles=StyleSheet.create({
    container:{
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     gap:6,
     
    },
    text1:{
        textAlign:'center',
        opacity:0.7,
        fontSize:16,
        color:'#C2C5C6'      
    },
    text2:{
        color:'#ddbd43',
        fontSize:16
    }
});


