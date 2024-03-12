import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView,ScrollView, FlatList,Image} from 'react-native';
export default function MovieImages({text,image}) {
  return (
    <View style={styles.container}>
        
        <View style={styles.container1}>
            
            <Image style={styles.image} source={{uri:`https://image.tmdb.org/t/p/w500${image}`}}></Image>
            <Text style={styles.text}>{text}</Text>
           
        </View>
      
    </View>
  )
}

// the styling part of the movie image page

const styles=StyleSheet.create({
  
    container1:{
       position:'relative',
        display:'flex',
    },
    image:{
        height:150,
        width:250,
        borderRadius:15,
        // position:'relative',
    },
    text:{
        backgroundColor:'#f9be02',
        position:'absolute',
        right:10,
        top:10,
        paddingHorizontal:8,
        borderRadius:7,
        overflow:'hidden'
    }
})