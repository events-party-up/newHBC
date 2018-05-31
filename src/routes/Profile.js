import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
    Image
} from 'react-native';
import { 
    StackNavigator, 
    TabNavigator, 
    DrawerNavigator 
} from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

class Profile extends Component {

    async _setStaticVariable(value) {
        await AsyncStorage.setItem('@user:key', value);
    }  

    async _getStaticVariable() {
        const value = await AsyncStorage.getItem('@user:key');
        this.setState({
            user: value,
            userId: value,
        });                
    }

    async _removeStaticVariable() {
        Alert.alert("Alert","Test");
        await AsyncStorage.removeItem('@user:key');
    }

    async _removeItemValue() {
        try {
            const value = await AsyncStorage.removeItem('@user:key');
            this.setState({
                user: value,
                userid: value,
            }); 
          return true;
        }
        catch(exception) {
          return false;
        }
    }

    // async removeItemValue(key) {
    //     try {
    //       await AsyncStorage.removeItem(key);
    //       return true;
    //     }
    //     catch(exception) {
    //       return false;
    //     }
    // }

    render() {
        return(
            <View>
                <Text>Profile</Text>
                <TouchableOpacity style={styles.List} onPress= {() => (
                    this.props.navigation.navigate('Account')
                    )}>
                    <Text>Account</Text>
                </TouchableOpacity>    
                
                <TouchableOpacity style={styles.List} onPress= {() => (
                    this.props.navigation.navigate('Account')
                    )}>
                    <Text>Help</Text>
                </TouchableOpacity>    
               
                <TouchableOpacity style={styles.List} onPress= {() => (
                    this.props.navigation.navigate('Account')
                    )}>
                    <Text>Feedback</Text>
                </TouchableOpacity>  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    List: {        
        alignItems: 'center',
        backgroundColor: 'skyblue',
        paddingVertical: 15,
        marginVertical: 5,
    },
    icon: {
        width: 50,
        height: 50,
    },
});

const SettingsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text></Text>
  </View>
);

const LogoutScreen = () => (
    
  <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    onPress = { () => this._removeStaticVariable}>
  </TouchableOpacity>
);

const getTypedIcon = name => {
    return Platform.OS === 'ios' ? (focused ? `ios-${name}` : `ios-${name}-outline`) : `md-${name}`;   
  };

const ProfileTab = TabNavigator({
    Settings: {
        screen: SettingsScreen,        
        tabBarLabel: 'Settings',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor, focused }) => (
                // <Ionicons
                //     name={getTypedIcon("settings")}
                //     size={26}
                //     style={{ color: tintColor }}
                // />
                <Image source={require('../Images/settings.png')}
                style={{width:25, height:25}} />
            ),      
        })    
    },
    Logout: {
        screen: LogoutScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Logout",
            tabBarIcon: ({ tintColor, focused }) => (
                // <Ionicons
                //     name={getTypedIcon("log-out")}
                //     size={26}
                //     style={{ color: tintColor }}
                // />
                 
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    onPress = { () => this._removeStaticVariable}>
                    <Image source={require('../Images/Signout.png')}
                    style={{width:25, height:25}}/>
                </TouchableOpacity>
            ),  
        })
    }
},
{
    headerMode: 'none',
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

const ProfileStack =StackNavigator({    
    Sett: {
        screen: ProfileTab,
    },
    Prof: {
        screen: Profile,
    },
},
{
    headerMode: 'none',
});

export default ProfileStack;