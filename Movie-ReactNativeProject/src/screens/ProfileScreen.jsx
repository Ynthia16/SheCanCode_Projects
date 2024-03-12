import React, {useEffect} from 'react';
import { StyleSheet, Text, View,StatusBar, Dimensions,SafeAreaView,Pressable} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import Button from '../components/button';
import { Firebase_Auth } from '../../firebaseConfig.js';


export default function ProfileScreen({navigation}) {
    const height=Dimensions.get('screen').height;
    const width=Dimensions.get('screen').width;
    const Autho = Firebase_Auth

    useEffect(()=>{
            console.log(Autho.currentUser)
    },[])

  return (
    <View style={{backgroundColor:'#25262B',height:height, width:width}}>
    <SafeAreaView>
    <StatusBar style='light'/>
        <View >
            <Pressable style={styles.containerText} onPress={()=>navigation.navigate('MoreScreen')}>
            <AntDesign name="arrowleft" size={22} color="#DBB52E" />
            <Text style={{color:'#FCFDFC', fontSize:20}}> Edit Profile</Text>
            </Pressable>
        </View>
        <View >

        <View style={{display:'flex',alignItems:'center', paddingVertical:30}}>
            <ImageBackground source={require('../../assets/cynthia.jpg')} style={{height:80,width:80}} imageStyle={{opacity:0.3,resizeMode:'cover',borderRadius:10}}>
                <Feather name="camera" size={23} color="#C4AB4A" style={{position:'absolute',top:25,left:27}} />
            </ImageBackground>
        </View>
        <View style={{paddingHorizontal:20,gap:10,paddingTop:10}}>
            <TextInput 
                mode='flat'
                label='Name'
                theme={{colors:{primary:'#ECEEEF'}}}
                textColor='#ECEEEF'
                
                style={{backgroundColor:'#25262B'}}

                right={<TextInput.Icon
                    icon='account-outline'
                    size={23}
                    color='#DBB52E'
                    />}
            />
             <TextInput 
                mode='flat'
                label='Email'
                theme={{colors:{primary:'#ECEEEF'}}}
                textColor='#ECEEEF'
                style={{backgroundColor:'#25262B'}}
                right={<TextInput.Icon
                    icon='email-outline'
                    size={23}
                    color='#DBB52E'
                    />}
            />
             <TextInput 
                mode='flat'
                label='Phone Number'
                theme={{colors:{primary:'#ECEEEF'}}}
                textColor='#ECEEEF'
                style={{backgroundColor:'#25262B'}}
                right={<TextInput.Icon
                    icon='phone-outline'
                    size={23}
                    color='#DBB52E'
                    />}
            />
        </View>
        <View style={{paddingTop:180}}>
            <Button Word='Save'/>
        </View>
        </View>
    </SafeAreaView>
    </View>
  )
}

// the styling part of the profilescreen 

const styles=StyleSheet.create({
    containerText:{
        display:'flex',
        alignItems:'center',
        justifyContent:'start',
        flexDirection:'row',
        paddingTop:30,
        paddingBottom:15,
        paddingHorizontal:20,
        backgroundColor:'#1f2123',
        gap:10
      },
})
