import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Sign from './sign-in';
// import {Icons} from 'react-icons-elements';
import Shipping from './shipping';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator();
export default function App() {
  return (
    // <Sign/>
    // <Shipping/>

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='shipping' component={Shipping} options={{headerShown:false}}/>
        <Stack.Screen name='sign' component={Sign} options={{headerShown:false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

