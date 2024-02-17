import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Zocial from 'react-native-vector-icons/Zocial';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import * as React from 'react';
import { TextInput, Icon,Checkbox } from 'react-native-paper';




export default function Sign() {
  return (
    <View style={styles.wholePage}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Sign In</Text>
            <Text style={styles.headerParagraph}>Welcome back! Please enter your details</Text>
            <StatusBar style="auto" />
        </View>

        <View style={styles.body}>
        
          <View style={styles.bodyInputs}>

            <TouchableOpacity >
              {/* <Zocial name='email' color={'green'} fontSize={30} />  */}
              <TextInput 
              label='email' 
              mode='flat'
              underlineColor="transparent"
              focus
              style={{
                borderTopEndRadius:20,
                borderTopStartRadius:20,
                borderRadius:20,
                marginHorizontal:26, 
                backgroundColor:'#F1EFEF',
                // underlineColor:'green', 
                // borderBottomColor:'green',
                // borderBottomWidth:0,  
                // outline: 'none',
                  
              }} 
              left={<TextInput.Icon 
                icon="email-outline"
                //  mode='outlined'  
                 color='green' 
                 style={{backgroundColor:'#C9D7DD',
                //  size:'30',
                //  underlineColor:'transparent', 
                
                 
                }}      
                    />} 
              />
                
             </TouchableOpacity>
           
        

            <TouchableOpacity>
             
              {/* <Fontisto name='locked' size='20'/> */}
              <TextInput

              // mode='offline'
              label="password"
              underlineColor="transparent"
              
              secureTextEntry
              style={{
                borderTopEndRadius:20,
                borderTopStartRadius:20,
                borderRadius:20,
                marginHorizontal:26,
                backgroundColor:'#F1EFEF',
                // pointerEvents:'none',
                         
                             
              }} 
              left={<TextInput.Icon 
                icon="lock-outline" 
                color='green'  
                style={{backgroundColor:'#C9D7DD',
                        // size:'10',
              }} 
                />}
              

              />
              
            </TouchableOpacity>

          </View>

          <View style={{ display:'flex' ,alignItems:'center', flexDirection:'row', marginLeft:20, marginTop:15, }}>
            {/* <Fontisto name='checkbox-passive'/> */}
            <Checkbox.Android status="checked" style={{ alignItems:'right',}}/>
            <Text> Remember</Text>
          </View>

        </View>
        <View style={styles.footer}>
        <View style={styles.header}>
            <Text style={styles.password}> Forgot password </Text>
              <TouchableOpacity >
              <Text  style={styles.sign}> Sign In </Text>
              </TouchableOpacity>
        </View>

        <View style={styles.account}> 
          <TouchableOpacity> 
              <Text>Create account </Text>
          </TouchableOpacity>

          <TouchableOpacity> 
              <Text style={styles.footerSign}>Sign up</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.icons}>
          <Ionicons name='logo-facebook' size='26' style={{color:'blue', backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />
          <MaterialCommunityIcons name='google' size='24' style={{color:'orange', backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />
          <AntDesign name='apple1' size='24' style={{ backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />

        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wholePage:{
    flex:1,
  },

  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'green',
    padding:30,
    gap:15,
    // marginTop:30,
    
  },
  headerTitle:{
    fontSize:25,
    fontWeight: '400',
  },
  headerParagraph:{
    fontSize:15,
    fontWeight: '200',

    
  },
  body:{
    flex:2,
  },
  bodyInputs:{
    gap:20,
  },
  // inputText:{
    // marginHorizontal:30,
    // paddingHorizontal:10,
    // flexDirection:'row',
    // alignItems:'center',
    // gap:,
    // paddingVertical:18,
    // backgroundColor:'rgb(238, 238, 238)',
    
    // borderWidth:2,
    // borderRadius:18,
    // fontWeight: '200',
  // },
  checkbox:{
      marginHorizontal:30,
      // flexDirection:'row',
    //  gap:5,
     paddingVertical:20,
  },
  
  footer:{
    flex:3,
  },

  password:{
    color:'rgb(109, 185, 239)',
  },

  sign:{
    color:'white',
    fontSize:16,
    fontWeight: '200',
    borderRadius:25,
    paddingHorizontal:130,
    paddingVertical:17,
    backgroundColor:'rgb(109, 185, 239)',
    overflow:'hidden',

  },
  account:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginHorizontal:35, 
  },
  footerSign:{
    color:'rgb(255, 164, 71)',
    backgroundColor:'rgb(238, 238, 238)',
    padding:10,
    borderRadius:16,
    // borderWidth:2,
    overflow:'hidden',
    fontSize:10,
    fontWeight: '400',
  },
  icons:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:30,
    gap:20,
    // backgroundColor:'rgb(238, 245, 255,0.8)',
    // borderWidth:3,
    // borderRadius:30,
    // borderCurve:20,

  },

});