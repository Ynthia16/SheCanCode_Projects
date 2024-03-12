import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import React, { useState,useEffect} from 'react';
import Input from '../components/Input.jsx';
import IconWord from '../components/IconWord.jsx';
import ButtomText from '../components/ButtomText.jsx';
import Button from '../components/button.jsx';
import Navigate from '../components/Navigate.jsx';
import FlashMessage, {showMessage} from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Firebase_Auth } from '../../firebaseConfig.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { IconButton } from 'react-native-paper';
import {TextInput}  from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function SignIn({navigation}) {
    const height=Dimensions.get('screen').height;
    const width=Dimensions.get('screen').width;
    const Autho = Firebase_Auth
  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  const[emailError, setEmailError]=useState('')
  const[passwordError, setPasswordError]=useState('')
  const [showPassword,setshowPassword]= useState(true)
 

  const isValidEmail=(email)=>{
      const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
      return(
        emailRegex.test(email)
      )
    }

    const ValidateForm= ()=>{
    let valid=true

    if (email.trim()==('')){
      setEmailError('Email is required!')
      valid=false
    }else if (!isValidEmail(email)){
      setEmailError('Email is invalid')
      valid=false
    }else{
      setEmailError('')
    }
    if (password.trim()==('')){
        setPasswordError('Password is required')
    }else {
        setPasswordError('')
    }
    return valid 
    
   }

   const handlesSubmit=  async ()=>{
    const data={
      email:email,
      password:password
      }
      const setItem = await AsyncStorage.setItem('user_data',JSON.stringify(data))
      
      if (ValidateForm()){
            const Authenticate= async()=>{
                try{
                  const createUser= await signInWithEmailAndPassword(Autho,email,password)
                   navigation.navigate('Home')
                  console.log(createUser)
                }catch(error){
                  console.log(error)
                }
            }
            Authenticate()

          }
        // } console.log(getItem)
        
      }
const handlePassword=()=>{
  setshowPassword(!showPassword)
}
   
  return (
    <View style={{height:height, width:width, backgroundColor:'#26282c'}}>
       
        <StatusBar style="light"/>
        <View style={styles.navigate}>
            <Navigate text='Sign In' iconName='arrowleft' size='18' color='white' onPress={()=>navigation.goBack()}/>
        </View>
        <View style={{display:'flex', gap:8}}>
            <Input TextTitle='Email Address' placeholder='email'iconNameLeft='email-outline' iconSize={20} value={email} onChangeText={setEmail} error={emailError}/>
                <View>{emailError?<Text style={{color:'red', fontSize:11, paddingHorizontal:20,paddingBottom:7}}> {emailError}</Text>:null}</View>
            <Input TextTitle='Password' placeholder='your password' iconNameLeft='lock-outline' iconNameRight={showPassword? 'eye-off-outline':'eye'} iconSize={20} secureTextEntry={showPassword} 
              value={password}  onChangeText={setPassword} error={passwordError} onPress={handlePassword}/>
                <View>{passwordError?<Text style={{color:'red', fontSize:11, paddingHorizontal:20,paddingBottom:7}}> {passwordError} </Text>:null}</View>
         </View>

        <View>
            <View style={styles.passwordContainer}>
            <Text style={styles.passwordTitle}> Forgot Password?</Text>
            </View>
            <View>
                <Button Word='Sign In' onPress={handlesSubmit} />
            </View>
        </View>
        <View>
            <IconWord text1='or sign in with' text2=' Google' text3='Watch Movie' icon1='google' icon2='facebook' size='15' iconColor='#C2C5C6'/>
        </View>
        <View style={styles.buttomText}>
            <ButtomText text1="Don't have an account?" text2='Sign Up' onPress={()=> navigation.goBack()}  />
        </View>
        
    </View>
  )
  }

// the styling part of the signin page


const styles=StyleSheet.create({
    container:{
        backgroundColor:'#26282c',
    },
    navigate:{
        paddingBottom:20
    },
    passwordContainer:{
       paddingRight:20,
       paddingVertical:15
    },
    passwordTitle:{
        textAlign:'right', 
        fontSize:15,
        color:'#C2C5C6'
    },
        buttomText:{
       paddingTop:30, 
    }
})