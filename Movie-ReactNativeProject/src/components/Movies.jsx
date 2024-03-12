import React , {useContext}from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { ChangeModeIntoWhite } from '../components/contextContainer.jsx';

export default function Movies({text1,text2}) {
  const {whiteMode,HandleModeChange}= useContext(ChangeModeIntoWhite)
  return (

    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize:16, color:whiteMode? 'black':'#D7D9D6'}}>{text1}</Text>
        <Pressable>
        <Text  style={{fontSize:12, color:'grey'}}>{text2}</Text>
        </Pressable>
    </View>
  ) 
  }