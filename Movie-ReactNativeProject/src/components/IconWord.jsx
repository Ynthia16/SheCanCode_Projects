import React from 'react';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function IconWord({text1, text2,text3,icon1,icon2,size,iconColor}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>{text1}</Text>
        <View style={styles.container2}>
            <View style={styles.container3}>
                <AntDesign name={icon1} size={size} color={iconColor}/>
                <Text style={styles.text}>{text2}</Text>
            </View>
            <View style={styles.container3}>
                <Feather name={icon2} size={size} color={iconColor}/>
                <Text style={styles.text}>{text3}</Text>
            </View>
        </View>
    </View>
       
  )
}

// the styling part of the iconWord component

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20
    },
    container2:{
        gap:8,
    },
    container3:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#333336',
        paddingHorizontal:110,
        paddingVertical:7,
        gap:2,
    },
    text1:{
        fontSize:15,
        paddingBottom:10,
        fontWeight:'300',
        color:'#C2C5C6'

    },
    text:{
        fontSize:16,
        color:'#C2C5C6'

    }
})