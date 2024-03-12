import React, {useContext} from 'react'
import {StyleSheet,View,Text} from 'react-native';
import { ChangeModeIntoWhite } from '../components/contextContainer.jsx';

export default function HomeCate({text}) {
    const {whiteMode,HandleModeChange}= useContext(ChangeModeIntoWhite)
  return (
    <View>
        <View style={styles.textcontainer}>
            <Text style={{  color:whiteMode? 'black':'#D7D9D6',
                            fontWeight:'300',
                            borderWidth:2,
                            borderColor: whiteMode? '#D7D9D6':'#333336',
                            borderRadius:6,
                            paddingHorizontal:10,
                            paddingVertical:7,
                            fontSize:15}}> {text}
            </Text>
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
