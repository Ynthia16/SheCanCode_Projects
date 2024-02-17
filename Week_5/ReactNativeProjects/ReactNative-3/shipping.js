import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


import AntDesign from 'react-native-vector-icons/AntDesign';

import { TextInput, Icon,Checkbox } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';




export default function Shipping({navigation}) {
  return (
    <View style={styles.wholePage}>
        
        <View style={styles.page1}>
            <View style={styles.flexPackage}>
                <View style={styles.flexbox}>
                    <Entypo name='home' size='20' color='yellow'/>
                    <Text style={styles.text}>Home</Text>
                </View>
                <AntDesign name='edit' size='20' color='blue' />
            </View>
            <View >
                <Text style={styles.Sunamganj}> Sunamganj</Text>
                <Text > +971-50-1234567</Text>
                <Text style={styles.paragraph}>
                 Room #1 - Ground Floor, Al Najoun Building, 24 B Strret, Dubai- UNited Arab Emirates
                </Text>

            </View>
            <StatusBar style="auto" />
        </View>
            {/* the second paragraph of the mobile app  */}

        <View style={styles.page2}>
            <View style={styles.flexPackage}>
                <View style={styles.flexbox}>
                    <FontAwesome6 name='building-columns' size='20' color='orange'/>
                    <Text style={styles.text}>Office</Text>
                </View>
                <AntDesign name='edit' size='20' color='black'/>
            </View>
            <View >
                <Text style={styles.Sunamganj}> Sunamganj</Text>
                    <Text > +971-50-1234567</Text>
                <Text style={styles.paragraph}>
                 Room #1 - Ground Floor, Al Najoun Building, 24 B Strret, Dubai- UNited Arab Emirates
                </Text>

            </View>
            <StatusBar style="auto" />
        </View>

        
        {/* the last part of the mobile app  */}
        <View style={styles.lastpart}>
        <View style={styles.address}>
            <Text style={styles.addressp}> Add New shipping address</Text>
            <AntDesign name='plussquareo' size='20' color='black'/>
        </View>

        {/* the personal info part of the mobile app  */}
        <View style={styles.personal}>
            <Text style={styles.personalInfo}> Personal Info</Text>
            <View  style={styles.flexbox}>
                <Feather name='phone-call'/>
                <Text> Bill to the Home Address</Text>
            </View>
            <View  style={styles.flexbox}>
                <Feather name='phone-call'/>
                <Text> 01746247923</Text>
            </View>
            <View  style={styles.flexbox}>
                <Feather name='phone-call'/>
                <Text> quckrakibull@gmail.com</Text>
            </View>
        </View>

        <View>
            <TouchableOpacity onPress={() =>navigation.navigate('sign')}>
                <Text style={styles.continue}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>

        )}

        // the styling  part of the mobile app 

const styles = StyleSheet.create({
    wholePage:{
    flex:1,
    },
    page1:{
        flex:1,
        backgroundColor:'#AAD7D9',
        borderWidth:2,
        borderColor:'#59B4C3',
        borderRadius:20,
        marginHorizontal:25,
        // marginTop:40,
        paddingHorizontal:20,
        paddingTop:15,
    },
    flexPackage:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    flexbox:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:'10',
    },
    text:{
        fontSize:18,
        fontWeight:'600',
    },

    Sunamganj:{
        fontSize:13,
        fontWeight:'600',
        paddingVertical:5,
    },
    paragraph:{
        borderTopWidth:1,
        borderTopColor:'yellow',
        textAlign:'left',
        paddingVertical:10,
    },

    page2:{
        flex:1,
        marginVertical:20,
        backgroundColor:'#E3E1D9',
        borderWidth:2,
        borderColor:'#B4B4B8',
        borderRadius:20,
        marginHorizontal:25,
        // marginVertical:50,
        paddingHorizontal:20,
        paddingTop:20,
    },

    lastpart:{
        flex:2,
    },
    address:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:30,
        marginVertical:20,
    },
    addressp:{
        fontSize:14,
        fontWeight:'400',

    },
    personal:{
        marginHorizontal:30,
        gap:10,
    },
    personalInfo:{
        fontWeight:'500',
        fontSize:18,
    },
    continue:{
        backgroundColor:'#59B4C3',
        borderRadius:25,
        marginHorizontal:25,
        paddingHorizontal:15,
        paddingVertical:15,
        overflow:'hidden',
        textAlign:'center',
        fontSize:18,
        marginTop:30,
        color:'white',
        fontWeight:'200',
        
    },
})