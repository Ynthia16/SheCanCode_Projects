import React, {useContext} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SeriesScreen from '../screens/TopNavScreens/SeriesScreen';
import FeaturesScreen from '../screens/TopNavScreens/FeaturesScreen';
import FilmsScreen from '../screens/TopNavScreens/FilmsScreen';
import NewReleaseScreen from '../screens/TopNavScreens/NewReleaseScreen';
import OriginalsScreen from '../screens/TopNavScreens/OriginalsScreen';
import HomeScreen from '../screens/HomeScreen';
import { ChangeModeIntoWhite } from '../components/contextContainer.jsx';

const Tab = createMaterialTopTabNavigator();

 export default function TopNavigation() {
  const {whiteMode,HandleModeChange}= useContext(ChangeModeIntoWhite)
  return (
    
    <Tab.Navigator screenOptions={{tabBarIndicatorStyle:{backgroundColor:'#f9be02', width:50,marginLeft:45},tabBarStyle:{backgroundColor:whiteMode? '#ffffff':'#1f2123'}, tabBarScrollEnabled: true}} overScrollMode={"always"} >
      <Tab.Screen name="Features" component={HomeScreen} options={{tabBarLabelStyle:{color:whiteMode? 'black':'white'}}} />
      <Tab.Screen name="Series" component={SeriesScreen}  options={{tabBarLabelStyle:{color:whiteMode? 'black':'white'}}}/>
      <Tab.Screen name="Films" component={FilmsScreen}  options={{tabBarLabelStyle:{color:whiteMode? 'black':'white'}}}/>
      <Tab.Screen name="Originals" component={OriginalsScreen}  options={{tabBarLabelStyle:{color:whiteMode? 'black':'white'}}}/>
      <Tab.Screen name="New Release" component={NewReleaseScreen} options={{tabBarLabelStyle:{color:whiteMode? 'black':'white'}}} />
    </Tab.Navigator>
   
  );
}

