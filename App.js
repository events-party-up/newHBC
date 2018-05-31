import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import Navigation from './src/routes/MainDrawer';
// import Upload from './src/Imageupload';

export default class App extends React.Component {
  render() {
    return (
      <Navigation />  
      // <Upload/>       
    );
  }
}

