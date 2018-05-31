import React, { Component } from 'react';
import { 
    Alert,
    ActivityIndicator,
    AsyncStorage,
    Button, 
    Dimensions, 
    Image,    
    ListView,
    ScrollView,
    StyleSheet,    
    StatusBar,
    TextInput, 
    Text, 
    TouchableOpacity, 
    View, 
    } from 'react-native';
// import { SearchBar } from 'react-native-elements';

import styles from './style';
import NewFooter from '../../components/FooterComponent/index';

const { width, height } = Dimensions.get('window');

export default class Services extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.navigation);
        this.state = {
          isLoading: true,
          SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
          UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416, 
        //   SalonsId: '180',
        //   UserId: '416',
          text: '',  
          arrayholder: [], 
          showListView: false,
        } 
        
      }
    toggleListView= function () {
        this.setState({
            showListView: !this.state.showListView
        });
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

    _renderListView= function () {
        if (this.state.showListView) {
            return (
                <ListView 
                    dataSource={this.state.dataSource}                             
                    renderRow={(rowData) => 
                    <Text style={styles.rowViewContainer}  
                        // onPress={this.GetListViewItem.bind(this, rowData.Name)} >
                        onPress={()=>{this.props.navigation.navigate('SalonDetails', {SalonId: rowData.SalonsId})}} > 
                    {rowData.BusinessName},{rowData.Address}
                    </Text>}
                    enableEmptySections={true}
                    style={{marginTop: 10}} 
                /> 
            );
        } else {
            return null;
        }
    }

    subCategory() {
        return fetch(`http://hogarbarber.developerscode.in/api/TreatmentTitle/GetbyCategoryId?CategoryId=1`)    
          .then((response) => response.json())
          .then((responseJson) => {
            // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            // console.log(responseJson);
            this.setState({
              isLoading1: false,
            //   dataSource: ds.cloneWithRows(responseJson),
              mydata: responseJson,
            //   arrayholder: responseJson,
            }, function() {
              // do something with new state
              
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    // //   http://hogarbarber.developerscode.in/api/Salons/GetSalonIdByUserId?UserId=${this.state.UserId}
      componentDidMount() {
        this.subCategory();
        return fetch(`http://hogarbarber.developerscode.in/api/SalonServices/GetDatabySalonsId?SalonsId=${this.state.SalonsId}`) 
        // http://hogarbarber.developerscode.in/api/SalonServices/GetDatabySalonsId?SalonsId=180   
          .then((response) => response.json())
          .then((responseJson) => {
            // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            // console.log(responseJson);
            this.setState({
              isLoading: false,
            //   dataSource: ds.cloneWithRows(responseJson),
              //mydata: responseJson,
              arrayholder: responseJson,
            }, function() {
              // do something with new state
              
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }

      GetListViewItem (Name) {    
        Alert.alert(Name);  
       }
       
        SearchFilterFunction(text){     
            console.log(text);
            console.log(this.state.arrayholder.length);
          const newData = this.state.arrayholder.filter(function(item){
              const itemAdd = item.Address.toUpperCase()
              const itemData = item.BusinessName.toUpperCase() + ',' + itemAdd
              const textData = text.toUpperCase()
              return itemData.indexOf(textData) > -1
          })
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(newData),
              text: text,
          })
      }      

      ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
        
    render() {  
        if (this.state.isLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
              </View>
            );
          }      
          else if(this.state.isLoading1){
            return(
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
              </View>
            )
          }
        
       // const { navigate } = this.props.navigation; 
    //    const { navigate } = [];
    const t = this;
    const st = this.state;
    // console.log(this.state.mydata);
        return(          
            <View style={{ flex: 1, }}>  

                <View style={{}}>
                <ScrollView style={{ maxHeight: '95%', }}>
                    <View style={{}}>
                        <View style={styles.topBackground}> 

                            {/* <TouchableOpacity style={{ height: 40, width: 40,
                                        marginTop: 5, marginLeft: 10, }}> */}
                    <Text style={styles.headertext}> Services { this.state.userId }</Text>  
                             <TouchableOpacity style={{ flexDirection: 'row', marginTop: -40, width: 40, height: 40,}}>
                                <Image source={require('../../Images/back-arrow_left-512.png')}
                                        style={{width: 30, height: 30, resizeMode: 'contain',
                                         marginLeft: 5, marginTop: 10, }} 
                                        />
                            </TouchableOpacity>
                              <TouchableOpacity style={{backgroundColor: '#00ace8', alignSelf: 'flex-end', height: 30, width: 50, marginTop: -27, marginRight: 10}} onPress = {()=> (this.props.navigation.navigate('StylistsAdd'))}>
                        <Text style={{ textAlign: 'center', marginTop: 5, color: '#fff',  }}>Add </Text>  
                    </TouchableOpacity>  
                            {/* </TouchableOpacity>   */}

                                                                             
                    
                            <View style={styles.MainContainer}> 
                                <TextInput 
                                    style={styles.TextInputStyleClass}
                                    onChangeText={(text) => 
                                        {
                                            this.SearchFilterFunction(text)
                                            text == '' ? this.setState ({ showListView : false }) : this.setState ({ showListView : true })
                                        }}
                                    value={this.state.text}
                                    underlineColorAndroid='transparent'
                                    placeholder="Search Here" 
                                    />
                                    <TouchableOpacity style={{
                                        // borderColor: 'red', borderWidth: 2, 
                                        height: 20, width: 30, marginTop: -30, marginLeft: 10, }}
                                        onPress = {()=> this.props.navigation.navigate('List')} >
                                        <Image source={require('../../Images/search.png')}
                                            style={{  width:20, height:20, }} />
                                    </TouchableOpacity>
                                {this._renderListView()}
                            </View>
                        </View>
                    </View>
                                         
                    <View style={styles.Maincategory} >
                        {
                            
                            this.state.arrayholder.map(function(element,index,array){
                                return (
                                    <View style={styles.category} key={index}>
                                        <View style={styles.hairecare} >
                                            <TouchableOpacity style={styles.dump} 
                                                onPress={()=>t.props.navigation.navigate('ServicesEdit', { SalonServicesId: element.SalonServicesId, userid: st.UserId })} 
                                            >
                                                <Image style={styles.hairecareImage1}
                                                    //source={element.ImagePath==""?require('../../icons/icons/bodycare1.png'):{uri:element.ImagePath} }/>
                                                    source={require('../../icons/icons/bodycare1.png') }/>
                                                <Text style={styles.haircareText}>{element.TreatmentTypeId}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </View>

                    {/* <Text>{this.state.UserId},{this.state.SalonsId}</Text>  */}
                    
                </ScrollView>
                </View>                

                <View style={{ alignSelf: 'center', maxWidth: '100%', height: 50, marginTop: -25,}}>
                    <NewFooter navigation={this.props.navigation}/>
                </View>            
            </View>
        );
    }
}