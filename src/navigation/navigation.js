import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerContent from '../../Screens/DrawerContent';
import RooterScreen from '../../Screens/RooterScreen';

import ChatScreen from '../../Screens/TabScreens/ChatScreen';
import HomeScreen from '../../Screens/TabScreens/HomeScreen';
import MainScreen from '../../Screens/TabScreens/MainScreen';
import SettingScreen from '../../Screens/TabScreens/SettingScreen';

import {   NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {HelpScreen} from '../../Screens/OtherScreens/HelpScreen'
import { Profile } from '../../Screens/OtherScreens/Profile';
const Drawer = createDrawerNavigator();
import {connect} from 'react-redux'


function AppContainer({auth}) {
  return (
    <View style={styles.container}>
    { 
      auth.login ?
      // drawer screen
      <NavigationContainer >
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="MainScreen" component={MainScreen} />
          <Drawer.Screen name="SETTINGS" component={SettingScreen} />
          <Drawer.Screen name="Help" component={HelpScreen} />
          <Drawer.Screen name="profile" component={Profile}/>
        </Drawer.Navigator>
       </NavigationContainer>
      :
      // rooter screen

      <RooterScreen/>
    }
      
     
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProp =(state)=>{
  return{auth:state}
}
export default connect(mapStateToProp)(AppContainer);