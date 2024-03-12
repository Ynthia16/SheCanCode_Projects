import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState,useContext} from 'react'
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView,ScrollView, FlatList, TouchableOpacity, Pressable} from 'react-native';
import {TextInput} from 'react-native-paper'
import HomeTitles from '../components/HomeTitles';
import MovieImages from '../components/MovieImages';
import axios from 'axios';
import { ChangeModeIntoWhite } from '../components/contextContainer.jsx';

export default function SearchScreen({navigation}) {
    const container=require('../JsonData/HomeTitle.json')
    const height=Dimensions.get('screen').height;
    const width=Dimensions.get('screen').width;
    const[searchWord, setsearchWord]=useState('')
    const[searchedResult, setsearchedResult]=useState([])
    const {whiteMode,HandleModeChange}= useContext(ChangeModeIntoWhite)
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTNkMmMyMjFiYWJiMWNmMGEwMTQwNzU4YzEyN2RjZSIsInN1YiI6IjY1ZDg2YzY1YjIzNGI5MDE4NmM3OGNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n46-2a4OloNnTTWInSmNx5m-c36by7pycAV-Z1sGa3U'
        }
      };

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchWord}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response.results)
            setsearchedResult(response.results)
        })
        .catch(err => console.error(err));
    },[searchWord])


  return (
    <View style={{backgroundColor:whiteMode? 'white':'#26282c', height:height, width:width}}>
        <StatusBar style='light'/>
        <SafeAreaView>
            <View style={{backgroundColor:whiteMode? 'white':'#26282c'}}>
                <View style={{paddingHorizontal:20,paddingTop:20}}>
                    <TextInput placeholder='Seach Movie Title' placeholderTextColor='#8D8E90' mode='flat' textColor={whiteMode? '#26282c':'white'} underlineColor='transparent' value={searchWord} onChangeText={setsearchWord}
                    style={{paddingHorizontal:7, backgroundColor:whiteMode? 'white':'#26282c'}} theme={{colors:{primary:'#1f2123'}}}
                        right={<TextInput.Icon icon='magnify' size={25} color='#f9be02' />}
            
                    />

                </View>
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.scroll}>
                        {container.map((item)=>{ 
                        return(<HomeTitles key={item.key} text={item.name}/>)
                        })}
                    </View>
                </ScrollView> */}
            </View>
            <View style={{paddingTop:50}}>
                {searchWord?
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:10}}> 
                {searchedResult.map((item)=>{

                 return(<Pressable onPress={()=> navigation.navigate("ActionScreen",{movieTrailer:item})}>
                    <MovieImages  key={item.id} image={item.poster_path} text={item.vote_average}/>
                 </Pressable > )
                 })}
                </View>
                </ScrollView>:

                <View style={{display:'flex', alignItems:'center'}}>
                <Image source={require('../../assets/search.png')}></Image>
                </View> 
                 }

                <View style={{display:'flex', justifyContent:'center', alignItems:'center', gap:8, paddingTop:20}}>
                    <Text style={{color:'white', fontSize:17, opacity:0.8}}> Find Your Movie</Text>
                    <Text style={{color:'white', fontSize:15, opacity:0.4}}> Search Movie, Series,Originals, as you like</Text>
                </View>
             </View>
        
        </SafeAreaView>
    </View>
  )
}

// the styling part of the search screen 

const styles=StyleSheet.create({
    scroll:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:35,
        paddingTop:25,
        paddingHorizontal:18,
        backgroundColor:'#1f2123',
        paddingBottom:10
      },
})