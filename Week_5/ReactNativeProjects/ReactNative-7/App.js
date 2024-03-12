import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Button, ScrollView } from 'react-native';
import {TextInput} from 'react-native-paper';
// import Icon from '@mdi/react';
// import { mdiLightningBolt } from '@mdi/js';


export default function App() {
  return (
    <View  style={styles.wholepage}>
        {/* the home part of the mobile app  */}
      <View style={styles.container}>
        <Text style={styles.home}> Home</Text>
        <View style={styles.flexpackage}>
          <View style={styles.flex}>
              <View>
                 <TextInput.Icon icon='lightning-bolt-outline' size={35} style={styles.icons1} />
              </View>
            
              <View>
                <TextInput.Icon icon='abjad-hebrew' size={35} style={styles.icons1}  />
              </View>

              <View>
                 <TextInput.Icon icon='lightning-bolt-outline' size={35} style={styles.icons1} />
              </View>

              <View>
                 <TextInput.Icon icon='lightning-bolt-outline' size={35} style={styles.icons1} />
              </View>
            

            
          </View>

          <View style={styles.flexItems}>
          <Text style={styles.flexwords}> Price Alert</Text>
            {/* <TextInput.Icon icon='lightning-bolt' /> */}
          <Text style={styles.flexwords}> Convert</Text>
          <Text style={styles.flexwords}> Compare</Text>
          <Text style={styles.flexwords}> Watchlist</Text>
          </View>
            
        </View>
        <StatusBar style="auto" />
      </View>
      
        {/* the wallet part of the mobile app */}
      <View style={styles.secondcontainer}>
      <View style={styles.wallet}>
        <Text style={styles.title}> Your Wallet </Text>
        
        <View style={styles.wholewallet}>
          <ScrollView horizontal={true} >
            <View style={styles.wholeflex}> 
              <View style={styles.wholeflexwords}>
                <Text style={styles.flexNeo}> Neo</Text>
                <Text style={styles.flexwords}> NEO 0.2124</Text>
                <Text style={styles.flexwords}> $32,128.80</Text>
              </View>
              <View style={styles.columnFlex}>
                <View>
                    <TextInput.Icon icon='lightning-bolt' style={{backgroundColor:'#A7D397'}}/>
                </View>
            
                <View style={styles.rowflex}>
                  {/* <View>
                    <TextInput.Icon icon='lightning-bolt'/> 
                  </View> */}
                  <Text style={styles.flexNeo}> 2.5%</Text>
                </View>
              </View>
            </View>


            <View style={styles.wholeflex}> 
              <View style={styles.wholeflexwords}>
                <Text style={styles.flexNeo}> Neo</Text>
                <Text style={styles.flexwords}> NEO 0.2124</Text>
                <Text style={styles.flexwords}> $32,128.80</Text>
              </View>
              <View style={styles.columnFlex}>
                <View>
                    <TextInput.Icon icon='lightning-bolt'  style={{backgroundColor:'#A7D397'}}/>
                </View>
               
                <View style={styles.rowflex}>
                  <View>
                    {/* <TextInput.Icon icon='lightning-bolt' /> */}
                    <Text style={styles.flexNeo}> 2.5%</Text>
                  </View> 
                </View>
              </View>
            </View>


            <View style={styles.wholeflex}> 
              <View style={styles.wholeflexwords}>
                <Text style={styles.flexNeo}> Neo</Text>
                <Text style={styles.flexwords}> NEO 0.2124</Text>
                <Text style={styles.flexwords}> $32,128.80</Text>
              </View>
              <View style={styles.columnFlex}>
                <View>
                    <TextInput.Icon icon='lightning-bolt' style={{backgroundColor:'#A7D397'}}/>
                </View>
                <View style={styles.rowflex}>
                  {/* <TextInput.Icon icon='lightning-bolt' /> */}
                  <Text style={styles.flexNeo}> 2.5%</Text>
                </View>
              </View>
            </View>

            <View style={styles.wholeflex}> 
              <View style={styles.wholeflexwords}>
                <Text style={styles.flexNeo}> Neo</Text>
                <Text style={styles.flexwords}> NEO 0.2124</Text>
                <Text style={styles.flexwords}> $32,128.80</Text>
              </View>
              <View style={styles.columnFlex}>
                <View>
                <TextInput.Icon icon='lightning-bolt' style={{backgroundColor:'#A7D397'}}/>
                </View>
                <View style={styles.rowflex}>
                  {/* <TextInput.Icon icon='lightning-bolt' /> */}
                  <Text style={styles.flexNeo}> 2.5%</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        
      </View>

          {/* the trending part of the mobile app */}
      <View>
        <Text style={styles.title}> Trending </Text>
        <View  style={styles.wholeflex2}>
          <View style={styles.flexpackage1}>
            <View style={styles.flexpackage2}>
            <View>
              <TextInput.Icon icon='lightning-bolt' style={{color:'#FF9843', backgroundColor:'#ffc391'}}/>
            </View>
            <View>
              <Text style={styles.flexwords}> Bitcoin</Text>
              <Text style={styles.flexNeo}> BTC</Text>
            </View>
            </View>

            <View  style={styles.flexpackage2}>
            <View>
              <TextInput.Icon icon='lightning-bolt' style={{color:'#FF9843', backgroundColor:'#A7D397'}}/>
            </View>
            <View>
              <Text style={styles.flexwords}> Bitcoin</Text>
              <Text style={styles.flexNeo}> BTC</Text>
            </View>
            </View>


          </View>

          <View style={styles.flexpackage1}>
            <View>
                <Text style={styles.flexwords}> $32,128.80</Text>
                <View >
                  {/* <TextInput.Icon icon='lightning-bolt'/> */}
                  <Text style={styles.flexNeo}>2.5%</Text>
                </View>

            </View>

            <View>
                <Text style={styles.flexwords}> $15,128.80</Text>
                <View style={styles.smallflex}>
                  {/* <TextInput.Icon icon='lightning-bolt'/> */}
                  <Text style={styles.flexNeo}>2.2%</Text>
                </View>

            </View>
          </View>

        </View>
      </View>
      </View>
          {/* the footer part of the mobile app  */}
      <View style={styles.footer}>
        <View  style={styles.footerflex}>
          <View> 
          <TextInput.Icon icon='office-building' size={30}/>
          </View>
          <View> 
          <TextInput.Icon icon='home' size={30}/>
          </View>
          <View> 
          <TextInput.Icon icon='home' size={30}/>
          </View>
          <View> 
          <TextInput.Icon icon='home' size={30}/>
          </View>
          
        </View>
      </View>   
    </View>
    
  );
}





