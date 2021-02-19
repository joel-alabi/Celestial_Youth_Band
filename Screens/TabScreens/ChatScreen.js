import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class ChatScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Animatable.Text 
                style={styles.text}
                animation="lightSpeedIn"
                 easing="ease-in" 
                //  iterationCount="infinite"
                 >
                 CHAT COMING SOON!!!
                 </Animatable.Text>
                 <Animatable.Text 
                style={styles.text}
                animation="zoomIn"
                 easing="ease-in" 
                //  iterationCount="infinite"
                 >
                 YES!!!
                 </Animatable.Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignContent:'center',
    },
    text:{
        textAlign:'center',
        color:'blue',
        fontSize:30
    }
    
  });