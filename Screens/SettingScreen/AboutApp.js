import React, { Component } from 'react'
import { StyleSheet, Text, View, Button,ScrollView,Image} from 'react-native';

 class AboutApp extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>AboutApp screen</Text>
            <Button title="CLICK ME "/>
         </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignContent:'center'
    },
  
  });
  export default AboutApp;