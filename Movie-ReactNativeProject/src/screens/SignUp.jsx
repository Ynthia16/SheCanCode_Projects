import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Input from '../components/Input.jsx';
import IconWord from '../components/IconWord.jsx';
import ButtomText from '../components/ButtomText.jsx';
import Button from '../components/button.jsx';
import Navigate from '../components/Navigate.jsx';

export default function SignUp({navigation}) {
    const height=Dimensions.get('screen').height;
    const width=Dimensions.get('screen').width;
  return (
    <View style={{height:height, width:width, backgroundColor:'#26282c'}}>
        <View style={styles.navigate}>
            <Navigate text='Sign Up' iconName='arrowleft' size='18' color='white' onPress={()=>navigation.navigate('SignIn')}/>
        </View>
        <View style={styles.inputs}>
            <Input TextTitle='Email Address' placeholder='email' iconNameLeft='email-outline' iconSize={20}/>
            <Input TextTitle='Phone Number' placeholder='your password' iconNameLeft='phone-outline' iconSize={20}/>    
            <Input TextTitle='Birth Date' placeholder='your password' iconNameLeft='calendar-range' iconSize={20}/>  
            <Input TextTitle='Gender' placeholder='your gender' iconNameLeft='account' iconSize={20}/>  
            <Input TextTitle='Password' placeholder='your password' iconNameLeft='lock-outline' iconSize={20}/>  
            <Input TextTitle=' Confirm Password' placeholder='your password' iconNameLeft='lock-outline' iconSize={20}/>        
        </View>

        <View>
            <View style={styles.button}>
                <Button Word='Sign Up'/>
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