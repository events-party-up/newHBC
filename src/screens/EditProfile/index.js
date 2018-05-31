import React, { Component } from 'react';
import { 
    ActivityIndicator, 
    AsyncStorage,
    BackHandler,
    Dimensions, 
    Image, 
    KeyboardAvoidingView,
    ListView,
    StyleSheet, 
    Text,
    TextInput,
    TouchableOpacity, 
    View,
    ScrollView,     
    } from 'react-native';

import Api from '../../api';
import styles from './style';

const { width, height } = Dimensions.get('window');

export default class EditProfile extends Component {

    constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {        
            isLoading: true,  
            // SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
            UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 431, 
    //   UserId: '431',    
    }
  }

  async _setStaticVariable(value, value1) {
    await AsyncStorage.setItem('@user:key', value);
    await AsyncStorage.setItem('@salons:key', value1);
}  

async _getStaticVariable() {
    const value = await AsyncStorage.getItem('@user:key');
    const value1 = await AsyncStorage.getItem('@salons: key');
    this.setState({
        user: value,
        userid: value,
        // salons: value1,
        // salonsid: value1,             
        // CategoryId: '1',
        // UpdatedBy: value,
    });                
}  

  componentDidMount() {
    return fetch(`http://hogarbarber.developerscode.in/api/Users/Get_User_ById?UserId=${this.state.UserId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function() {
            console.log(responseJson)
            console.log(responseJson[0].Email)
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _Apply() {
    return fetch(`http://hogarbarber.developerscode.in/api/Users/Get_User_ById?UserId=${this.state.UserId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        //let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          //dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
          console.log(responseJson)
          this.componentDidMount();
        });
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(cartid)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

// componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
// }

handleBackButtonClick() {
    this.props.navigation.navigate('EditProfile');
    return true;
}

  render() {

    const st = this.state;
    
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    const { navigate } = this.props.navigation;
    
        return(       
            
            <View>
                {
                this.state.dataSource.map(function(element,index,array){
                //console.log(element.Email)
                return( 
                <View key={index}>
                <ScrollView style={{}}> 
                    <View style={styles.Back}>  

                    <TouchableOpacity onPress = {()=> navigate('EditProfile')}                    
                        style={{ height: 40, width: 40, marginTop: 180, marginLeft: 10, }}>
                        <Image source={require('../../Images/arrow_left-512.png')}
                                style={{width: 40, height: 40, resizeMode: 'contain', }} 
                                />               
                    </TouchableOpacity>
                        <Text style={styles.EditProfile}>Edit Profile Clone</Text> 
                    <TouchableOpacity 
                        hitSlop= {{top: 10, left: 10, bottom: 10, right: 10,}}
                        onPress={() => this._Apply()}>
                        <Text style={styles.Check1}>Apply</Text>
                    </TouchableOpacity>                    
                </View>
                
                <View>                    
                    <View style={styles.pad}>                                     
                    <Image 
                        source={element.ImagePath=="" || element.ImagePath==null ?require('../../icons/icons/checklist_copy.png'):{uri:element.ImagePath}}
                        // source={require('../../icons/icons/checklist_copy.png')}                    
                            style ={styles.Image} />                                               
                </View> 

                <KeyboardAvoidingView>
                <View style={{backgroundColor: '#eaf8fd',}}>                
                    <TextInput style={styles.Name} underlineColorAndroid="transparent">{element.Name}</TextInput>                     
                    {/* <Text style={styles.Check2}>Edit</Text> */}
                </View>
                </KeyboardAvoidingView>     

                <Text>{st.UserId},{st.SalonsId}</Text>                 
                
                <View>
                    <Text style={styles.Name1}>Private Details</Text>
                </View>

                <KeyboardAvoidingView>
                <View style={{ marginTop: 15}}>                   
                    <View style={styles.topBackground}>
                        <Text style={styles.Text}>Email</Text>                        
                        <TextInput style={styles.Text1} underlineColorAndroid="transparent">{element.Email}</TextInput>                                      
                    </View>                    
                </View>

                <View style={{ marginTop: 15}}>                   
                    <View style={styles.topBackground}>
                        <Text style={styles.Text}>Password</Text>                        
                        <TextInput style={styles.Text2} underlineColorAndroid="transparent">{element.Password}</TextInput>                                      
                    </View>                    
                </View>

                <View style={{ marginTop: 15}}>                   
                    <View style={styles.topBackground}>
                        <Text style={styles.Text}>Gender</Text>                        
                        <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                      
                    </View>                    
                </View>

                <View style={{ marginTop: 15}}>                   
                    <View style={styles.topBackground}>
                        <Text style={styles.Text}>Age</Text>                        
                        <TextInput style={styles.Text4} underlineColorAndroid="transparent">21years</TextInput>                                      
                    </View>                    
                </View>

                <View style={{ marginTop: 5}}>                   
                    <View style={styles.topBackground}>
                        <Text style={styles.Text}>Phone Number</Text>                        
                        <TextInput style={styles.Text5} underlineColorAndroid="transparent">{element.MobileNumber}</TextInput>                                      
                    </View>                    
                </View>
                </KeyboardAvoidingView>

                </View>
                </ScrollView>
                </View>
                )
            })
        }       
                
            </View>
        );
    }
}
