import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function App() {
  return (
    <View >

      <View>
      <Image  source={require('./assets/pinkicon.png')}  style={{height:300 , borderTopEndRadius:60,
                    borderTopStartRadius:60}} resizeMode='cover'/>
      <StatusBar style="auto" />
      </View>
      
      {/* the main part of the mobile app  */}
      <View style={styles.wholepage}>

        <View>
          <Text style={styles.log}> Register</Text>
          <View style={styles.textinput}>
            <TextInput
              label='Username'
              mode='flat'
              underlineColor='transparent'

              style={{fontSize:'15',
                    backgroundColor:'white',
                    borderTopEndRadius:20,
                    borderTopStartRadius:20,
                    borderBottomEndRadius:20,
                    borderBottomStartRadius:20,
                    marginHorizontal:28,
                  
                }}
              left={<TextInput.Icon
              icon='account'
              padding='10'
              color='#FF9843'
              backgroundColor='#FFDD95'
              />}/>
            <TextInput
              label='email'
              mode='flat'
              underlineColor='transparent'

              style={{fontSize:'15',
                  backgroundColor:'white',
                  borderTopEndRadius:20,
                  borderTopStartRadius:20,
                  borderBottomEndRadius:20,
                  borderBottomStartRadius:20,
                  marginHorizontal:28,
                
              }}
              left={<TextInput.Icon
              icon='email'
              padding='10'
              color='#86A7FC'
              backgroundColor='#C9D7DD'
              />}
            
              />

            <TextInput  
            label='password'
            mode='flat'
            secureTextEntry
            underlineColor='transparent'
            style={{fontSize:'15',
                    backgroundColor:'white',
                    borderBottomEndRadius:20,
                    borderBottomStartRadius:20,
                    borderTopEndRadius:20,
                    borderTopStartRadius:20,
                    marginHorizontal:28,
                }}
            left={<TextInput.Icon
              icon='lock-outline'
              color='#86A7FC'
              backgroundColor='#C9D7DD'
               
              />} />

            

          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.login}> Register</Text>
          </TouchableOpacity>
        </View>

          {/* the footer part of the mobile app  */}
        <View style={styles.icons}>
            <Ionicons name='logo-facebook' size='26' style={{color:'#86A7FC',  backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />
            <MaterialCommunityIcons name='google' size='26' style={{color:'#FF9843', backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />
            <AntDesign name='apple1' size='26' style={{ backgroundColor:'#E5E1DA' ,padding:6, borderRadius:'18', overflow:'hidden'}} />
        </View>
      </View>
    </View>
  );
}






// THE STYLING PART OF THE MOBILE PART

const styles = StyleSheet.create({
 
 wholepage:{
    position:'absolute',
    top:300,
    // right:100,
    width:'100%',
    // width:320,
    // gap:15,
    backgroundColor:'#F3F3F3',
    outline:'none',
    // marginHorizontal:30,
    borderBottomEndRadius:60,
    borderBottomStartRadius:60,
  },



  log:{
    textAlign:'center',
    fontSize:23,
    fontWeight:'500',
    marginTop:3,
    marginBottom:15,

  },
  textinput:{
    gap:12,
  },
  login:{
    backgroundColor:'black',
    color:'white',
    paddingHorizontal:30,
    paddingVertical:10,
    borderWidth:3,
    borderRadius:20,
    overflow:'hidden',
    textAlign:'center',
    marginHorizontal:28,
    marginTop:15,
},
  icons:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    paddingVertical:20,
    gap:20,
  },
});
