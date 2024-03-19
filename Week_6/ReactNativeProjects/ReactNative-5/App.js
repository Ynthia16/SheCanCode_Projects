import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function App() {
  return (
     <View >
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}

      {/* the start of the new project i did */}

    <View style={styles.wholepage}>
      <View style={styles.image}>
      <Image source={require('./assets/purpleicon.png')} style={{height:300, width:'100%', borderTopEndRadius:30,
    borderTopStartRadius:30,marginTop:20 }} />
      <StatusBar style="auto" />
      </View>
      {/* the body part of the mobile app */}

      <View style={ styles.bodypart}>
        <View style={styles.part1}>
          <Text style={styles.log}> Login </Text>
          <View style={styles.textinput}>
            <TextInput
              label='email'
              mode='flat'
              // underlineColor='transparent'

              style={{fontSize:'15',
                    backgroundColor:'white',
                    borderTopEndRadius:20,
                    borderTopStartRadius:20,
                }}
              left={<TextInput.Icon
              icon='account-outline'
              padding='10'
              color='#FF9843'
              backgroundColor='#FFDD95'
              />}/>
            
            <TextInput  
            label='password'
            mode='flat'
            secureTextEntry
            underlineColor='transparent'
            style={{fontSize:'15',
                    backgroundColor:'white',
                    borderBottomEndRadius:20,
                    borderBottomStartRadius:20,
                }}
            left={<TextInput.Icon
              icon='lock-outline'
              color='#86A7FC'
              backgroundColor='#C9D7DD'
               
              />} />
          </View>
        </View>

        <View style={styles.part2}>
          <Text style={styles.password}>
            Forgot password?
          </Text>
          <TouchableOpacity>
            <Text style={styles.login}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

          {/* the footer part of the mobile app */}

          <View style={styles.icons}>
            <Ionicons name='logo-facebook' size='26' style={{color:'#86A7FC',  backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />
            <MaterialCommunityIcons name='google' size='26' style={{color:'#FF9843', backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />
            <AntDesign name='apple1' size='26' style={{ backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />
          </View>
      </View>
    </View>

    </View>

    
  );
}

// the styles of the mobile app 


const styles = StyleSheet.create({

  log:{
    textAlign:'center',
    fontSize:23,
    fontWeight:'500',

  },
  bodypart:{
    backgroundColor:'#F6F6F6',
    borderWidth:3,
    position:'absolute',
    top:310,
    width:'100%',
    borderColor:'#F6F6F6',
    
    borderTopEndRadius:50,
    borderTopStartRadius:50,
    borderBottomEndRadius:50,
    borderBottomStartRadius:50,
    overflow:'hidden',
  },
  part1:{
    marginHorizontal:27,
    marginTop:40,

  },
  textinput:{
    
    overflow:'hidden',
    marginTop:20,
    paddingHorizontal:15,
  },
  part2:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:40,
      marginVertical:20,
      alignItems:'center',

  },
  password:{
      color:'#86A7FC',
      fontWeight:'400',

  },
  login:{
      backgroundColor:'black',
      color:'white',
      paddingHorizontal:30,
      paddingVertical:8,
      borderWidth:3,
      borderRadius:20,
      overflow:'hidden',
  },
  icons:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:18,
    gap:20,
  },

 
});
