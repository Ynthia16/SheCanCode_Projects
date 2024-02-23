import React from 'react'
import {StyleSheet,View,Text} from 'react-native';

export default function HomeCate({text}) {
    // const container=require('../JsonData/HomeCate.json')
  return (
    <View>
        <View style={styles.textcontainer}>
            <Text style={styles.text}> {text}</Text>
        </View>
    </View>
  )
}

// the styling part of the home page

const styles=StyleSheet.create({
    text:{
        color:'white',
        fontWeight:'300',
        borderWidth:2,
        borderColor:'#333336',
        borderRadius:6,
        paddingHorizontal:10,
        paddingVertical:7,
        fontSize:15
    }
})
