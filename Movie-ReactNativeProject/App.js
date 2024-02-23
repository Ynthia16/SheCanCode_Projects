import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Page2 from './src/screens/Splash';
import Page3 from './src/screens/GetStarted';
import Page4 from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import HomeTitles from './src/components/HomeTitles';
import { ScrollView } from 'react-native';



const Stack= createNativeStackNavigator();
export default function App() {
  // const container=require('./src/JsonData/HomeTitle.json')
  // const container=require('../JsonData/HomeCate.json')
  return (
    
      // <Page2/>
      // <Page3/>
        // <Page4/>
          // <SignUp/>
        // <SignIn/>
        <HomeScreen/>
    

      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name='Page2' component={Page2} options={{headerShown:false}}/>
      //     <Stack.Screen  name='Page3' component={Page3} options={{headerShown:false}}/> 
      //    <Stack.Screen  name='Page4' component={Page4}  options={{headerShown:false}}/>
      //    <Stack.Screen  name='SignIn' component={SignIn} options={{title:'',headerBackTitle:'Sign In',headerShown:false}}  />
      //       <Stack.Screen  name='SignUp' component={SignUp}  options={{headerShown:false}}/>
      //           <Stack.Screen  name='HomeScreen' component={HomeScreen} />        
      //   </Stack.Navigator>
      // </NavigationContainer>
    
  );
}


