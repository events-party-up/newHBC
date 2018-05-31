import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, Image } from 'react-native';


import styles from './style';

const { width, height } = Dimensions.get('window');

class SearchBars extends Component {
    constructor(props) {
        super(props);
    }
    render() {    
        return( 
            <View>
                <View style={styles.topBackground}>  
                <Text style={styles.headertext}> Search </Text>
                               
                    <View style = {styles.textbackground}>                                            
                        <Text style={styles.label}> Search</Text>                    
                        <TextInput style={styles.inputBox} 
                            underlineColorAndroid='#fff'                             
                            placeholderTextColor = "lightgrey"
                        />   
                        <Image 
                            source={require('../../Images/search.png')}
                            style={{width:20, height:20, marginTop: -30, marginLeft: 10,}}
                        />            
                    </View>
                </View>            
            </View>
        );
    }
}

export default SearchBars;

