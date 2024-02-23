import React from 'react'
import {  StyleSheet, Text, View} from 'react-native';
export default function MuviText() {
  return (
    <View style={styles.containerText}>
        <Text style={{color:'black',fontWeight:'700',textAlign:'center', paddingHorizontal:10, paddingVertical:1, fontSize:23, backgroundColor:'#f9be02', borderRadius:6, overflow:'hidden'}}>M</Text>
        <Text style={{color:'white', fontSize:23}}> Muvi</Text>
    </View>
  )
}

// the styling part of the muvi page

const styles=StyleSheet.create({
        containerText:{
            display:'flex',
            alignItems:'center',
            flexDirection:'row',            
          },
    
})