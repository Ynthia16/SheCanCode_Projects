import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({

  wholePage:{
    flex:1,
    backgroundColor:'white',
    justifyContent: 'space-between',
    
  },
  navbar: {
    flex: 0,
    height:70,
    backgroundColor: '#ff5733',
    alignItems: 'start',
    justifyContent: 'center',
    paddingLeft:280,
    marginTop:20,
  },
  text:{
    fontSize:28,
    color:'white',
  },
  bodyPart:{
    flex:3,
    marginHorizontal:25,
    
  },
  bodyHeader:{
    fontSize:16,
    paddingTop:40,
    paddingBottom:20,
  },
    inputWhole:{
      gap:18,
      
    },

    input:{
      flexDirection:'row',
      display:'flex',
      gap:10,
      borderWidth:2,
      borderStyle:'dotted',
      borderRadius:12,
      padding:12,
      backgroundColor:'#E8E8E8',
    
      
    },
    inputText:{
      fontSize:14,
    },

    footerWhole:{
      marginVertical:10,
      flexDirection:'row',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      gap:5,
      padding:15,
      marginHorizontal:15,
    },

    footer:{
      flex:3,
      padding:12,
      marginLeft:1,
      borderBottomColor: 'black',
      borderBottomWidth: 3,
      borderRadius:10,
      backgroundColor:'#e8e8e8',
      opacity: 0.4,    
    },
    footerText:{
      opacity: 0.5,
    },
    button:{
      backgroundColor:'#ff5733',
      paddingVertical:15,
      paddingHorizontal:5,
      borderRadius:10,
    },
  })