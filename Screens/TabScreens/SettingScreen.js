import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
export default class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SETTINGS now SCREEN</Text>
                <Button title="CLICK ME"/>
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