import React, {useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView,Pressable, Image,ScrollView,Alert} from 'react-native';
import { Feather,Entypo,AntDesign } from '@expo/vector-icons';
import Movies from '../components/Movies';
import MovieImages from '../components/MovieImages';
import YoutubePlayer from "react-native-youtube-iframe";

export default function ActionScreen({route, navigation}) {
    const {movieTrailer} = route.params
    // console.log(route,  "params");
    const height=Dimensions.get('screen').height;
    const width=Dimensions.get('screen').width;
    const container3=require('../JsonData/Movies.json')
    const [videoplay, setvideoplay]= useState('')
    const [movie,setMovie] = useState([]);
    const [Hotmovie,setHotMovie] = useState([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTNkMmMyMjFiYWJiMWNmMGEwMTQwNzU4YzEyN2RjZSIsInN1YiI6IjY1ZDg2YzY1YjIzNGI5MDE4NmM3OGNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n46-2a4OloNnTTWInSmNx5m-c36by7pycAV-Z1sGa3U'
        }
      };

    useEffect(()=> {

        fetch(`https://api.themoviedb.org/3/movie/${movieTrailer.id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then((response) => {
        setvideoplay(response.results[0].key)
        // console.log(response.results[0].key)
        })
        .catch(err => console.error(err));
    },[])

    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then((response) =>{
      setMovie(response.results)
       console.log(movie)
      })
    .catch(err => console.error(err));
    },[])
   

  return (
   <View style={{backgroundColor:'#26292D',height:height, width:width}}>
    <StatusBar style='light'/>
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Pressable style={styles.containerText} onPress={()=>navigation.goBack()}>
                <AntDesign name="arrowleft" size={22} color="#DBB52E" />
                <Text style={{color:'#FCFDFC', fontSize:20}}> Action</Text>
            </Pressable>
        </View>
        <View>
                 
            <View>
                <YoutubePlayer
                    height={250}
                    videoId={videoplay}
                />
            </View>
        

            <View style={{ paddingHorizontal:20, gap:14}}>
                <Text style={{color:'#FCFDFC', fontSize:19, paddingTop:5}}>{movieTrailer.original_title}</Text>
                <Text style={{color:'white', fontSize:15, opacity:0.4, textAlign:'left'}}>{movieTrailer.overview}</Text>
            </View>

            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'start',paddingHorizontal:20,paddingVertical:25, gap:10 }}>
                <Pressable style={{display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'center', borderRadius:3, backgroundColor:'#FFD032', paddingHorizontal:45,paddingVertical:7}}>
                    <Feather name="play" size={22} color="black" />
                    <Text style={{color:'black',fontSize:16}}>Play</Text>
                </Pressable>
                <Pressable style={{display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'center', borderWidth:1,borderColor:'#41464A', paddingHorizontal:45,paddingVertical:6}} onPress={()=>navigation.navigate('MyListScreen', {movieTrailer})}>
                    <Entypo name="plus" size={22} color="#DBB52E" />
                    <Text style={{color:'#FCFDFC', fontSize:16}}>My List</Text>
                </Pressable>

            </View>

            <View>
                <View style={{paddingTop:15, paddingHorizontal:25}}> 
                    <Movies text1='U.S Action Movies' />
                </View> 
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
                    {movie.map((item)=>{
                    return( <MovieImages   key={item.key} image={item.poster_path} text={item.vote_average}/>)
                    })}
                    </View>
                </ScrollView> 

                <View style={{paddingTop:15, paddingHorizontal:25}}> 
                    <Movies text1='Muvi Originals Action' />
                </View> 
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
                    {movie.map((item)=>{
                    return( <MovieImages   key={item.key} image={item.poster_path} text={item.vote_average}/>)
                    })}
                    </View>
                </ScrollView> 

                <View style={{paddingTop:15, paddingHorizontal:25}}> 
                    <Movies text1='Muvi Originals Action' />
                </View> 
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
                    {movie.map((item)=>{
                    return( <MovieImages   key={item.key} image={item.poster_path} text={item.vote_average}/>)
                    })}
                    </View>
                </ScrollView> 
                <View style={{paddingTop:15, paddingHorizontal:25}}> 
                    <Movies text1='Muvi Originals Action' />
                </View> 
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
                    {movie.map((item)=>{
                    return( <MovieImages   key={item.key} image={item.poster_path} text={item.vote_average}/>)
                    })}
                    </View>
                </ScrollView> 
                <View style={{paddingTop:15, paddingHorizontal:25}}> 
                    <Movies text1='Muvi Originals Action' />
                </View> 
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{display:'flex', flexDirection:'row', gap:20, paddingHorizontal:20, paddingVertical:20}}> 
                    {movie.map((item)=>{
                    return( <MovieImages   key={item.key} image={item.poster_path} text={item.vote_average}/>)
                    })}
                    </View>
                </ScrollView> 

            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
   </View>
  )
}

// the styling part of the action screen 

const styles=StyleSheet.create({
    containerText:{
        display:'flex',
        alignItems:'center',
        justifyContent:'start',
        flexDirection:'row',
        paddingTop:30,
        paddingBottom:15,
        paddingHorizontal:20,
        gap:10
      },
})