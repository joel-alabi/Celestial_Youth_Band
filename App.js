import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerContent from './Screens/DrawerContent';
import RooterScreen from './Screens/RooterScreen';
import ChatScreen from './Screens/TabScreens/ChatScreen';
import HomeScreen from './Screens/TabScreens/HomeScreen';
import MainScreen from './Screens/TabScreens/MainScreen';
import SettingScreen from './Screens/TabScreens/SettingScreen';

import {   NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {HelpScreen} from './Screens/OtherScreens/HelpScreen'
import { Profile } from './Screens/OtherScreens/Profile';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer >
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="MainScreen" component={MainScreen} />
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
          <Drawer.Screen name="Help" component={HelpScreen} />
          <Drawer.Screen name="profile" component={Profile}/>
        </Drawer.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
