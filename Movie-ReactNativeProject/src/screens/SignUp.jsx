import React, {useEffect,useState}from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Input from '../components/Input.jsx';
import IconWord from '../components/IconWord.jsx';
import Button from '../components/button.jsx';
import Navigate from '../components/Navigate.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Firebase_Auth } from '../../firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUp({navigation}) {
    const height=Dimensions.get('screen').height;
    const width=Dimensions.get('screen').width;
    const Autho = Firebase_Auth

    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const[phoneNumber,setphoneNumber]= useState('')
    const[emailError, setEmailError]=useState('')
    const[passwordError, setPasswordError]=useState('')
    const[phoneNumberError,setphoneNumberError]= useState('')


    const isValidEmail=(email)=>{
        const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        return(
          emailRegex.test(email)
        )
      }
      const isValidphoneNumber=(phoneNumber)=>{
        const phoneNumberRegex=/[2-9]{2}\d{8}/
        return(
          phoneNumberRegex.test(phoneNumber)
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
      if (phoneNumber.trim()==('')){
        setphoneNumberError('Phone number is required!')
        valid=false
      }else if (!isValidphoneNumber(phoneNumber)){
        setphoneNumberError('Phone Number is invalid')
        valid=false
      }else{
        setphoneNumberError('')
      }
      return valid 
      
     }

    const handlesSubmit= async ()=>{
     if (ValidateForm()){
        const Authenticate= async()=>{
            try{
              const createUser= await createUserWithEmailAndPassword(Autho,email,password)
              console.log(createUser)
            }catch(error){
              console.log(error)
            }
        }
        Authenticate()

      navigation.navigate('SignIn')
    }
    
  }
   
  return (
    <View style={{height:height, width:width, backgroundColor:'#26282c'}}>
        <View style={styles.navigate}>
            <Navigate text='Sign Up' iconName='arrowleft' size='18' color='white' onPress={()=>navigation.goBack()}/>
        </View>
        <View style={styles.inputs}>
            <Input TextTitle='Email Address' placeholder='email' iconNameLeft='email-outline' iconSize={20} value={email} onChangeText={setEmail} error={emailError}/>
                <View>{emailError?<Text style={{color:'red', fontSize:11, paddingHorizontal:20,paddingBottom:7}}> {emailError}</Text>:null}</View>
            <Input TextTitle='Phone Number' placeholder='your password' iconNameLeft='phone-outline' iconSize={20}/>    
            <Input TextTitle='Birth Date' placeholder='your password' iconNameLeft='calendar-range' iconSize={20}/>  
            <Input TextTitle='Gender' placeholder='your gender' iconNameLeft='account' iconSize={20}/>  
            <Input TextTitle='Password' placeholder='your password' iconNameLeft='lock-outline' iconSize={20}  value={password}  onChangeText={setPassword} error={passwordError}/> 
                <View>{passwordError?<Text style={{color:'red', fontSize:11, paddingHorizontal:20,paddingBottom:7}}> {passwordError}</Text>:null}</View>   
            <Input TextTitle=' Confirm Password' placeholder='your password' iconNameLeft='lock-outline' iconSize={20}/>        
        </View>

        <View>
            <View style={styles.button}>
                <Button Word='Sign Up' onPress={handlesSubmit}/>
            </View>
        </View>
        <View style={styles.textContainer}>
            <View style={ styles.textContainer1}>
                <Text style={styles.text1}> By Signing up I accept</Text>
                <Text style={styles.text2}> terms of use</Text>
                <Text style={styles.text1}> and</Text>
                <Text style={styles.text2}> privacy policy</Text>
            </View>
        </View>
        <View >
            <View>
                 <IconWord text1='or sign in with' text2=' Google' text3='Watch Movie' icon1='google' icon2='facebook' size='15' iconColor='#C2C5C6'/>
            </View>
        </View>
    </View>
  )
}

// the styling of the sign up component

const styles=StyleSheet.create({
    button:{
        paddingTop:7
    },
    inputs:{
      paddingTop:7,   
    },
   
    textContainer1:{
        display:'flex',
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       paddingBottom:6
    },
    text1:{
        fontSize:12,
        color:'#C2C5C6'
    },
    text2:{
        fontSize:12,
        color:'#ddbd43',
    }
})