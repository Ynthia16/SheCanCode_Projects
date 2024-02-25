import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, Icon} from 'react-native-paper';
 
export default function Card2({image,word1,words2}){
    // console.log(image)
    return(
        <View>
            <View>
                {/* <Image source={image} style={{width:500, height:500}}></Image> */}
                <View style={{position:'relative'}}>
                <Image
                    source={{uri:image}} style={styles.image} />

                {/* <AntDesign name='hearto' size={20} style={styles.icon}/> */}
                <TextInput.Icon icon='heart-outline'  style={{ backgroundColor:'whitesmoke', position:'absolute', left:0, top:0 }} size={18}/>

                </View>
                
                <View style={styles.container2}>
                <Text style={styles.words1}>{word1}</Text>
                <Text style={styles.words2}>{words2}</Text>
                </View>
                
            </View>
        </View>
    );
}

const styles=StyleSheet.create({

 
    container2:{

    },
    image:{
        width:150,
        height:180,
        borderRadius:20,
    },
    icon:{
        // backgroundColor:'green',
        borderWidth:2,
        borderColor:'green',
        borderRadius:20,
        textAlign:'center',
        overflow:'hidden',

    },
    words1:{
        // backgroundColor:'green',
        fontSize:14,
        fontWeight:'200',


    },
    words2:{
        // backgroundColor:'blue',
        fontSize:16,
        fontWeight:'500',

    },
})