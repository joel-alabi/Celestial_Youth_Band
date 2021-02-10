import React from 'react'
import { Text, View ,StyleSheet,Button } from 'react-native'

export const Profile = () => {
    return (
        <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignContent:'center'
      
    },
  });