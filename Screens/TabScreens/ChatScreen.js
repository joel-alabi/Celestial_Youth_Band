import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
export default class ChatScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CHAT SCREEN 1</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      textAlign:'center'
    },
  });