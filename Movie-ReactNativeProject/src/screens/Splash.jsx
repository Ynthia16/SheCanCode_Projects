import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Pressable, Image} from 'react-native';
import React from 'react';

export default function Page2( {navigation}) {
  return (
    <View style={styles.container}>
         <StatusBar BarStyle="light" />
         <SafeAreaView>
        <View style={styles.containerText}>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate('Page3') }>
                <Image source={require('../../assets/pic1.png')} />
            </Pressable>           
        </View>
        </SafeAreaView>
    
    </View>
  );
}


// the styling part of the page

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#1f2123',
    
  },
  containerText:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:250,
  },
});