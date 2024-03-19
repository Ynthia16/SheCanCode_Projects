
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Page2 from './src/screens/Splash';
import Page3 from './src/screens/GetStarted';
import Page4 from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ButtomNavigation from './src/components/ButtomNavigation';
import SearchScreen from './src/screens/SearchScreen';
import MoreScreen from './src/screens/MoreScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MyListScreen from './src/screens/MyListScreen';
import ActionScreen from './src/screens/ActionScreen';
import ThemeChangeModeIntoWhite from './src/components/contextContainer';

const Stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <ThemeChangeModeIntoWhite>
      <NavigationContainer>
       <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown:false}}>
         <Stack.Screen name='Page2' component={Page2} />
         <Stack.Screen  name='Page3' component={Page3} /> 
         <Stack.Screen  name='Page4' component={Page4}  />
         <Stack.Screen  name='SignIn' component={SignIn} options={{title:'',headerBackTitle:'Sign In',headerShown:false}}  />
         <Stack.Screen  name='SignUp' component={SignUp}  /> 
         <Stack.Screen  name='ActionScreen' component={ActionScreen}  /> 
         <Stack.Screen  name='MoreScreen' component={MoreScreen} /> 
         <Stack.Screen  name='ProfileScreen' component={ProfileScreen}  /> 
         <Stack.Screen name='Home' component={ButtomNavigation} options={{}}/>
       </Stack.Navigator>
      </NavigationContainer>
      </ThemeChangeModeIntoWhite>
   
  );
}
