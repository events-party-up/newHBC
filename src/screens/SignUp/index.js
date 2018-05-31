import React, { Component } from 'react';
import { 
    Alert,
    ActivityIndicator,
    AsyncStorage,
    BackHandler,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

import Api from '../../api';
import styles from './style';
import Logo from '../../components/Symbol/index';
import Form from '../../components/Form/index';
import MyComponent from '../../components/Signup/indexmodal';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this); 
    const shareLinkContent = {
        contentType: 'link',
        contentUrl: 'https://www.facebook.com/',
    }
    this._getStaticVariable().done();
    // this._getStaticVariable();
    this.state = {
        isLoading: true,
        name: '',
        email: '',
        mobile: '',
        password: '',
        message:'',
    //  SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
        UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416, 
    //  userId: this.props.navigation.state.params != "" ? this.props.navigation.state.params.userId : 431,
    //  UserId: '431',
        logintype: 'Normal',
        profilepicture: '',
        gender: '',
        roleid: '',
        username: '',
        updatedby: '',
        shareLinkContent: shareLinkContent,
    }
  }  

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent)
      .then(function(canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      })
      .then(
        function(result) {
          if (result.isCancelled) {
            alert('Share cancelled');
          } else {
            alert('Share success');
          }
        },
        function(error) {
          alert('Share fail with error: ' + error);
        },
      );
  }

  async _setStaticVariable(value) {
      await AsyncStorage.setItem('@user:key', value);
  }  

  async _getStaticVariable() {
  const value = await AsyncStorage.getItem('@user:key');
  this.setState({
        user: value,
    //   userid: value,    
        // UserId: '416',
        UserId: value,
  });                
  }

  componentDidMount(){
      console.log(`http://hogarbarber.developerscode.in/api/Users/Get_User_ById?UserId=${this.state.UserId}`)
      return Api.Get_User_ById(this.state.UserId)
    // return fetch(`http://hogarbarber.developerscode.in/api/Users/Get_User_ById?UserId=${this.state.userId}`)
    //   .then((response)=>response.json())
      .then((responseJson)=> {
        this.setState({
            isLoading: false,
            dataSource: responseJson,
            UserId: responseJson[0].UserId,
            name: responseJson[0].Name,
            email: responseJson[0].Email,
            password: responseJson[0].Password,
            mobile: responseJson[0].MobileNumber,
            logintype: responseJson[0].LoginType,
            profilepicture: responseJson[0].ProfilePicture,
            gender: responseJson[0].Gender,
            roleid: responseJson[0].RoleId,
            username: responseJson[0].UserName,
            updatedby: responseJson[0].UpdatedBy,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

// componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
// }

handleBackButtonClick() {
    this.props.navigation.navigate('Welcome');
    return true;
} 

  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  onChanged(name, email, password){
    filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(this.state.name.length == 0) {
      Alert.alert("Alert","Enter Name")
      return false;
  } else if(this.state.email.length == 0) {
      Alert.alert("Alert","Enter Email")
      return false;
  } else if(this.state.password.length == 0) {
      Alert.alert("Alert","Enter Password")
      return false;
  } else if(!filter.test(this.state.email)) {
      Alert.alert("Alert","Enter Valid Email")
      return false;
  } else if(this.state.password.length < 6 || this.state.password.length > 18 ) {
      Alert.alert("Alert","Password Must be Between 6 -18 Characters")
      return false;
  } else if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
      return true;
  } else {
      Alert.alert("Alert","Enter Valid Details")
      return false;
  }      
}
  render() {      

    if (this.state.isLoading) {
        return (
            <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
            <ActivityIndicator size="large" color="orange" />
          </View>
        );
      }

      if (this.state.message!='') {
        return (
            <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
            <ActivityIndicator size="large" color="orange" />
          </View>
        );
      }

    const { navigate } = this.props.navigation;

    return (
      
          <View style = {styles.container}>
              <View style = {styles.logobackground}>
                  <Logo type="Sign Up"/>
              </View>              
              <KeyboardAvoidingView
                style= {styles.context}
                behavior='padding'>                
                    <View style = {styles.textbackground}>                                   
                        <View style={{flex: 1,}}> 
                            {/* <Text style={styles.label}>Name</Text>   */}
                           
                                <View style={{width: 340}}>
                                    <TextField
                                        inputContainerStyle= {{ width: 340}}
                                        style={styles.inputBox} 
                                        ref = "1"
                                        label='Full Name'                            
                                        onChangeText={name => this.setState({name})} 
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => this.focusNextField('2')}
                                        minLength={5}
                                        maxLength={26} 
                                        value = {this.state.name}
                                    />     
                                </View>
                                <Image source={require('../../Images/username.png')}
                                    style ={styles.user} />


                        </View>
                        <View style={{ flex: 1,}}>
                            {/* <Text style={styles.labele}>Email</Text> */}
                           
                                <View style={{width: 340}}>
                                    <TextField 
                                        inputContainerStyle= {{ width: 340}}
                                        style={styles.inputBox1} 
                                        ref = "2"
                                        label='Email'                            
                                        onChangeText={email => this.setState({email})} 
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => this.focusNextField('3')}
                                        minLength={10}
                                        maxLength={50}  
                                        value = {this.state.email}
                                    />     
                                </View>
                                <Image source={require('../../Images/e-mail.png')}
                                    style ={styles.email} />
                            {/* <TextInput 
                                style={styles.inputBox1} 
                                ref = "2"
                                underlineColorAndroid='lightgrey' 
                                placeholder=""                                
                                placeholderTextColor = "lightgrey"
                                onChangeText={email => this.setState({email})} 
                                returnKeyType="next"
                                blurOnSubmit={false}
                                onSubmitEditing={() => this.focusNextField('3')}
                                />                     */}
                        </View>
                        <View style={{ flex: 1, marginTop: 0, }}> 
                            {/* <Text style={styles.labelp}>Password</Text> */}
                          
                                <View style={{width: 340}}>
                                    <TextField
                                        inputContainerStyle= {{ width: 340}}
                                        style={styles.inputBox1} 
                                        ref = "3"
                                        label='Password'  
                                        secureTextEntry={true}                          
                                        onChangeText={password => this.setState({password})} 
                                        returnKeyType="done"
                                        minLength={6}
                                        maxLength={26} 
                                        value = {this.state.password} 
                                    />     
                                </View> 
                                <Image source={require('../../Images/passwordeye.png')}
                                    style ={styles.pass} />
                        </View>                                           
                    </View>                
              </KeyboardAvoidingView>      

              <View style={styles.Signup}>         
                <TouchableOpacity style={styles.button2} onPress={()=>{    
                    console.log(`http://hogarbarber.developerscode.in/api/Users/Update_User?Name=${this.state.name}&UserName=${this.state.email}&Password=${this.state.password}&MobileNumber=${this.state.mobile}&Email=${this.state.email}&UpdatedBy=${this.state.UserId}&RoleId=${this.state.roleid}&UserId=${this.state.UserId}`)              
                    if(this.onChanged(this.state.name,this.state.email,this.state.password)) {          
                        return fetch(`http://hogarbarber.developerscode.in/api/Users/Update_User?Name=${this.state.name}&UserName=${this.state.email}&Password=${this.state.password}&MobileNumber=${this.state.mobile}&Email=${this.state.email}&UpdatedBy=${this.state.UserId}&RoleId=${this.state.roleid}&UserId=${this.state.UserId}`)
                        .then((response) => response.json())
                        .then((responseJson) => {                      
                          this.setState({
                            isLoading: false,
                            //message: responseJson[0].Message,
                          }, function() {                              
                              this.props.navigation.navigate('SignIn',{UserId: this.state.UserId})
                              
                          });
                        })
                        .catch((error) => {
                          console.error(error);
                        });
                    }
                    }}>
                    <Text style={styles.buttonText2}>Signup{this.props.type}</Text>
                </TouchableOpacity> 
              </View>

              <View style={styles.fbbutton}>
              <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold', marginTop: 10,}}>Signup with Facebook</Text>
                    {/* <LoginButton /> */}
                    {/* <TouchableHighlight
                    style={styles.share}
                    onPress={this.shareLinkWithShareDialog.bind(this)}>
                    <Text style={styles.shareText}>Share link with ShareDialog</Text>
                    </TouchableHighlight> */}
                </View>
              
              {/* <View style={styles.signUpFacebook}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText1}>Sign Up with Facebook</Text>
                </TouchableOpacity>            
              </View> */}

              {/* <Text>{this.state.UserId}</Text>  */}

              <View style={styles.signupTextCont}> 
                  <Text style={styles.singupText}>Already have an account ?</Text>  
                  <TouchableOpacity onPress= {() => ( this.props.navigation.navigate('SignIn'))}>
                      <Text style={styles.singupButton}> Sign in</Text>
                  </TouchableOpacity>       
              </View>   
                 
        </View>
         
    );
  }
}