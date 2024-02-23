import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';

export default function HomeTitles({text,style}) {


  return (
   <View style={styles.container}>
    <Text style={styles.text}> {text}{style}</Text>
   </View>
  )
}

// the styling of the titles part 

const styles=StyleSheet.create({
        text:{
            color:'white',
            fontSize:16
        }
})