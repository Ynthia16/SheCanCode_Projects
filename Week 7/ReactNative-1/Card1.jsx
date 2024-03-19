import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
export default function Card1({Word,style, onPress}){
    return (
       
            <View style={styles.container1}>
                <Pressable>
                <Text 
                style={{ borderWidth:1,
                        borderRadius:15,
                        textAlign:'center',
                        paddingVertical:5,
                        // color:"black",
                        paddingHorizontal:15,
                        
                    }}>

                    {Word}
                </Text>
                </Pressable>
            </View>
        
    );

}
const styles=StyleSheet.create({
    container1:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:23,
        paddingVertical:20,
    },
});