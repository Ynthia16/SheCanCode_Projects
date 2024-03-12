import React , {useEffect, useState}from 'react'
import { StyleSheet, Text, View,StatusBar, Dimensions, SafeAreaView, Pressable} from 'react-native';
import Button from '../components/button';
import ProfileScreen from './ProfileScreen';
import MyList from '../components/MyList';


export default function MyListScreen({route, navigation}) {
  // const {movieTrailer} = route.params
  // console.log(this.props.navigation.getParam)
  const height=Dimensions.get('screen').height;
  const width=Dimensions.get('screen').width;
  const [movie,setMovie] = useState([]);
  
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTNkMmMyMjFiYWJiMWNmMGEwMTQwNzU4YzEyN2RjZSIsInN1YiI6IjY1ZDg2YzY1YjIzNGI5MDE4NmM3OGNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n46-2a4OloNnTTWInSmNx5m-c36by7pycAV-Z1sGa3U'
    }
  };


  useEffect(()=>{
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then((response) =>{
          setMovie(response.results)
           console.log(response.results)
          })
        .catch(err => console.error(err));
    
      }, [])

  return (
   <View style={{backgroundColor:'#26292D',height:height, width:width}} >
      <SafeAreaView>
        <StatusBar style='light'/>
          {/* <View> */}
            {/* <View style={styles.containerText}>
              <Text style={{color:'#FCFDFC', fontSize:23}}> My List</Text>
            </View>
           
            <View >
              <View style={{alignItems:'center', paddingTop:70}}>
                <Image source={require('../../assets/mylistImage.png')}></Image>
              </View>
              <View  style={{display:'flex', justifyContent:'center', alignItems:'center',paddingTop:50}}>
                <Text style={{color:'white', fontSize:18, opacity:0.8,fontWeight:'600', paddingBottom:10}} >Create My Own List</Text>
                <Text style={{color:'white', fontSize:15, opacity:0.4}}> Let's do something,because</Text>
                <Text style={{color:'white', fontSize:15, opacity:0.4}}> I have nice surprise for you </Text>
              </View>
              <View style={{paddingTop:120}}>
                <Button Word='Explore Movie'/>
              </View>
            </View> */}
              <View>
              {movie.map((item)=>{
              return( 
              <Pressable >
                  <MyList  key={item.id} image={item.poster_path} movieName={item.original_title} />
              </Pressable>
              )})}
              </View>
      </SafeAreaView>
   </View>
  )
}

// the styling part of this screen

const styles=StyleSheet.create({
  containerText:{
    display:'flex',
    alignItems:'start',
    justifyContent:'center',
    paddingTop:30,
    paddingBottom:15,
    paddingHorizontal:20,
    backgroundColor:'#1f2123',
  },
})