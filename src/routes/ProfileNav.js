import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import ProfileScreen from '../screens/Profile';
// import AccountScreen from '../Account';



const ProfileNavigation = StackNavigator({
    Profile: {
        screen: ProfileScreen,
    },
    Account: {
        screen: ProfileScreen,
    },
    YourOrders: {
        screen: ProfileScreen,
    },
    Notification: {
        screen: ProfileScreen,
    },
    Help: {
        screen: ProfileScreen,
    },
    Feedback: {
        screen: ProfileScreen,
    }
},
{
    headerMode: 'none',
});

export default ProfileNavigation;