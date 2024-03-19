import React from 'react'
import { StyleSheet, Text, View, Image,ScrollView, ImageBackground } from 'react-native';

export default function Card3({image, text1, text2,text3}) {
  return (
   <View style={styles.container}>
        <ImageBackground source={{uri:image}} style={{height:170,width:260}} imageStyle={{borderRadius:25}}>
            <View style={styles.text1View}>
                <Text style={styles.text1}>{text1}</Text>
            </View>
            <View style={styles.flexbox}>
                <Text style={styles.text2}> {text2}</Text>
                <Text style={styles.text3}>{text3}</Text>
            </View>
        </ImageBackground>
   </View>
  )
}

// the styling part of the card3 

const styles=StyleSheet.create({
    container:{
       
    },
    flexbox:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'black',
        opacity:0.6,
        paddingHorizontal:10,
        paddingVertical:16,
        borderBottomStartRadius:20,
        borderBottomEndRadius:20,
        position:'absolute',
        bottom:0,
        width:'100%'
    
    },
    text1:{
        color:'white',
        backgroundColor:'#763b11',
        // opacity:0.8,
        position:'absolute',
        overflow:'hidden',
        borderRadius:10,
        top:9,
        left:9,
        paddingHorizontal:10,
        paddingVertical:7
    },
    text2:{
        color:'white'
    },
    text3:{
        color:'white'
    }
})
