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
// import Icon from 'react-native-vector-icons/Ionicons';
// import BoxShadow  from 'react-native-shadow';
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

export default class List extends Component {    

    constructor(props) {
        super(props);
        //const { params } = this.props.navigation.state.params;
        this.state = {
          isLoading: true,
        //   treatmentTitle: this.props.navigation.state.params ? this.props.navigation.state.params.treatmenttitle : 18,
          SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
          UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 431,
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

      //http://hogarbarber.developerscode.in/api/FavouriteSalons/AddSalontoFavourite?SalonId={SalonId}&UserId={UserId}
      _addfavourite(salonid) {
        return fetch(`http://hogarbarber.developerscode.in/api/FavouriteSalons/AddSalontoFavourite?SalonId=${salonid}&UserId=${this.state.userId}`)
          .then((response) => response.json())
          .then((responseJson) => {            
            this.setState({
              dataSource1: responseJson,
            });
            this.componentDidMount();
          })
          .catch((error) => {
            console.error(error);
          });
      }
      //http://hogarbarber.developerscode.in/Help/Api/GET-api-MobileSalon-GetSalonsbyTreatmentTitle_TreatmentTitle_UserId
     
      //http://hogarbarber.developerscode.in/api/FavouriteSalons/RemoveSalonFromFavourite?SalonId={SalonId}&UserId={UserId}
      _deletefavourite(salonid) {
        return fetch(`http://hogarbarber.developerscode.in/api/FavouriteSalons/RemoveSalonFromFavourite?SalonId=${salonid}&UserId=${this.state.userId}`)
          .then((response) => response.json())
          .then((responseJson) => {            
            this.setState({
              dataSource1: responseJson,
            });
            this.componentDidMount();
          })
          .catch((error) => {
            console.error(error);
          });
      }            
    
      componentDidMount() {
        StatusBar.setHidden(true);
        Api.GetActiveSalons()
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function() {             
            });
          })
          .catch((error) => {
            console.error(error);
          });
        }
    
    render() {

        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }

        return(
            <View style={{flex: 1,}}>
            
                <View style={styles.topBackground}>
                <Text style={styles.headertext}> Salons </Text> 

                {/* <Text>
                        { this.state.userId }
                </Text> */}

                </View>
                
                <ScrollView>
                <View style={{flex: 1, maxWidth: '100%', flexDirection: 'column'}}>
                    <Image 
                            //    resizeMode="contain"
                            source={require('../../Images/4.jpeg')}
                                style={{flex: 1, maxWidth: '100%', width: width,}}
                        />
                        {/* <View style={{flex: 1, flexDirection: 'column', maxWidth: '100%',}}> */}
                                    {/* <Text style={styles.headertext}>{element.BusinessName}</Text> */}
                                    {/* <Image 
                                    style={{ width:width, height:145, marginTop: -50,  }}
                                    source={require('../../Images/3.jpeg')}/>
                                    </View>                    */}
                </View>

                <Text>{this.state.UserId},{this.state.SalonsId}</Text>

                <View style={{ flex: 1, marginTop: 10,}}>
                {/* <ScrollView style={{ flex: 1 }}> */}
                
                    <ListView style={{marginTop: 10,}}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => 
                            <TouchableOpacity                                 
                                onPress={()=>this.props.navigation.navigate('SalonSearch', { SalonId: rowData.SalonsId})}
                            >
                                <View> 
                                    <View style={Opt}>
                                        <View style={styles.topBackground1} >
                                            <Stars
                                                half={true}
                                                rating={Math.round(rowData.Rating, 1)}
                                                update={(val)=>{this.setState({stars: Math.round(rowData.Rating, 1)})}}
                                                spacing={4}
                                                starSize={10}
                                                count={5}
                                                fullStar={require('../../Images/starFilled.png')}
                                                emptyStar={require('../../Images/starEmpty.png')}
                                                halfStar={require('../../Images/starHalf.png')}   
                                                                                         
                                            />  

                                                {/* <TouchableOpacity onPress ={ ()=> {
                                                    rowData.FavouriteId != "" ? this._addfavourite(this.state.) : this._deletefavourite();
                                                }}
                                                    hitSlop= {{top: 10, left: 10, bottom: 10, right: 10,}}>
                                                    <Image                                               
                                                    source={rowData.FavouriteId != "" ? require('../../Images/fav1.png') : require('../../Images/favorite.png')}
                                                    style ={{flex: 0,  alignSelf: 'flex-end', width: 20, height: 20, marginRight: 10, marginTop: 0, }}                                                 
                                                /> 
                                                </TouchableOpacity> */}
                                              <Text style={styles.BusinessName}>{rowData.BusinessName}</Text>
                                            {/* <Text style={styles.Text}> *****</Text> */}
                                            <TouchableOpacity 
                                                style={styles.button}
                                                hitSlop= {{top: 10, left: 10, bottom: 10, right: 10,}}
                                                onPress ={()=>
                                                    {
                                                        if(rowData.FavouriteId =="")
                                                        { 
                                                            this._addfavourite(rowData.SalonsId);                                                        
                                                        } 
                                                        else if(rowData.FavouriteId != "")
                                                        {
                                                            this._deletefavourite(rowData.SalonsId);
                                                        }
                                                    }
                                                } 
                                            > 

                                                <Image                                               
                                                    source={rowData.FavouriteId != "" || rowData.FavouriteId==null ? require('../../Images/fav1.png') : require('../../Images/favorite.png')}
                                                    style ={{flex: 0,  alignSelf: 'flex-end', width: 20, height: 20, marginRight: 10, marginTop: 0, }}                                                 
                                                /> 
                                                {/* <Image 
                                                    source={rowData.FavouriteId != "" ? require('../../Images/fav1.png') : require('../../Images/favorite.png')}
                                                    style ={{alignSelf: 'flex-end', width: 20, height: 20, marginRight: 10, marginTop: -10, }}                                                 
                                                />  */}
                                            </TouchableOpacity> 
                                            {/* <Text style={styles.BusinessName}>{rowData.BusinessName}</Text> */}
                                            {/* <Text style={styles.Text2}>800/-</Text>                                                 */}
                                            <Image source={rowData.ImagePath=="" || rowData.ImagePath==null ?require('../../icons/icons/final_logo.png'):{uri:rowData.ImagePath}}
                                                style ={styles.Image1} />                        
                                        </View>  
                                    </View>                                                   
                                </View>
                            </TouchableOpacity>
                        }
                    />      
                {/* </ScrollView>  */}
                </View>
                </ScrollView>
                
                <View style={{ flex: 1, maxHeight:'10%', }}>
                    <NewFooter navigation ={this.props.navigation} />
                </View>
            </View>    
        )
    }
}
