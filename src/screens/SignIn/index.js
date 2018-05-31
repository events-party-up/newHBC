import React, { Component } from 'react';
import { 
    Alert,
    AsyncStorage,
    BackHandler,
    Image, 
    KeyboardAvoidingView,
    Text, 
    TextInput,
    TouchableOpacity, 
    StatusBar,
    View, 
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

import styles from './style';
import Logo from '../../components/Symbol/index';
import Api from '../../api';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this); 
        this._getStaticVariable();
        this.state = {
            // userId: this.props.navigation.state.params != "" ? this.props.navigation.state.params.userId : 431,
            // SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
            UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416,     
            // UserId: '431',          
            username: '',
            password: '',
        }
    }

    async _setStaticVariable(value) {
            await AsyncStorage.setItem('@user:key', value);
        }  

    async _getStaticVariable() {
        const value = await AsyncStorage.getItem('@user:key');
        this.setState({
            user: value,
            // userid: value,
            UserId: '416',
            // UserId: value,
        });                
    }

    componentDidMount() {
        StatusBar.setHidden(true);        
    }         

    _onVerifyUser() {
        
        console.log(`http://hogarbarber.developerscode.in/api/Users/Verify_Login?UserName=${this.state.username}&Password=${this.state.password}`)
        if(this.onChanged(this.state.username, this.state.password)) 
        {
            return Api.Verify_Login(this.state.username,this.state.password)
            // return fetch(`http://hogarbarber.developerscode.in/api/Users/Verify_Login?UserName=${this.state.username}&Password=${this.state.password}`)
            // .then((response)=>response.json())
            .then((responseJson)=>{
                // console.log( responseJson[0].UserId);
                this.props.navigation.navigate('SalonDetails', { UserId: this.state.UserId});
                // this.props.navigation.navigate('SalonDetails', { UserId: responseJson[0].UserId});
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    }    
    
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }
    
    handleBackButtonClick() {
        this.props.navigation.navigate('Signup');
        return true;
    } 
    focusNextField(nextField) {
        this.refs[nextField].focus();
      }

      onChanged(username, password){
        filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(this.state.username.length == 0) {
          Alert.alert("Alert","Enter Username")
          return false;
      } else if(this.state.password.length == 0) {
          Alert.alert("Alert","Enter Password")
          return false;
      } else if(!filter.test(this.state.username)) {
          Alert.alert("Alert","Enter Valid Username")
          return false;
      } else if(this.state.password.length < 6 || this.state.password.length > 18 ) {
          Alert.alert("Alert","Password Must be Between 6 -18 Characters")
          return false;
      } else if(this.state.username.length > 0 && this.state.password.length > 0) {
          return true;
      } else {
          Alert.alert("Alert","Enter Valid Details")
          return false;
      }      
    }          

    render() {
        return (             
            <View style = {styles.container}>   
                <View style = {styles.logobackground}>
                    <Logo type="Sign in"/>
                </View>                   
                
                <KeyboardAvoidingView style = {styles.textbackground}>                               
                    <View style={{ }}>
                        {/* <Text style={styles.label}> Email</Text> */}
                       
                            <View style={{width: 345}}>
                                <TextField
                                    inputContainerStyle= {{ width: 325}}
                                    ref = "1"
                                    style={styles.inputBox} 
                                    label='Name or Email'                            
                                    onChangeText = {(text)=>this.setState({username:text})}
                                    returnKeyType = "next"
                                    blurOnSubmit = {false}
                                    onSubmitEditing ={() => this.focusNextField('2')}
                                    minLength={10}
                                    maxLength={50} 
                                />  
                                 <Image source={require('../../Images/e-mail.png')}
                                    style ={styles.user} />   
                            </View>                            
                    </View>

                    <View style={{flex: 0, }}>   
                        {/* <Text style={styles.labelp}> Password</Text> */}                       
                            <View style={{width: 345, flex: 0, }}>
                                <TextField
                                    inputContainerStyle= {{ width: 325}}
                                    ref="2"
                                    style={styles.inputBox} 
                                    label='Password'  
                                    secureTextEntry={true}                          
                                    onChangeText = {(text)=>this.setState({password:text})}
                                    returnKeyType = "done" 
                                    minLength={6}
                                    maxLength={26} 
                                     
                                />
                                 <Image 
                            source={require('../../Images/passwordeye.png')}
                            style ={styles.passp}  />     
                            </View>
                    </View>                                          
                </KeyboardAvoidingView>                

                <View style={{flex: 1, alignSelf: 'center',}}>
                <View style={{flex: 0, margin: 10,}}>
                    <TouchableOpacity style={styles.button} 
                        onPress={()=>this._onVerifyUser()}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity> 
                </View> 

                 <View style={{}}>
                    <TouchableOpacity style={styles.button}>
                        {/* onPress= {() => ( this.props.navigation.navigate('Home'))}> */}
                        <Text style={styles.buttonText}> Skip  </Text>
                    </TouchableOpacity> 
                </View>        
 
                <View style={{flex: 0,}}>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.singupText}>Don't have an account? </Text>  
                    <TouchableOpacity onPress= {() => ( this.props.navigation.navigate('SignUp'))}>
                        <Text style={styles.singupButton}>Create Now</Text>
                    </TouchableOpacity>                     
                </View>
                </View>

               
                </View>                  

                {/* <Text>{this.state.UserId}</Text> */}
                
            </View>
        );
      }
    }     
