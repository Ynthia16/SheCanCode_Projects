import React, {useContext} from 'react';
import { StyleSheet, Text, View,StatusBar, Dimensions, Image, SafeAreaView,Pressable, TouchableOpacity} from 'react-native';
import { Feather,MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Firebase_Auth } from '../../firebaseConfig.js';
import { IconButton, Icon } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { ChangeModeIntoWhite } from '../components/contextContainer.jsx';
import { useNavigation,DrawerActions } from '@react-navigation/native';


export default function MoreScreen({navigation}) {
  const height=Dimensions.get('screen').height;
  const width=Dimensions.get('screen').width;
  const Navigation = useNavigation()

  const Autho = Firebase_Auth
  const HandleSignOut=async()=>{
    const signOut= await Autho.signOut()
    // console.log(signOut)
    navigation.navigate('SignIn')
  }

  const {whiteMode,HandleModeChange}= useContext(ChangeModeIntoWhite)

  return (
    <View style={{backgroundColor:whiteMode?'#fcfcfc':'#2B2C31',height:height, width:width}}>
      <StatusBar style='auto'/> 
        <View style={{ display:'flex',
                      flexDirection:'row',
                      gap:180,
                      paddingTop:23,
                      paddingBottom:15,
                      paddingHorizontal:7,
                      backgroundColor:whiteMode? '#ffffff':'#1f2123'}}>
            <View style={{ display:'flex',
                      alignItems:'center',
                      justifyContent:'start',
                      flexDirection:'row',}}>
            <IconButton icon='menu' size={25} onPress={()=>{Navigation.dispatch(DrawerActions.openDrawer())}}/>
            <Text style={{color:whiteMode? 'black':'#FCFDFC', fontSize:23}}> More</Text>
            </View>
            <IconButton icon= {whiteMode?'lightbulb':'lightbulb-off'} size={25} onPress={HandleModeChange} style={{}}/>
        </View>

        <View style={{display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      gap:20,
                      backgroundColor:whiteMode? '#fafafa':'#25262B',
                      paddingVertical:20,}}>
          <View>
            <Image source={require('../../assets/cynthia.jpg')} style={{height:70,width:70,resizeMode:'cover',borderRadius:10}}></Image>
          </View>
          <View style={{gap:5}}>
            <Text style={{color:whiteMode? 'black':'#D7D9D6',paddingLeft:20,fontSize:16}}>Cynthia Umugwaneza </Text>
            <Text style={{color:'#6B6A6B',fontSize:15}}>c.umugwaneza@gmail.com</Text>
            <Pressable onPress={()=>navigation.navigate('ProfileScreen')}> 
              <Text style={{color:'#B19032',paddingLeft:50, fontSize:15}}>Edit profile</Text>
            </Pressable>
          </View>

        </View>
        <View>
        <View style={{paddingHorizontal:25, paddingTop:25, gap:25}}>
          <View style={{display:'flex', alignItems:'center',justifyContent:'start', flexDirection:'row', gap:10}}>
            <Feather name="inbox" size={22} color={whiteMode? 'black':'#D7D9D6'}/>
            <Text style={{fontSize:15,color:whiteMode? 'black':'#D7D9D6'}}> Inbox</Text>
          </View>
          <View style={{display:'flex', alignItems:'center',justifyContent:'start', flexDirection:'row', gap:10}}>
            <MaterialCommunityIcons name="account-settings" size={22} color={whiteMode? 'black':'#D7D9D6'} />
            <Text style={{fontSize:15,color:whiteMode? 'black':'#D7D9D6'}}> Account Settings</Text>
          </View>
          <View style={{display:'flex', alignItems:'center',justifyContent:'start', flexDirection:'row', gap:10}}>
            <FontAwesome5 name="globe" size={22} color={whiteMode? 'black':'#D7D9D6'} />
            <Text style={{fontSize:15,color:whiteMode? 'black':'#D7D9D6'}}> Language</Text>
          </View>
          <View style={{display:'flex', alignItems:'center',justifyContent:'start', flexDirection:'row', gap:10}}>
            <Feather name="help-circle" size={22} color={whiteMode? 'black':'#D7D9D6'} />
            <Text style={{fontSize:15,color:whiteMode? 'black':'#D7D9D6'}}> Help, FAQ</Text>
          </View>
        </View>
        <View style={{display:'flex', alignItems:'start',paddingHorizontal:25,paddingTop:20, justifyContent:'center',gap:5}}>
          <Text style={{fontSize:14,color:'#6B6A6B'}}> Terms & Condition</Text>
          <Text style={{fontSize:14,color:'#6B6A6B'}}> Privacy & Policy</Text>
        </View>

        <View >
          <TouchableOpacity onPress={HandleSignOut} style={{paddingHorizontal:20,paddingVertical:30}}>
          <Text style={{borderWidth:1,textAlign:'center',color:'#A35A56',fontSize:15, paddingVertical:7, borderColor:'#41464A'}}> Log Out</Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}


