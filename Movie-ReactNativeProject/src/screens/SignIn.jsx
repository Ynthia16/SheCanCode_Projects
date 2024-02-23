import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import React, { useState } from 'react';
import Input from '../components/Input.jsx';
import IconWord from '../components/IconWord.jsx';
import ButtomText from '../components/ButtomText.jsx';
import Button from '../components/button.jsx';
import Navigate from '../components/Navigate.jsx';
// import React, { useState } from "react";

export default function SignIn({navigation}) {
    const height=Dimensions.get('screen').height;
    const width=Dimensions.get('screen').width;
    
  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  const[emailError, setEmailError]=useState('')
  const[passwordError, setPasswordError]=useState('')

  const isValidEmail=(email)=>{
      const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
      return(
        emailRegex.test(email)
      )
    }

    const ValidateForm=()=>{
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

   const handlesSubmit=()=>{
      if (ValidateForm()){
        navigation.navigate('SignUp')
        console.log('form has been submitted succefully:',email,password)
      }
    }  

  return (
    <View style={{height:height, width:width, backgroundColor:'#26282c'}}>
       
        <StatusBar style="light"/>
        <View style={styles.navigate}>
            <Navigate text='Sign In' iconName='arrowleft' size='18' color='white' onPress={()=>navigation.navigate('Page4')}/>
        </View>
        <View>
            <Input TextTitle='Email Address' placeholder='email'iconNameLeft='email-outline' iconSize={20} value={email} onChangeText={setEmail} error={emailError}/>
                <View>{emailError?<Text style={{color:'red', fontSize:11, paddingHorizontal:20,paddingBottom:7}}> {emailError}</Text>:null}</View>
            <Input TextTitle='Password' placeholder='your password' iconNameLeft='lock-outline' iconSize={20} secureTextEntry={true} value={password}  onChangeText={setPassword} error={passwordError} />   
            <View>{passwordError?<Text style={{color:'red', fontSize:11, paddingHorizontal:20,paddingBottom:7}}> {passwordError}</Text>:null}</View>       
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
            <ButtomText text1="Don't have an account?" text2='Sign Up' onPress={()=> navigation.navigate('SignUp')}  />
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