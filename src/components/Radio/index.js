import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import RadioButton from 'radio-button-react-native';

import styles from './style';

const { width, height } = Dimensions.get('window');
 
export default class Example extends Component {
    constructor (props){
        super(props)
        this.state = {
                value: 0
            }    
        } 
    handleOnPress(value){
        this.setState({value:value})
    } 
render(){
    return(
        <View>
            <View style={{ marginTop: 5, }}>
                <View style={styles.container}>
                <RadioButton style={styles.radio} currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}>
                <Image source={require('../../Images/credit_card_icons.png')}
                        style={styles.Image}/>
                <Text style={styles.Text}>Credit/Debit</Text>
                </RadioButton>
                </View>
            </View>                   

            <View style={{ marginTop: 40, }}>
                <View style={styles.container}>        
                <RadioButton style={styles.radio} currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}>
                <Image source={require('../../Images/Paytm.Logo.png')}
                        style={styles.Image1}/>
                <Text style={styles.Text}>Paytm</Text>
                </RadioButton>
                </View>
            </View>        
                        
            <View style={{ marginTop: 40, }}>
                <View style={styles.container}>             
                <RadioButton style={styles.radio} currentValue={this.state.value} value={2} onPress={this.handleOnPress.bind(this)}>
                <Text style={styles.Text} >C.O.D</Text>
                </RadioButton>
                </View>
            </View>    
        </View>
    );
    }
}
