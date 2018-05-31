import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from './style';

export default class Tabs extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.navigation);
        this.state = {
            // selectedIndex: 0,
            // selectedIndices: [0],
            // customStyleIndex: 0,
            // // SalonId: 0,
            SalonId: this.props.navigation.state.params.SalonId,
        }
    }

    render() {
      return (
        <View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.Photos} onPress = {()=> 
                    this.props.navigation.navigate('SalonPhotos', { SalonId: this.state.SalonId})} >                
                    <Text style={styles.text}>Photos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Stylists} onPress = {()=> this.props.navigation.navigate('SalonStylists', { SalonId: this.state.SalonId})}>                
                    <Text style={styles.text}>Stylists</Text>                
                </TouchableOpacity>

                <TouchableOpacity style={styles.Reviews} onPress = {()=> this.props.navigation.navigate('SalonReviews', { SalonId: this.state.SalonId})}>                
                    <Text style={styles.text}>Reviews</Text>                
                </TouchableOpacity>
            </View>

        </View>
    );
    }
}