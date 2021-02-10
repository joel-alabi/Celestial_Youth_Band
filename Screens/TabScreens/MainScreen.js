import React from 'react'
import ChatScreen from './ChatScreen'
import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();


export default function MainScreen({navigation}) {
    return (
        <View style={styles.container}>
            
            <Tab.Navigator  activeColor="white"
                            inactiveColor="black"
                            barStyle={{ backgroundColor: '#47bfff' }}>
                    <Tab.Screen 
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={24} color={color} />
                        ),
                        }}
                    name="Home"  />

                    <Tab.Screen 
                    options={{
                        tabBarLabel: 'Chat',
                        tabBarIcon: ({ color }) => (
                            <Entypo name="chat" size={24} color={color} />
                        ),
                      
                        }}
                        
                    name="Chat" component={ChatScreen} />

                    <Tab.Screen 
                     options={{
                        tabBarLabel: 'Setting',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="settings" size={24} color={color} />
                        ),
                        }}
                    name="Settings" component={DetailsStackScreen} />
            </Tab.Navigator>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

  const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#47bfff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="MainScreen" component={HomeScreen} options={{
            title:'Overview',
            headerTitleAlign:'center',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#47bfff" onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            headerRight:() =>(
                <Ionicons name="search-outline" size={24} color="white"   style={{marginRight:20}}/>
            )
            }} />
    </HomeStack.Navigator>
    );
    
    const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#47bfff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="SETTINGS" component={SettingScreen}
             options={{
                headerTitleAlign:'center',
            headerRight: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#47bfff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </DetailsStack.Navigator>
    );