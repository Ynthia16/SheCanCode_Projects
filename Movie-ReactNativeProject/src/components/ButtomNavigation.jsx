import React, {useContext,useState}from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Dimensions, SafeAreaView,ScrollView, Pressable,Button} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import { AntDesign,Feather,MaterialCommunityIcons  } from '@expo/vector-icons';
import SearchScreen from '../screens/SearchScreen';
import MyListScreen from '../screens/MyListScreen';
import MoreScreen from '../screens/MoreScreen';
import ActionScreen from '../screens/ActionScreen';
// import ProfileScreen from '../screens/ProfileScreen';
import DrawerNavigation from './DrawerNavigation';
import MyTabs from './TopNavigation';
import MuviText from './MuviText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconButton, Colors } from 'react-native-paper';
import { ChangeModeIntoWhite } from '../components/contextContainer.jsx';
import TopNavigation from './TopNavigation';
import Modal from 'react-native-modal';


export default function ButtomNavigation() {

    const Tab = createBottomTabNavigator();
    const {whiteMode,HandleModeChange}= useContext(ChangeModeIntoWhite)
    const [modalOn, setmodalOn]= useState(false)

    const handleModal=()=>{
      setmodalOn(!modalOn)
    }

  return (
    <Tab.Navigator initialRouteName='HomeScreen' screenOptions={{tabBarShowLabel:false,tabBarStyle:{backgroundColor:'#1f2123',position:'absolute',display:'flex', justifyContent:'space-between',alignItems:'center', borderTopWidth:0}}}>
        <Tab.Screen name='HomeScreen' component={TopNavigation}  options={{
          headerStyle:{backgroundColor: whiteMode? '#ffffff':'#1f2123', height:70},
          headerTitle:'',
          headerLeft:()=>{
          return(
            <View style={{paddingHorizontal:16,
                    backgroundColor:whiteMode? '#ffffff':'#1f2123'
                    }}>
              <MuviText/> 
            </View>
            
          )
          },
          headerRight:()=>{ 
          return (
          <View style={{display:'flex',
          flexDirection:'row',
          alignItems:'center',
          gap:10,
          justifyContent:'center',}}>
          <Feather name='bookmark' color={whiteMode? 'black':'#D7D9D6'} size={22}/>
          <IconButton icon='bell-ring'color={whiteMode? 'black':'#D7D9D6'}size={22} onPress={handleModal}/>
          <Modal visible={modalOn} backdropColor='white' backdropOpacity={0.8}>
            <View style={{ height:180,gap:15, paddingVertical:30, paddingHorizontal:10,  backgroundColor:whiteMode? 'black':'white', marginVertical:200, marginHorizontal:40, borderRadius:20}}>
              <Text style={{fontSize:18, textAlign:'center',color:whiteMode? '#D7D9D6':'black' }}> Welcome To The Movie App</Text>
              <Text style={{fontSize:18, textAlign:'center', color:whiteMode? '#D7D9D6':'black' }}> Have Fun</Text>
              <Pressable  onPress={handleModal}> 
              <Text style={{ color:'#f9be02', fontSize:20, textAlign:'center', paddingTop:30}}> OK </Text>
              </Pressable>
            </View>
          </Modal>
          <IconButton icon= {whiteMode?'lightbulb':'lightbulb-off'} size={27} onPress={HandleModeChange}/>
          </View>)},
          
          tabBarIcon:(({focused})=> <AntDesign name="home" size={25} style={{color:focused? '#f9be02' :'white'}} /> ) }}/>
        {/* <Tab.Screen name='HomeScreen' component={HomeScreen}  options={{headerShown:false,tabBarIcon:(({focused})=> <AntDesign name="home" size={25} style={{color:focused? '#f9be02' :'white'}} /> ) }}/> */}
        <Tab.Screen name='SearchScreen' component={SearchScreen} options={{headerShown:false, tabBarIcon:(({focused})=> <AntDesign name="search1" size={25} style={{color:focused? '#f9be02' :'white'}} /> ) }}/>
        <Tab.Screen name='MyListScreen' component={MyListScreen} options={{headerShown:false, tabBarIcon:(({focused})=> <Feather name="folder" size={25} style={{color:focused? '#f9be02' :'white'}} /> ) }}/>
        <Tab.Screen name='DrawerNavigation' component={DrawerNavigation} options={{headerShown:false, tabBarIcon:(({focused})=> <Feather name="menu" size={25} style={{color:focused? '#f9be02' :'white'}} /> ) }}/>    
    </Tab.Navigator>
  )
}

