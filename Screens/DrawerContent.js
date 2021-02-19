import React,{useState} from 'react';
import { View, StyleSheet,Switch ,TouchableOpacity} from 'react-native';
import {
    
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {connect} from 'react-redux'
import { logout } from '../src/redux/actions/authActions';


 function DrawerContent ({auth, logout, ...props}) {
    const [switchVal,setSwitchVal]= useState(false)
    return (
        <SafeAreaProvider>
        <View style={{flex:1}}>
           <DrawerContentScrollView {...props}>
           <View style={styles.drawerContent}>
           <View style={styles.userInfoSection}>
                     <View style={{flexDirection:'row',marginTop: 20,marginLeft:5}}>
                            <Avatar.Image 
                                source={require('../assets/ryan-christodoulou-Vra_DPrrBlE-unsplash.jpg')}
                                size={70}
                            />
                            <View style={{marginLeft:25, flexDirection:'column'}}>
                                <Title style={styles.title}>Joel Alabi</Title>
                                <Caption style={styles.caption}>@j_alabi</Caption>
                            </View>
                            <TouchableOpacity  onPress={() => {props.navigation.navigate('profile')}}>
                                 <FontAwesome5 name="user-edit" size={24} color="#47bfff" style={{marginLeft:35,marginTop:20}}/>
                            </TouchableOpacity>
                          
                      </View>
                        
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name="home-outline" size={size} color='#47bfff' />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('MainScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name="person-circle-outline" size={26} color="#47bfff" />
                                
                            )}
                            label="Profile"
                             onPress={() => {props.navigation.navigate('profile')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Ionicons name="settings-outline" size={26} color="#47bfff" />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                       
                        </Drawer.Section>
                        <Drawer.Section title="Preferences">
                        <TouchableRipple >
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch 
                                        rackColor={{false:'#767577', true:'#81b0ff'}}
                                        thumbColor={switchVal? '#fff':'#f4f3f4'}
                                       onValueChange={()=> setSwitchVal((prevVal) => !prevVal)}
                                       value={switchVal}
                                    />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
           </View>
           </DrawerContentScrollView>
           <Drawer.Section style={styles.bottomDrawerSection}  >
                <DrawerItem 
                onPress={logout}
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Log Out"
                   
                />
            </Drawer.Section>
        </View>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      backgroundColor:'#fff'
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
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
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  const mapStateToProp =(state)=>{
    return{auth:state}
  }
export default connect(mapStateToProp,{logout})(DrawerContent);