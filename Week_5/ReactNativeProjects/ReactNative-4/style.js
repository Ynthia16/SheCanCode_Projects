import { StyleSheet, Text, View } from 'react-native';
export const styles = StyleSheet.create({
  wholePage:{
      flex:1,
  },

    header:{
        // flex:1,
        textAlign:'center',
        paddingTop:100,
        fontSize:25,
        fontWeight:'300',
    },

    flexContainer: {
        marginHorizontal:10,
        // marginVertical:90,
      flex:2,
      flexWrap:'wrap',
      display:'flex',
      flexDirection:'row',
      gap:15,
      backgroundColor: '#fff',
      alignContent: 'center',
      justifyContent:'center',
      
    },
    flexPackage:{
      position:'relative',
    },
    icons:{
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      position:'absolute',
      zIndex:4,
      top:10,
      left:10,
      gap:100,
    },
  });