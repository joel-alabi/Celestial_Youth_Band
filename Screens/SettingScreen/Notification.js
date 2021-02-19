import React, { Component } from 'react'

import { StyleSheet, Text, View, Button,ScrollView,Image,StatusBar } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

class Notification extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.note}>
                <Text style={styles.text}>Allow all Notifications</Text>
                <Switch/>
              </View>
              <StatusBar/>
           </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    note:{
      marginTop:20,
     alignContent:'flex-start',
      flexDirection:'row',
     justifyContent:'space-between',
     
    },
    text:{
      fontSize:18,
      marginLeft:10
    }

  
  });
export default Notification