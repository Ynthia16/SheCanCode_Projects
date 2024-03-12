import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Feather,Entypo, AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View , Pressable, TouchableOpacity} from 'react-native';
import { Firebase_Auth } from '../../firebaseConfig.js';

export default function DrawerContent({navigation}) {

    const Autho = Firebase_Auth
    const HandleSignOut=async()=>{
      const signOut= await Autho.signOut()
      // console.log(signOut)
      navigation.navigate('SignIn')
    }

  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView>
        <View>
            <View style={{gap:10}}>
                <Pressable style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'start', gap:13, paddingHorizontal:10,  paddingVertical:10, borderRadius:10}} onPress={()=>{navigation.navigate('HomeScreen')}}> 
                <AntDesign name="home" size={20} color="black" /> 
                <Text style={{fontSize:17, color:'#B19032'}}>Home </Text>
                </Pressable>

                <Pressable style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'start', gap:13, paddingHorizontal:10,  paddingVertical:10, borderRadius:10}} onPress={()=>{navigation.navigate('ProfileScreen')}}>
                <MaterialCommunityIcons name="account" size={20} color="black" />
                <Text style={{fontSize:17, color:'#B19032'}}> Profile</Text>
                </Pressable>
                <Pressable style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'start', gap:13, paddingHorizontal:10,  paddingVertical:10, borderRadius:10}} onPress={()=>{navigation.navigate('HomeScreen')}}>
                <Feather name="settings" size={20} color="black" />
                <Text style={{fontSize:17, color:'#B19032'}}> Settings</Text>
                </Pressable>
            
            </View>
            <View>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'start', gap:13, paddingHorizontal:10,paddingVertical:10, marginTop:330}}> 
            <Entypo name="log-out" size={20} color="black" />
            <Pressable onPress={HandleSignOut}>
                <Text style={{fontSize:17, color:'#B19032'}}> Sign Out </Text>
            </Pressable>
            
            </View>
            </View>
        </View>
        </DrawerContentScrollView>
        {/* <View>
 
        <DrawerItem 
        
        label='Sign Out'
        />
        </View>  */}
        </View>
        

)}
