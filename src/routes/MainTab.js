import React, { Component } from 'react';
import {
    Button,
    Text,
    View,
    Platform,
    Image,

} from 'react-native';
import {
    DrawerNavigator,
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import Search from '../screens/Search';
import Profile from './ProfileNav';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = ({navigation}) => {    
    return (    
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={()=>{navigation.navigate('Orders')}}
                title="Orders"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=>{navigation.navigate('Searchs')}}
                title="Search"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={()=>{navigation.navigate('Profiles')}}
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

const getTypedIcon = name => {
    return Platform.OS === 'ios' ? (focused ? `ios-${name}` : `ios-${name}-outline`) : `md-${name}`;   
  };

const TabMenu = TabNavigator({
    HomeT: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                // <Ionicons
                //     name={getTypedIcon("home")}
                //     size={20}
                //     style={{ color: tintColor }}
                    
                // />
                <Image 
                source={require('../Images/home.png')}
                style={{width:20, height:20}}
              />
            ),        
        },
    },
    OrderT: {
        screen: Orders,
        navigationOptions: {
            tabBarLabel: 'Orders',
            tabBarIcon: ({ tintColor, focused }) => (
                // <Ionicons
                //     name={getTypedIcon("cart")}
                //     size={20}
                //     style={{ color: tintColor }}
                // />
                <Image 
                source={require('../Images/Order.png')}
                style={{width:20, height:20}}
              />
            ),     
        },
    },
    SearchT: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ tintColor, focused }) => (
                // <Ionicons
                //     name={getTypedIcon("search")}
                //     size={20}J
                //     style={{ color: tintColor }}
                // />
                <Image 
                source={require('../Images/search.png')}
                style={{width:20, height:20}}
              />
            ),     
        },
    },
    ProfileT: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor, focused }) => (
                // <Ionicons 
                //     name={getTypedIcon("person")}
                //     size={20}
                //     style={{ color: tintColor, fontSize:20, }}
                // />
                <Image 
                source={require('../Images/Profile.png')}
                style={{width:20, height:20}}
              />
            ),     
        },
    },

},

{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: '#2cc9fe',
        inactiveTintColor: 'grey',
        labelStyle: {
            fontSize: 12,
        },
        tabStyle: {
            //width: 100,            
        },
        style: {
            backgroundColor: 'white',            
        },
    }
});

class MainTab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <TabMenu navigation={this.props.navigation} />
        );
    }
}

export default MainTab;


// import { Platform } from 'react-native'

// const tabBarOptions = Platform.OS === 'ios' ? 
//   {
//     // iOS tabBarOptions
//     showLabel: true
//   } : {
//     // Android tabBarOptions
//     showIcon: true,
//     showLabel: true
//   }