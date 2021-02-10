import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from 'react-native';

// You can use your custom background image
import BackgroundImage from '../assets/ryan-christodoulou-Vra_DPrrBlE-unsplash.jpg';

// expo install expo-font
import { useFonts } from 'expo-font';

// https://fonts.google.com/specimen/Source+Sans+Pro
import SourceSansProLight from '../assets/SourceSansPro-Light.ttf';
import SourceSansProRegular from '../assets/SourceSansPro-Regular.ttf';
import SourceSansProBold from '../assets/SourceSansPro-Bold.ttf';

// npm install react-native-elements
import { Icon } from 'react-native-elements';

// npm install react-native-animatable
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({ navigation }) {
  const [loaded] = useFonts({
    SourceSansProLight,
    SourceSansProRegular,
    SourceSansProBold,
  });

  if (!loaded || !BackgroundImage) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Animatable.View style={{ flex: 1 }} animation='fadeInUp'>
          <Image
            style={{ flex: 1, width:'100%', marginTop: -50 }}
            source={BackgroundImage}
          />
        </Animatable.View>
        <Animatable.Text
          style={styles.titleText}
          animation='fadeInUp'
        >
         WELCOME TO CELESTIAL YOUTH BAND , NUNGUA
        </Animatable.Text>
        <Animatable.View style={styles.bottomView} animation='fadeInUp' >
          <Text style={styles.loginText}>CONNECT WITH US</Text>
        
          <Text style={styles.fpText}>Sign In with your Account</Text>

          <TouchableOpacity style={styles.loginButton}
           onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.loginButtonText}>Get Started
            </Text>
            
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    textAlign:'center',
    color: 'black',
    fontFamily: 'SourceSansProBold',
    fontSize: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  bottomView: {
    
    backgroundColor: '#fff',
    opacity: 0.95,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    fontFamily: 'SourceSansProBold',
    fontSize: 25.,
    marginTop: 30,
    
  },
 
  loginButton: {
    backgroundColor: '#5352ed',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
 
  loginButtonText: {
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    alignSelf: 'center',
    fontSize: 18,
  },
 
  registerText: {
    alignSelf: 'center',
    marginTop: 15,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    marginBottom:40,
    alignSelf: 'flex-start',
    fontFamily: 'SourceSansProBold',
    fontSize: 16,
    color: 'gray',
  },
});