// the styling part of the mobile app 

const styles = StyleSheet.create({
 
  wholepage:{
    // marginHorizontal:20,
    flex:1,
    backgroundColor:'#F2EFE5',
  },
  container: {
    flex:3,
    marginTop:20,
    marginHorizontal:20,
    
  },
  home:{
      fontSize:25,
      paddingVertical:10,
  },
  

  flexItems:{
      display:'flex',
      flexDirection:'row',
      gap:17,
      alignItems:'center',
      paddingVertical:20,
      marginTop:20,  
      fontWeight:'500'
  },
  flex:{
    display:'flex',
    flexDirection:'row',
    // gap:90,
    // alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:40,
    paddingVertical:20,
  },
  icons1:{
    backgroundColor:'white',
  },
  icpns:{

  },
  flexwords:{
      fontWeight:'500',
      fontSize:15,
  },
  flexNeo:{
      fontWeight:'200',
  },
  secondcontainer:{
      flex:5,
      backgroundColor:'#E3E1D9',
      borderTopEndRadius:45,
      borderTopStartRadius:45,
      padding:15,
  },
  wallet:{
      // flex:1
      marginHorizontal:10,
  },
  wholewallet:{
    gap:10,
    paddingBottom:25,
    
  },
  title:{
    fontSize:20,
    fontWeight:'400',
    // marginBottom:10,
  },

  wholeflex:{
    backgroundColor:'white',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:10,
    gap:90,
    marginVertical:10,
  },

  columnFlex:{
      gap:40,
      paddingRight:10,
      paddingVertical:10,
  },

  wholeflexwords:{
      gap:10,
      
  },

    // {/* the trending part of the mobile app */}

    wholeflex2:{
    // backgroundColor:'#F9E8D9',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:10,
    marginVertical:10,
  },
  flexpackage2:{
    display:'flex',
    flexDirection:'row',
    gap:40,
  },
  flexpackage1:{
      gap:30,
  },
    //  {/* the footer part of the mobile app  */}
  footer:{
    flex:1,
    backgroundColor:'white',
    overflow:'hidden',
    borderTopEndRadius:40,
    borderTopStartRadius:40,
    justifyContent:'center',
    alignItems:'center',
  },
  footerflex:{
    display:'flex',
    flexDirection:'row',
    gap:90,
  },

});
