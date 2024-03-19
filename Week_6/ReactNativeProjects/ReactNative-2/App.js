import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput,TouchableOpacity} from 'react-native';
import {styles} from './style.js';

export default function Nav() {
  return (
    <View style={styles.wholePage}> 

      <View style={styles.navbar}>
        <Text style={styles.text}>Todo</Text>
        <StatusBar style="auto" />
      </View>

    
      <View  style={styles.bodyPart}>
        <Text style={styles.bodyHeader}> Todo list items</Text>

        <View style={styles.inputWhole}>

          <View >
              <TouchableOpacity style={styles.input}>
              <Text style={styles.inputText}>1</Text>
            <Text style={styles.inputText}> Cleaning</Text>
            <StatusBar style="auto" />
            </TouchableOpacity>
          </View>

          <View >
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>1</Text>
            <Text style={styles.inputText}> Cleaning</Text>
            <StatusBar style="auto" />
          </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>1</Text>
            <Text style={styles.inputText}> Cleaning</Text>
            <StatusBar style="auto" />
          </TouchableOpacity>
          </View>

          <View >
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>1</Text>
            <Text style={styles.inputText}> Cleaning</Text>
            <StatusBar style="auto" />
          </TouchableOpacity>
          </View>
      
        </View>
        </View>
        <View style={styles.footerWhole}>
          <View  style={styles.footer}>
            <TextInput style={styles.footerText}> Enter new todo item</TextInput>
          </View>
          <View>
           <TouchableOpacity style={styles.button}> 
            <Text>
            Add todo
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </View>
  );

  
}

// const Input = () =>{
//   return (
//     <View style={inputs.inputWhole}>
//       <Text> Todo list items</Text>

//       <View style={inputs.input}>
//       <Text>1</Text>
//       <Text> Cleaning</Text>
//       <StatusBar style="auto" />
//       </View>

//       <View style={styles.input}>
//       <Text>1</Text>
//       <Text> Cleaning</Text>
//       <StatusBar style="auto" />
//       </View>

//       <View style={styles.input}>
//       <Text>1</Text>
//       <Text> Cleaning</Text>
//       <StatusBar style="auto" />
//       </View>

//       <View style={styles.input}>
//       <Text>1</Text>
//       <Text> Cleaning</Text>
//       <StatusBar style="auto" />
//       </View>
      
//     </View>
//   );
// }



// const Footer= () =>{
//   return (
//     <View style={styles.footer}>
//       <View>
//         <Text> Enter new todo item</Text>
//       </View>
//       <View>
//       <Pressable> Add todo</Pressable>
//       </View>
//     </View>
//   );
// }


// ----the styles----

// const styles = StyleSheet.create({

//   wholePage:{
//     flex:1,
//     backgroundColor:'white',
//     justifyContent: 'space-between',
    
//   },
//   navbar: {
//     flex: 0,
//     height:70,
//     backgroundColor: 'orange',
//     alignItems: 'start',
//     justifyContent: 'center',
//     paddingLeft:280,
//     marginTop:20,
//   },
//   text:{
//     fontSize:28,
//     color:'white',
//   },
//   bodyPart:{
//     flex:3,
//     marginHorizontal:25,
    
//   },
//   bodyHeader:{
//     fontSize:16,
//     paddingTop:40,
//     paddingBottom:20,
//   },
//     inputWhole:{
//       gap:18,
      
//     },

//     input:{
//       flexDirection:'row',
//       display:'flex',
//       gap:10,
//       borderWidth:2,
//       borderStyle:'dotted',
//       borderRadius:12,
//       padding:12,
//       backgroundColor:'#E8E8E8',
    
      
//     },
//     inputText:{
//       fontSize:14,
//     },

//     footerWhole:{
//       marginVertical:10,
//       flexDirection:'row',
//       display:'flex',
//       alignItems:'center',
//       justifyContent:'space-between',
//       gap:5,
//       padding:15,
//       marginHorizontal:15,
//     },

//     footer:{
//       flex:3,
//       padding:12,
//       marginLeft:1,
//       borderBottomColor: 'black',
//       borderBottomWidth: 3,
//       borderRadius:10,
//       backgroundColor:'#e8e8e8',
//       opacity: 0.4,    
//     },
//     footerText:{
//       opacity: 0.5,
//     },
//     button:{
//       backgroundColor:'orange',
//       paddingVertical:15,
//       paddingHorizontal:5,
//       borderRadius:10,
//     },
//   })
