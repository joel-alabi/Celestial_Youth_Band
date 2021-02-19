import React, { Component } from 'react'
import { StyleSheet,  View, Button} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    
} from 'react-native-paper';
export default class SettingScreen extends Component {
    render() {const {navigation}= this.props
        return (
            <View style={styles.container}>
                <Drawer.Section style={styles.drawerSection}>
                <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name="notifications" size={size} color='#47bfff' />
                            )}
                            label="Notification"
                            onPress={() => {navigation.navigate('Notification')}}
                        /> 
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name="call-outline" size={26} color="#47bfff" />
                            )}
                            label="Contact Us"
                            onPress={() => {navigation.navigate('Contact')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="star-rate" size={26} color="#47bfff" />
                            )}
                            label="Rate Us"
                            onPress={() => {navigation.navigate('RateUs')}}
                          />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name="language-outline" size={26} color="#47bfff" />
                            )}
                            label="Language"
                            onPress={() => {navigation.navigate('Language')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name="md-information-circle-outline" size={26} color="#47bfff" />
                            )}
                            label="About App"
                            onPress={() => {navigation.navigate('About')}}
                        />
                </Drawer.Section>
                           
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
        
      },
      bottomDrawerSection: {
          marginBottom: 10,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
  });