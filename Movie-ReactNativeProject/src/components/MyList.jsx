import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView,ScrollView, Pressable} from 'react-native';


export default function MyList({image, movieName, movieYear, movieCategory}) {
  return (
  <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'left', gap: 10}}>
        <Image source={{uri:`https://image.tmdb.org/t/p/w500${image}`}} style={{height:200, width:100}}></Image>
        <View style={{display:'flex', gap:10}}>
        <Text>{movieName}</Text>
        <Text>{movieYear}</Text>
        <Text>{movieCategory}</Text>
        </View>
   

  </View>
  )
}
