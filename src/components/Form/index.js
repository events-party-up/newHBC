import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class Logos extends Component {
    
  render() {
    return (  
        <View style={styles.container}>    
            <View style = {styles.textbackground}>                                   
                <View> 
                    <Text style={styles.label}> Name </Text>  
                    <Image source={require('../../Images/username.png')}
                            style ={styles.user} />
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='lightgrey'
                        placeholder=""
                        placeholderTextColor = "lightgrey"  />
                </View>
                <View>
                    <Text style={styles.labele}> Email</Text>
                    <Image source={require('../../Images/e-mail.png')}
                            style ={styles.email} />
                    <TextInput style={styles.inputBox1} 
                        underlineColorAndroid='lightgrey' 
                        placeholder=""
                        // secureTextEntry={true}
                        placeholderTextColor = "lightgrey" />                    
                </View>

                <View>
                    <Text style={styles.label}> Password</Text>
                    <Image source={require('../../Images/passwordeye.png')}
                            style ={styles.pass} />
                    <TextInput style={styles.inputBox1} 
                        underlineColorAndroid='lightgrey' 
                        placeholder=""
                        secureTextEntry={true}
                        placeholderTextColor = "lightgrey" />                    
                </View>                                           
            </View>

            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity> 
            </View> 

        </View>      
     
    );
  }
}
