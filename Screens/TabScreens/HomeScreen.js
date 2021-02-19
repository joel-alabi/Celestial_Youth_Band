import React, { Component } from 'react'
import { StyleSheet, Text, View, Button,Image} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import SubMain from '../HomeScreens/SubMain';
import MainHome from '../HomeScreens/MainHome';

const Stack = createStackNavigator();

export default class HomeScreen extends Component {
    render() {
        return (
        
            <Stack.Navigator >
                <Stack.Screen options={{ header: () => null}} name="MainHome" component={MainHome}/>
                <Stack.Screen  name="Submain" component={SubMain} />
            </Stack.Navigator>
         
        )
    }
}

  