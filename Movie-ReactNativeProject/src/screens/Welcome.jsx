import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Pressable,Image} from 'react-native';
import Button from '../components/button';
import React from 'react';
import MuviText from '../components/MuviText';

export default function Page4({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>      
        <View style={styles.containerText}>
            <MuviText/>
        </View>

        <View style={styles.container2}>
            <View style={styles.imagecontainer}>
                <Image source={require('../../assets/pic3.png')}/>
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.text1}> Welcome to Muvi</Text>
                <Text style={styles.text2}> Free movie streaming all your needs everytime and everywhere.</Text>
            </View>

             <View style={styles.footer}>
                <Button Word='Watch Movie'/>
                <Pressable onPress={()=>navigation.navigate('SignIn')}>
                    <Text style={styles.sign}> Sign In </Text>
                </Pressable>
            </View>
        </View>
    </View>
  );
}


// the styling part of the page

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#26282c',
    
  },
  containerText:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:30,
    paddingBottom:15,
    backgroundColor:'#1f2123',
  },
  
  imagecontainer:{
    display:'flex',
    alignItems:'center',
    paddingVertical:20,
    paddingHorizontal:20,
  },
  textcontainer:{
    display:'flex',
    alignItems:'center',
    paddingVertical:20,
    paddingHorizontal:20,
  },
  text1:{
    color:'white',
    fontSize:23,
    fontWeight:'400',
    opacity:0.8,
  },
  text2:{
    color:'white',
    fontSize:15,
    textAlign:'center',
    paddingTop:15,
    opacity:0.4,
  },
 
  sign:{
    color:'white',
    textAlign:'center',
    fontSize:16,
    opacity:0.7,
  },
  footer:{
    paddingTop:100,
  }
});