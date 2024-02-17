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
     </View> 
  )}