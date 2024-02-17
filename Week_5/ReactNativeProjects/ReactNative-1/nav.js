import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Nav( {navigation}) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() =>
        navigation.navigate('nav2')
}> 

        <Text style={styles.login} > Login</Text>
    </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
    backgroundColor:'green',
    paddingHorizontal:20,
    paddingVertical:20,
  },

});