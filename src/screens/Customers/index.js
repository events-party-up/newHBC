import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AsyncStorage,
    Dimensions, 
    Image, 
    ListView,
    StatusBar,
    ScrollView, 
    StyleSheet,
    TouchableOpacity, 
    Text,
    View, 
} from 'react-native';
import Stars from 'react-native-stars';

import Api from '../../api';
import styles from './style';
import NewFooter from '../../components/FooterComponent/index';

const { width, height } = Dimensions.get('window');

const Opt = {    
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
}

export default class Customers extends Component {    

    constructor(props) {
        super(props);
        //const { param } = this.props.navigation.state.params;
        this.state = {
          isLoading: true,    
          SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
          UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416,           
        //   UserId: 416,
        //   SalonsId: 180,      
        
        }
      }

      async _setStaticVariable(value, value1) {
        await AsyncStorage.setItem('@user:key', value);
        await AsyncStorage.setItem('@salons:key', value1);
    }  

    async _getStaticVariable() {
        const value = await AsyncStorage.getItem('@user:key');
        const value1 = await AsyncStorage.getItem('@salons: key');
        this.setState({
            user: value,
            userid: value,
            salons: value1,
            salonsid: value1,             
            CategoryId: '1',
            // UpdatedBy: value,
        });                
    }
    
    //http://hogarbarber.developerscode.in/api/Customers/GetCustomers?SalonsId=${this.state.SalonsId}
    //http://hogarbarber.developerscode.in/api/Customers/GetCustomers
    //http://hogarbarber.developerscode.in/api/Client/ListofClientsbasedonSalonssId?SalonsId=${180}
      componentDidMount() {
        StatusBar.setHidden(true);
        console.log(`http://hogarbarber.developerscode.in/api/Customers/GetCustomers?SalonsId=${this.state.SalonsId}`)
        return fetch(`http://hogarbarber.developerscode.in/api/Customers/GetCustomers?SalonsId=${this.state.SalonsId}`)
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function() {             
                // console.log(responseJson);
            });
          })
          .catch((error) => {
            console.error(error);
          });
        }
    
    render() {

        if (this.state.isLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
              </View>
            );
          }

        return(
            <View style={{flex: 1,}}>   
             <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
             <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}>Customers</Text>  
             <TouchableOpacity style={{backgroundColor: '#00ace8', alignSelf: 'flex-end', height: 30, width: 50, marginTop: -35, marginRight: 10}} onPress = {()=> (this.props.navigation.navigate('StylistsAdd'))}>
                        <Text style={{  textAlign: 'center', marginTop: 5, color: '#fff', }}>Add </Text>  
                    </TouchableOpacity>           
             {/* <TouchableOpacity onPress = {()=> (this.props.navigation.navigate('StylistsAdd'))}>
            
                    <Text style={{color: '#fff',alignSelf: 'flex-end', alignContent: 'flex-end', fontSize: 10, fontWeight: 'bold', marginTop: -28, marginRight: 15,}}>Add</Text>                     
                </TouchableOpacity>  */}
                </View>         
                {/* <View style={styles.topBackground}>
                    <Text style={styles.headertext}> Customers </Text>  
                    <TouchableOpacity onPress = {()=> (this.props.navigation.navigate('StylistsAdd'))}>
                            <Text style={{ marginLeft: 250, marginTop: 10, borderColor: 'red', 
                            borderWidth: 2, width: 100, height: 30, }}>Add</Text>  
                        </TouchableOpacity>              
                </View>                 */}

               

                <ScrollView style={{flex: 1, maxHeight: '90%', }}>
                    <View style={{flex: 1, maxWidth: '100%', flexDirection: 'column'}}>
                        <Image                                 
                            source={require('../../Images/4.jpeg')}
                            style={{flex: 1, maxWidth: '100%', width: width,}}
                            />                        
                    </View>

                    <View style={{ flex: 1, marginTop: 10,}}>       
                        <ListView style={{marginTop: 10,}}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => 
                                <TouchableOpacity                                 
                                    onPress={()=>this.props.navigation.navigate('CustomersEdit', {CustomerId: rowData. CustomerId, salonid: this.state.SalonsId,})}
                                >
                                    <View> 
                                        <View style={Opt}>
                                            <View style={styles.topBackground1} >                                                
                                                <Text style={styles.BusinessName}>{rowData.ProfileName}</Text> 
                                                {/* <Text style={{color: '#000', }}>Banjara Hills</Text> */}
                                                <Image source={rowData.ImagePath=="" || rowData.ImagePath==null ?require('../../icons/icons/final_logo.png'):{uri:rowData.ImagePath}}
                                                    style ={styles.Image1} />                        
                                                    
                                            </View>  
                                        </View>                                                   
                                    </View>
                                </TouchableOpacity>
                            }
                        />      
                
                    </View>
                </ScrollView>                
                <View style={{ flex: 1, maxHeight:'10%', }}>
                    <NewFooter navigation ={this.props.navigation} />
                </View>

                {/* <Text>{this.state.UserId},{ this.state.SalonsId }</Text> */}
            </View>    
        )
    }
}
