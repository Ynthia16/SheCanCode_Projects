import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView,ScrollView, FlatList} from 'react-native';
import MuviText from '../components/MuviText';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeTitles from '../components/HomeTitles';
import HomeCate from '../components/HomeCate';
import Movies from '../components/Movies';

export default function HomeScreen() {
  const height=Dimensions.get('screen').height;
  const width=Dimensions.get('screen').width;
  const container=require('../JsonData/HomeTitle.json')
  const container2=require('../JsonData/HomeCate.json')
  return (
    <ScrollView>
   <View style={{height:height, width:width, backgroundColor:'#26282c'}} >
    
    <SafeAreaView>
      <StatusBar/>
      <View style={styles.HeaderContainer}>
        <MuviText/>
        <View style={styles.iconContainer}>
          <Feather name='bookmark' color='white' size={22}/>
          <Ionicons name='notifications-outline' color='white' size={22}/>
        </View>
        
      </View>

      <ScrollView horizontal={true}>
       <View style={styles.scroll}>
        {container.map((item)=>{ 
          return(<HomeTitles key={item.key} text={item.name}/>)
          })}
       </View>
       </ScrollView>

        <ScrollView horizontal={true}>
          <View  style={styles.scroll2}>
            {container2.map((item)=>{
              return(<HomeCate key={item.key} text={item.name}/>)})}
           
          </View>
        </ScrollView>
              
        <View>
            <Movies/>
        </View>
     
    </SafeAreaView>
   </View>
   </ScrollView>
  )
}

// the styling of the homeScreen component

const styles=StyleSheet.create({
  HeaderContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:16,
    paddingTop:15,
    backgroundColor:'#1f2123',
  },
  iconContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'center',

  },
  scroll:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:35,
    paddingTop:25,
    paddingHorizontal:18,
    backgroundColor:'#1f2123',
    paddingBottom:10
  },
  scroll2:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:16,
    gap:10,
    paddingHorizontal:18
  }

})