import React, { Component } from 'react';
import {
    Button,
    Text,
    View,
    Easing,
    Animated,
} from 'react-native';
import {
    DrawerNavigator,
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import Profile from '../routes/ProfileNav';
import FooterScreen from '../components/FooterComponent';


const HomeScreen = ({navigation}) => {    
    return (    
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={()=>{navigation.navigate('Order')}}
                title="Orders"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=>{navigation.navigate('Search')}}
                title="Search"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=>{navigation.navigate('Profile')}}
                title="Profile"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
)};

const OrdersScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Orders Screen</Text>
  </View>
);

const SearchsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Search Screen</Text>
  </View>
);

const ProfilesScreen = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text onLayout={()=>{navigation.navigate('Profile')}}>Profile Screen</Text>
  </View>
);

const HeaderStack = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Order: {
        screen: OrdersScreen,
    },
    Search: {
        screen: SearchsScreen,
    },
    Profile: {
        screen: ProfilesScreen,
    },
    Footer: {
        screen: FooterScreen,
    }

});

class MainStack extends Component {
    render() {
        return(
            <HeaderStack />
        );
    }
}

export default MainStack;