import { StatusBar } from 'expo-status-bar';
import {  Text, View, Image  } from 'react-native';
import {styles} from './style';
import {Icon} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons'


export default function App() {
  return (
    <View style={styles.wholePage} >

      <Text style={styles.header}>Text to image</Text>
      
      <StatusBar style="auto" />
      <View style={styles.flexContainer}>
        <View style={styles.flexPackage}>
          <View style={styles.icons}>
          <AntDesign name="heart" size='25' color='#9B4444'  overflow='hidden'/>
          <MaterialIcons name="download-for-offline" size='25' color='#9B4444'  overflow='hidden'/>
          </View>
          <Image source={require('./assets/pic1.jpg')} style={{width:170, height: 200,borderRadius:30}}/>
        </View>
      
        <View  style={styles.flexPackage}>
          <View style={styles.icons}>
          <AntDesign name="heart" size='25' color='#9B4444'  overflow='hidden'/>
          <MaterialIcons name="download-for-offline" size='25' color='#9B4444'  overflow='hidden'/>
          </View>
          <Image source={require('./assets/pic2.jpg')} style={{width: 170, height: 200, borderRadius:30}}/>
        </View>

        <View  style={styles.flexPackage}>
          <View style={styles.icons}>
          <AntDesign name="heart" size='25' color='#9B4444'  overflow='hidden'/>
          <MaterialIcons name="download-for-offline" size='25' color='#9B4444'  overflow='hidden'/>
          </View>
          <Image source={require('./assets/pic3.jpg')} style={{width: 170, height: 200, borderRadius:30}}/>
        </View>

        <View style={styles.flexPackage}>
          <View style={styles.icons}>
          <AntDesign name="heart" size='25' color='#9B4444'  overflow='hidden'/>
          <MaterialIcons name="download-for-offline" size='25' color='#9B4444'  overflow='hidden'/>
          </View>
          <Image source={require('./assets/pic4.jpg')} style={{width: 170, height: 200, borderRadius:30}}/>
        </View>
        
      </View>
    </View>
  );
}


