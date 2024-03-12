import React , {useContext} from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import { ChangeModeIntoWhite } from '../components/contextContainer.jsx';

export default function HomeTitles({text,style}) {
  const {whiteMode,HandleModeChange}= useContext(ChangeModeIntoWhite)

  return (
   <View style={styles.container}>
    <Text style={{color:whiteMode? 'black':'#D7D9D6', fontSize:16}}> {text}{style}</Text>
   </View>
  )
}

// the styling of the titles part 

const styles=StyleSheet.create({
        text:{
            color:'#EAECEF',
            fontSize:16
        }
})