import React, { useEffect, useState,linking,useContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView,ScrollView, Pressable} from 'react-native';
import MuviText from '../components/MuviText';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeTitles from '../components/HomeTitles';
import HomeCate from '../components/HomeCate';
import MovieImages from '../components/MovieImages';
import Movies from '../components/Movies';
import Octicons from 'react-native-vector-icons/Octicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChangeModeIntoWhite } from '../components/contextContainer.jsx';
import { IconButton, Colors } from 'react-native-paper';
import MyTabs from '../components/TopNavigation.jsx';
import TopNavigation from '../components/TopNavigation.jsx';



export default function HomeScreen({navigation}) {
  const height=Dimensions.get('screen').height;
  const width=Dimensions.get('screen').width;
  const container=require('../JsonData/HomeTitle.json')
  const container2=require('../JsonData/HomeCate.json')
  const container3=require('../JsonData/Movies.json')
  const container4= require('../JsonData/HomeMovie.json')
  const {whiteMode,HandleModeChange}= useContext(ChangeModeIntoWhite)

  const [movie,setMovie] = useState([]);
  const [Hotmovie,setHotMovie] = useState([]);


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTNkMmMyMjFiYWJiMWNmMGEwMTQwNzU4YzEyN2RjZSIsInN1YiI6IjY1ZDg2YzY1YjIzNGI5MDE4NmM3OGNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n46-2a4OloNnTTWInSmNx5m-c36by7pycAV-Z1sGa3U'
    }
  };

  const Getmovie =()=>{
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then((response) =>{
      setMovie(response.results)
      //  console.log(movie)
      })
    .catch(err => console.error(err));

  }

    useEffect(()=>{
      Getmovie();
      GetHotMovies();
    },[],[])



    const GetHotMovies=()=>{
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then((response) => {
          setHotMovie(response.results)})
          // console.log(Hotmovie)})
        .catch(err => console.error(err));
    }

  return (
 
   <View style={{height:height, width:width, backgroundColor:whiteMode?'#fcfcfc':'#2B2C31'}} >

      <StatusBar style='light'/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
          <View  style={styles.scroll2}>
            {container2.map((item)=>{
              return(<HomeCate key={item.id} text={item.name}/>)})}
           
          </View>
        </ScrollView>
          
        <View style={{paddingTop:15, paddingHorizontal:25}}> 
              <Movies text1='New Release' text2=' View More '/>
        </View>
        <View style={{position:'relative'}}> 
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
            {Hotmovie.map((item)=>{
              return( 
              <Pressable  onPress={()=> navigation.navigate('ActionScreen', {movieTrailer:item})} >
                  <MovieImages  key={item.id} image={item.poster_path} text={item.vote_average}/>
              </Pressable>
              
            )})}
          </View>
        </ScrollView>   

        <View style={{paddingTop:15, paddingHorizontal:25}}> 
              <Movies text1='Made for you' text2=' View More '/>
        </View> 
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
            {movie.map((item)=>{
              return( 
              <Pressable  onPress={()=> navigation.navigate('ActionScreen', {movieTrailer:item})} >
              <MovieImages   key={item.id} image={item.poster_path} text={item.vote_average}/>
              </Pressable>
            )})}
          </View>
        </ScrollView>   
            </View>
        <View style={{paddingTop:15, paddingHorizontal:25}}> 
              <Movies text1='Popular on Muvi' text2=' View More '/>
        </View>
          
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
            {movie.map((item)=>{
              return(
                <Pressable  onPress={()=> navigation.navigate('ActionScreen', {movieTrailer:item})}>
                <MovieImages  key={item.id} image={item.poster_path} text={item.vote_average}/>
                </Pressable>
           )})}
          </View>
        </ScrollView>   
        <View style={{paddingTop:15, paddingHorizontal:25}}> 
              <Movies text1='New Release' text2=' View More '/>
        </View>
          
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
            {movie.map((item)=>{
              return( 
              <Pressable  onPress={()=> navigation.navigate('ActionScreen', {movieTrailer:item})}>
              <MovieImages key={item.id} image={item.poster_path} text={item.vote_average}/>
              </Pressable>
             )})}
          </View>
        </ScrollView>
        </ScrollView>   
   </View>
   
  )
}

// the styling of the homeScreen component

const styles=StyleSheet.create({
  HeaderContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:16,
    paddingTop:30,
    backgroundColor:'#1f2123',
  },
  iconContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'center',

  },
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
  scroll2:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:16,
    gap:10,
    paddingHorizontal:18
  }

})