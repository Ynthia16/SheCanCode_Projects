import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView,ScrollView, FlatList,Image} from 'react-native';
export default function Movies({title,image}) {
  return (
    <View>
        <View >
            <Text> {title}</Text>
            <Image source={{uri:image}}></Image>
        </View>
    </View>
  )
}

// the styling of the movies part 

const styles=StyleSheet.create({

})