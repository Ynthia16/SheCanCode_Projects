import React from 'react'
import { StyleSheet, Text, View,Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Navigate({text,size,iconName,color, onPress}) {
  return (
   <View style={styles.container1}>
    <View >
    <Pressable style={styles.container} onPress={onPress}>
    <AntDesign name={iconName} size={size}color={color} />
    <Text style={styles.text}>{text}</Text>
    </Pressable>
    </View>
   </View>
  )
}
//  the styling part of the page

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'start',
        

    },
    container1:{
    display:'flex',
    justifyContent:'start',
    flexDirection:'row',
    backgroundColor:'#1f2123',
    paddingTop:29,
    paddingBottom:10,
    paddingHorizontal:19,
    
    },
    text:{
        color:'#FEFFFE',
        fontSize:18,
    }
})