import React,{Component} from 'react';
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


// npm install react-native-elements
import { Icon } from 'react-native-elements';

// npm install react-native-animatable
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import {createEmailAccount,registerError} from '../src/redux/actions/authActions'


class RegisterScreen extends Component {
        constructor(props){
          super(props)
          this.state={
            email:"",
            password:"",
            confirm:""
          }
        }
  handleUpdateState=(name,value)=>{
   this.setState({
    [name]:value
   })
  }
  handleOnSubmit = ()=>{
    if (this.state.password !== this.state.confirm){
       this.props.registerError("Passwords Dont match")
    return;
      }
      this.props.createEmailAccount(this.state.email,this.state.password)
  }
render(){
  const {navigation,auth} =this.props
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
     
        <View style={{ flex: 1 }} style={styles.header}>
          <Animatable.Text
          style={styles.titleText}
          animation='fadeInUp'
        >
          REGISTER WITH CYBN
        </Animatable.Text>
        </View>
        
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
        <View >
        {
        auth.error.register && 
         <Text style={{color:'red',textAlign:'center'}}>{auth.error.register}</Text>
        }
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='person'
              type='ionicons'
              color='#47bfff'
            />
            <TextInput
              style={styles.input}
              placeholder='Username'
              autoCapitalize='none'
              
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='mail'
              type='ionicons'
              color='#47bfff'
            />
            <TextInput
              style={styles.input}
              placeholder='Email'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              value={this.state.email}
              onChangeText={(text)=>{
                this.handleUpdateState('email',text)
                }}
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color='#47bfff'
            />
            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize='none'
              value={this.state.password}
              onChangeText={(text)=>{
                this.handleUpdateState('password',text)
                }}
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color='#47bfff'
            />
            <TextInput
              style={styles.input}
              placeholder='Confirm Password'
              secureTextEntry={true}
              autoCapitalize='none'
              value={this.state.confirm}
              onChangeText={(text)=>{
                this.handleUpdateState('confirm',text)
                }}
            />
          </View>
          <Text style={styles.fpText}>Forgot Password?</Text>
          <TouchableOpacity style={styles.loginButton}
         onPress={this.handleOnSubmit}
          >
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton1}
           onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText1}>Login</Text>
          </TouchableOpacity>
          
        </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#47bfff'
  },
  header:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: Platform.OS === 'ios' ? 2 : 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10
},
  titleText: {
      flex:1,
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    textAlign:'center',
    color: 'white',
    fontFamily: 'SourceSansProBold',
    fontSize: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 12,
  },
  bottomView: {
      flex:2,
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
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f1f3f6',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#47bfff',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor:'white',
  },
  loginButton1: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 8,
    borderColor:'#47bfff',
    marginTop: 10,
    borderWidth: 1,
  },
  loginButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
  },
  loginButtonText1: {
    color: '#47bfff',
    alignSelf: 'center',
    fontSize: 18,
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    fontSize: 16,
    color: '#47bfff',
  },
});

const mapStateToProp =(state)=>{
  return{auth:state}
}
export default connect(mapStateToProp,{createEmailAccount,registerError})(RegisterScreen);
  
  