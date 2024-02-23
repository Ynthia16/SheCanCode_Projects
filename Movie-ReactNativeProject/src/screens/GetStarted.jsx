import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View} from 'react-native';
import { Dimensions } from 'react-native';
import Button from '../components/button';

const height= Dimensions.get('screen').height;
const width= Dimensions.get('screen').width;
export default function Page3({navigation}) {

  return (
    <View style={styles.container}>
         <StatusBar style='light' />
        
          <View style={styles.container1}>
            <ImageBackground
              source={require('../../assets/joker.jpg')}  
               resizeMode="cover" style={{height:height, width:width}}  >
            <View style={{height:height, width:width, backgroundColor:'rgba(0,0,0,0.8)'}} >
              <View style={styles.textcontainer}> 
                <Text style={styles.text1}> Enjoy your favorite movie everywhere</Text>
                <Text style={styles.text2}> Browse through our collections and discover hundreds of movies and Series that you'll love!</Text>
              </View>
            </View>
            </ImageBackground>        
          </View>

          <View style={styles.button}>
            <Button Word='Get Started' onPress={() => navigation.navigate('Page4') }/>
          </View>
    </View>
  )};


// the styling part of the mobile app 

const styles = StyleSheet.create({
  container: {
    flex:1,  
  },
  container1:{
    flex:3,
  },
  pressable:{
    backgroundColor:'#f9be02',
    marginHorizontal:20,
    marginBottom:20,
    borderRadius:10,
    overflow:'hidden',
  },
  button:{
    paddingBottom:10,
  },
  textcontainer:{
      paddingVertical:280,
      textAlign:'center',
  },
  text1:{
    fontSize:26,
    marginHorizontal:20,
    marginVertical:20, 
    textAlign:'left',
    color:'white',
    fontWeight:'400',
    opacity:0.6,
  },
  text2:{
    fontSize:18,
    marginHorizontal:20,
    fontWeight:'200',
    color:'white',
    opacity:0.5,
  },
  text3:{
    textAlign:'center',
    alignItems:'center',
    paddingVertical:14,
    fontSize:18,
    
  },
});