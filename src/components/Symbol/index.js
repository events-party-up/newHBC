import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import styles from './style';

export default class Logo extends Component {
  render() {
    return (  
        <View style={styles.container}>     
            <View style= {{backgroundColor: 'white', borderRadius: 20, width:75, height: 71, 
            alignSelf: 'center',  }}>      
                <Image style={{width: 60, height: 60, borderRadius: 25, alignItems: 'center',
                 alignSelf: 'center', marginTop: 5,}}
                    source={require('../../Images/hblogo.png')}/> 
            </View> 
            <Text style={styles.logoText}>{this.props.type}</Text>  
        </View>      
    );
  }
}

