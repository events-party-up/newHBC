import React from 'react';
import { Dimensions,         
         Image,
         StyleSheet, 
         Text, 
         TouchableOpacity,
         View, } from 'react-native';
// import Icon from "react-native-vector-icons/Ionicons";
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

// import Home from '../../screens/Home';
// import Orders from '../../screens/Orders';
// import Search from '../../screens/Search';
// import Profile from '../../screens/Profile';

import styles from './style';

const {width, height} =Dimensions.get('window');

export default class NewFooter extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <View style={styles.container}>

            <TouchableOpacity style={{alignSelf: 'center'}} 
            onPress={() => this.props.navigation.navigate('Home')}>            
            <Image source={require('../../Images/homeicon.png')}
                    style={ styles.HomeImage }
                    resizeMode="contain" />            
            <View style={styles.holder}>
                <Text style={styles.Hometext}>Home</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: 'center'}} 
            onPress={() => this.props.navigation.navigate('Orders')}>             
            <Image source={require('../../Images/orders.png')}
                    style={ styles.OrdersImage }
                    resizeMode="contain"/>            
            <View style={styles.holder1}>
                <Text style={styles.Orderstext}>Orders</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf: 'center'}} 
            onPress={() => this.props.navigation.navigate('Search')}>
            <Image source={require('../../Images/searchicon.png')}
                    style={ styles.ExploreImage }
                    resizeMode="contain"/>
            <View style={styles.holder2}>
                <Text style={styles.Exploretext}>Explore</Text>
            </View>
            </TouchableOpacity> 
                 
            <TouchableOpacity style={{alignSelf: 'center'}} 
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Image source={require('../../Images/profileicon.png')}
                    style={ styles.ProfileImage }
                    resizeMode="contain"/>            
            <View style={styles.holder3}>
                <Text style={styles.Profiletext}>Profile</Text>
            </View>
            </TouchableOpacity> 

      </View>
    );
  }
}


  