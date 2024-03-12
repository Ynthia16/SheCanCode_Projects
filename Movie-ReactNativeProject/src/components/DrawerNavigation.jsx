import React, {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon} from 'react-native';
import MoreScreen from '../screens/MoreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DrawerContent from './DrawerContent';




export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator();
    
  return (
      
    <Drawer.Navigator drawerContent={props=> <DrawerContent {...props}/>} initialRouteName="MoreScreen"  screenOptions={{ headerShown:false, drawerActiveTintColor:'#B19032',  headerStyle:{height:60}, drawerStyle:{backgroundColor:'#fcfcfc', width:250, paddingTop:50,paddingHorizontal:10,
    
    }}}>
        {/* <Drawer.Screen name="Edit Profile" component={ProfileScreen} options={{drawerLabelStyle:{fontSize:16}, headerTitleAlign:'left', headerTitle:'More'}} /> */}
        <Drawer.Screen name="My Profile" component={MoreScreen}  options={{drawerLabelStyle:{fontSize:16}, }} />
    </Drawer.Navigator>
  )
}
