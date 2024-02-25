import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import {TextInput,Icon} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import { TouchableOpacity,Image } from 'react-native';
import { TouchableHighlight } from 'react-native';


export default function App() {
const container1= require('./Card1.json')
const container2=require('./Card2.json')
const container3=require('../ReactNative-1/Card3.json')

// console.log(container2[0].image)

  return (
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.container1}>
      {/* THE HEADER  TITLE PART OF THE MOBILE APP  */}
      <View style={styles.headerpart}>
         <AntDesign name='arrowleft' size={25} style={{backgroundColor:'#dddddd', padding:7, borderRadius:20, overflow:'hidden'}} />
         <Text style={{fontSize:20, fontWeight:'600'}}> Search </Text>

         <Ionicons name='menu' size={25}/>
      </View>
      {/* the navbar of the mobile app  */}
      <View>
        <TextInput
         mode='flat'
         placeholder='Search...'
         underlineColor='transparent'
         style={{
          marginHorizontal:22,
          borderRadius:25,
          borderTopEndRadius:25,
          borderTopStartRadius:25,
          backgroundColor:'#f0f0f0',
          height:45 
         }}

         left={< TextInput.Icon 
         icon='magnify'
         size={25}
         style={{
          fontWeight:'100'
         }}
         />} 

         right={<TextInput.Icon 
          icon='menu'
          size={25}
         
         />}
         />
      </View>

      {/* the horizontal scrollview of the searching tags */}
      <View >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          {container1.map((item,index) => {
            return ( <Card1 key={item.key} Word={item.name}/>)  
          }
          )}
        </ScrollView>
      </View>

      </View>

      {/* the second container of the mobile app */}
      <ScrollView horizontal={true} contentContainerStyle={{ gap:25, paddingHorizontal:18}} showsHorizontalScrollIndicator={false}>
      {/* <View> */}
          {container3.map((item)=>{return(
            <Card3 image={item.image} key={item.key} text1={item.text1} text2={item.text2} text3={item.text3}/>
          )})}
      {/* </View> */}
      </ScrollView>


      {/* the third container of the mobile app  */}
      <View>
          <Text style={{fontWeight:'500', fontSize:18,marginHorizontal:20, marginVertical:13, }}> Product Result (43)</Text>
          <>
          <View  style={styles.container2}> 
          {container2.map((item)=>{

            return(

              <Card2  key={item.key} image={item.image} word1={item.name1} word2={item.name2}/>
            )
          }
          
          )}
          
          </View>
          </>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1:{
    flex:1,
  },
  headerpart:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:20,
    marginHorizontal:22,


  },
  // backgroundSearch:{
  //   borderWidth:2,
  //   borderRadius:10,
  //   textAlign:'center',

  // },
  allWord:{
    backgroundColor:'green',
  },
  container2:{
    // flex:2,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    // justifyContent:'center',
    gap:20,
    marginHorizontal:20,
    marginTop:10,
  },
  
}
);
