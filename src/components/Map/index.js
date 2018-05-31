import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './style';

export default class Maps extends React.Component {  

render() {
    return(
        <View style={styles.container}>
            
         <MapView style={styles.map}
          region={{
                        latitude:59.32932349999999,
                        longitude:18.068580800000063,
                        latitudeDelta:0.1,
                        longitudeDelta:0.1
                      }}
                      >
                         <MapView.Marker
                          coordinate={{
                        latitude:59.32932349999999,
                        longitude:18.068580800000063
                      }}
                      title={'My marker title'} 
                      />
          </MapView>        
          
          </View>
    );
}
}

    