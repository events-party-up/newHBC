import React, { Component } from 'react';
import { 
    Alert,
    ActivityIndicator, 
    AsyncStorage,
    BackHandler,
    Dimensions, 
    Image, 
    KeyboardAvoidingView,
    ListView,
    Picker,
    ScrollView,
    StyleSheet, 
    Text,
    TextInput,
    TouchableOpacity, 
    View,
         
    } from 'react-native';

// import Api from '../../api';
import styles from './style';

const { width, height } = Dimensions.get('window');

export default class ServicesEdit extends Component {

    constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {        
      isLoading: true,   
      isCleanUpTimeLoading: true,
      isDurationLoading: true,
      isSelectServiceLoading: true,
      isPricingTypeLoading: true,
      SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
      UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416, 
      SalonServicesId: this.props.navigation.state.params ? this.props.navigation.state.params.SalonServicesId: 147,
    //   UserId: '416',
      CleanUpTimeId: '',        
    //   SalonsId: '180',
      CategoryId: '',
      TreatmentTypeId: '',  
      TreatmentTitleId: '', 
      PricingTypeId: '', 
      DurationId: '',
      Price: '',
      Sale: '',
      CleanUpTime: '',
      Description: '',
      UpdatedBy: '',
      featuredServices: '0',
    //   SalonServicesId: '',
      ImagePath: 'http://appypetsadmin.developerscode.in/Files/SalonDisplayImages/36a7ad5c-280c-414e-9247-85438d056359.jpg',
      cut: [],
      dr: [],
      ss: [],
      pt: [],
    }
    this._getCleanUpTime();
    this._getDuration();
    this._getSelectService();
    this._getPricingType();
    
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

//   Test() {
//     return fetch('http://hogarbarber.developerscode.in/api/SalonServices/Update?SalonsId=222&CategoryId=2&TreatmentTypeId=Full cat groom - sale price&TreatmentTitleId=21&PricingTypeId=1&DurationId=1&Price=409&Sale=20&CleanUpTime=3&Description=Hello world&UpdatedBy=0&featuredServices=0&SalonServicesId=248&ImagePath=http://appypetsadmin.developerscode.in/Files/SalonDisplayImages/36a7ad5c-280c-414e-9247-85438d056359.jpg')
//     .then((response) => response.json())
//     .then((responseJson) => {        
//         console.log(responseJson);
//       this.setState({
//         isLoading: false,
//         dataSource: responseJson,           
//           //CleanUpTimeId: responseJson[0].CleanUpTimeId,
//           DurationId: responseJson[0].DurationId,
//           TreatmentTitleId: responseJson[0].TreatmentTitleId, 
//           PricingTypeId: responseJson[0].PricingTypeId, 
//           SalonsId: responseJson[0].SalonsId,
//           CategoryId: responseJson[0].CategoryId,
//           Category: responseJson[0].Category,
//           TreatmentTypeId: responseJson[0].TreatmentTypeId,    
//           Price: responseJson[0].Price,
//           Description: responseJson[0].Description,
//           UpdatedBy: responseJson[0].UpdateBy,
//           featuredServices: responseJson[0].featuredServices,
//           SalonServicesId: responseJson[0].SalonServicesId,
//           ImagePath: responseJson[0].ImagePath,  
//           CleanUpTime: responseJson[0].CleanUpTime, 
//           Sale: responseJson[0].Sale ,  
//           // Description: responseJson[0].Description,             
      
//       }, function() {            
//         // do something with new state
//       //   console.log(responseJson);
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   }

  componentDidMount() {
    // return this.Test();
    console.log(this.state.SalonServicesId);
    return fetch(`http://hogarbarber.developerscode.in/api/SalonServices/GetDatabyId?SalonServicesId=${this.state.SalonServicesId}`)
      .then((response) => response.json())
      .then((responseJson) => {        
          console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson,           
            //CleanUpTimeId: responseJson[0].CleanUpTimeId,
            SerUserId: responseJson[0].UserId,
            DurationId: responseJson[0].DurationId,
            TreatmentTitleId: responseJson[0].TreatmentTitleId, 
            PricingTypeId: responseJson[0].PricingTypeId, 
            SalonsId: responseJson[0].SalonsId,
            CategoryId: responseJson[0].CategoryId,
            Category: responseJson[0].Category,
            TreatmentTypeId: responseJson[0].TreatmentTypeId,    
            Price: responseJson[0].Price,
            Description: responseJson[0].Description,
            UpdatedBy: responseJson[0].UpdateBy,
            featuredServices: responseJson[0].featuredServices,
            // SalonServicesId: responseJson[0].SalonServicesId,
            ImagePath: responseJson[0].ImagePath,  
            CleanUpTimeId: responseJson[0].CleanUpTimeId, 
            CleanUpTime: responseJson[0].CleanUpTime,
            Sale: responseJson[0].Sale ,                         
        }, function() {            
          // do something with new state
        //   console.log(responseJson);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getCleanUpTime() {
    return fetch('http://hogarbarber.developerscode.in/api/CleanUpTime/GetData')
      .then((response) => response.json())
      .then((responseJson) => {        
        this.setState({
          isCleanUpTimeLoading: false,
          dbCleanuptime: responseJson,
        }, function() {            
            responseJson.map((value, index) => {
                this.state.cut.push(<Picker.Item key={value.CleanUpTimeId} label={value.CleanUpTime} value={value.CleanUpTimeId} />);
            });         
        }) 
    })  
    .catch((error) => {
        console.error(error);
    });
  }

  _getDuration() {
    return fetch('http://hogarbarber.developerscode.in/api/Duration/GetData')
      .then((response) => response.json())
      .then((responseJson) => {        
        this.setState({
          isDurationLoading: false,
          dbDuration: responseJson,
        }, function() {            
            responseJson.map((value, index) => {
                this.state.dr.push(<Picker.Item key={value.DurationId} label={value.Duration} value={value.DurationId} />);
        });
      })
    })
      .catch((error) => {
        console.error(error);
      });
  }

  _getSelectService() {
    return fetch('http://hogarbarber.developerscode.in/api/TreatmentTitle/GetDataIsActive')
      .then((response) => response.json())
      .then((responseJson) => {
        
        this.setState({
          isSelectServiceLoading: false,
          dbSelectService: responseJson,
        }, function() {            
            responseJson.map((value, index) => {
                this.state.ss.push(<Picker.Item key={value.TreatmentTitleId} label={value.TreatmentTitle} value={value.TreatmentTitleId} />);
          
        });
      })
    })
      .catch((error) => {
        console.error(error);
      });
  }

  _getPricingType() {
    return fetch('http://hogarbarber.developerscode.in/api/PricingType/GetData')
      .then((response) => response.json())
      .then((responseJson) => {
        
        this.setState({
          isPricingTypeLoading: false,
          dbPricingType: responseJson,
        }, function() {   
            // console.log(responseJson);
            responseJson.map((value, index) => {
                this.state.pt.push(<Picker.Item key={value.PricingTypeId} label={value.PricingType} value={value.PricingTypeId} />);        
          
        });
      })
    })
      .catch((error) => {
        console.error(error);
      });
  }

  _Update() {
    
    // console.log(this.state.userId);
    // console.log(this.state.text);
    // return Api.InsertSalonReviews(this.state.SalonId,this.state.userId,this.state.text,overall,this.state.Salon,this.state.SalonServicesId,this.state.EmployeeId)
    // return console.log(`http://hogarbarber.developerscode.in/api/SalonServices/Update?SalonsId=${this.state.SalonsId}&CategoryId=${this.state.CategoryId}&TreatmentTypeId=${this.state.TreatmentTypeId}&TreatmentTitleId=${this.state.TreatmentTitleId}&PricingTypeId=${this.state.PricingTypeId}&DurationId=${this.state.DurationId}&Price=${this.state.Price}&Sale=${this.state.Sale}&CleanUpTime=${this.state.CleanUpTime}&Description=${this.state.Description}&UpdatedBy=${this.state.UpdatedBy}&featuredServices=${this.state.featuredServices}&SalonServicesId=${this.state.SalonServicesId}&ImagePath=${this.state.ImagePath}`)
    // return fetch(`http://hogarbarber.developerscode.in/api/SalonServices/Update?SalonsId=${this.state.SalonsId}&CategoryId=${this.state.CategoryId}&TreatmentTypeId=${this.state.TreatmentTypeId}&TreatmentTitleId=${this.state.TreatmentTitleId}&PricingTypeId=${this.state.PricingTypeId}&DurationId=${this.state.DurationId}&Price=${this.state.Price}&Sale=${this.state.Sale}&CleanUpTime=${this.state.CleanUpTime}&Description=${this.state.Description}&UpdatedBy=${this.state.UpdatedBy}&featuredServices=${this.state.featuredServices}&SalonServicesId=${this.state.SalonServicesId}&ImagePath=${this.state.ImagePath}`)
    console.log(`http://hogarbarber.developerscode.in/api/SalonServices/Update?SalonsId=${this.state.SalonsId}&CategoryId=${this.state.CategoryId}&TreatmentTypeId=${this.state.TreatmentTypeId}&TreatmentTitleId=${this.state.TreatmentTitleId}&PricingTypeId=${this.state.PricingTypeId}&DurationId=${this.state.DurationId}&Price=${this.state.Price}&Sale=${this.state.Sale}&CleanUpTime=${this.state.CleanUpTime}&Description=${this.state.Description}&UpdatedBy=${this.state.UpdatedBy}&featuredServices=${this.state.featuredServices}&SalonServicesId=${this.state.SalonServicesId}&ImagePath=${this.state.ImagePath}`)
    return fetch(`http://hogarbarber.developerscode.in/api/SalonServices/Update?SalonsId=${this.state.SalonsId}&CategoryId=${this.state.CategoryId}&TreatmentTypeId=${this.state.TreatmentTypeId}&TreatmentTitleId=${this.state.TreatmentTitleId}&PricingTypeId=${this.state.PricingTypeId}&DurationId=${this.state.DurationId}&Price=${this.state.Price}&Sale=${this.state.Sale}&CleanUpTime=${this.state.CleanUpTime}&Description=${this.state.Description}&UpdatedBy=${this.state.UpdatedBy}&featuredServices=${this.state.featuredServices}&SalonServicesId=${this.state.SalonServicesId}&ImagePath=${this.state.ImagePath}`
    //,{
       // method: 'POST',
        // headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        // },
    // }
)
      .then((response) => response.json())
      .then((responseJson) => {            
        this.setState({
          dataSource2: responseJson,
        });
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
}

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

// componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
// }

handleBackButtonClick() {
    this.props.navigation.navigate('EditProfile');
    return true;
}

  render() {

        const t = this;
        const st = this.state; 

    if (st.isLoading) {
      return (
        <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
        </View>
      );
    }
    if (st.isCleanUpTimeLoading) {
        return (
            <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
            </View>
        );
    }
    if (st.isDurationLoading) {
        return (
            <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
            </View>
        );
    }
    if (st.isSelectServiceLoading) {
        return (
            <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
            </View>
        );
    }
    if (st.isPricingTypeLoading) {
        return (
            <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
            </View>
        );
    }
    const { navigate } = this.props.navigation;

    // const { navigate } = [];
    
        return(           
            
            <View>
                {
                st.dataSource.map(function(element,index,array){
                //console.log(element.Email)
                    // t.setState({
                    //     CleanUpTimeId: element.CleanUpTimeId,
                    //     DurationId: element.DurationId,
                    //     TreatmentTitleId: element.TreatmentTitleId, 
                    //     PricingTypeId: element.PricingTypeId,                    
                    // });
                return( 
                <View key={index}>

                    <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                        <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}>  Edit Services  </Text>
                        <TouchableOpacity onPress = {()=> navigate('Services')}
                        style={{marginTop: -40, height: 40, width: 40,}}>
                                    <Image
                                        source={require('../../Images/back-arrow_left-512.png')}                                                
                                        style={{ margin: 5, height: 30, width: 30, }} />  
                                </TouchableOpacity>
                    </View>

                    <ScrollView style={{height: '90%',}}>                     
                
                <View>                    
                    <View style={styles.pad}>                                     
                            <Image 
                                source={require('../../Images/hbhairs.png')}
                                // source={require('../../icons/icons/checklist_copy.png')}                    
                                    style ={styles.Image} />                                               
                    </View> 

                {/* <KeyboardAvoidingView>
                <View style={{backgroundColor: '#eaf8fd', height: 30,}}> 
                <Text style={styles.Name1}> Edit Services </Text>                */}
                    {/* <TextInput style={styles.Name} underlineColorAndroid="transparent">{element.Name}</TextInput>                      */}
                    {/* <Text style={styles.Check2}>Edit</Text> */}
                {/* </View>
                </KeyboardAvoidingView>    */}
                
                {/* <Text>{st.UserId},{st.SalonsId}</Text>                */}
               
                <KeyboardAvoidingView>                  

                <View style={{ marginTop: 10}}>                   
                    <View style={styles.topBackground}>
                        <Text style={styles.Text}>Service Name :</Text>                        
                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                        onChangeText={(value)=> t.setState({TreatmentTypeId:value})} >
                        {st.TreatmentTypeId}</TextInput>                                    
                    </View>                    
                </View>

                <View style={{ marginTop: 5}}>                   
                    <View style={styles.topBackground}>
                    <Picker style={{marginTop: -10, marginLeft: -3}}
                        selectedValue={st.TreatmentTitleId}
                        onValueChange={(itemValue, itemIndex) => t.setState({TreatmentTitleId: itemValue})}>
                        <Picker.Item label="Service Type" value="Service Type" />
                        {/* <Text style={styles.Text}> Service Type :</Text>                        
                        <TextInput style={styles.Text1} underlineColorAndroid="transparent">{element.TreatmentTitleId}</TextInput>                                       */}
                        {
                            st.ss.map((val,ind)=> val)
                        }
                    </Picker>
                    </View>                    
                </View>

                <View style={{ marginTop: 5}}>                   
                    <View style={styles.topBackground}>
                    <Picker style={{marginTop: -10, marginLeft: -3}}
                        selectedValue={st.PricingTypeId}
                        onValueChange={(itemValue, itemIndex) => t.setState({PricingTypeId: itemValue})}>
                        <Picker.Item label="Pricing Type" value="Pricing Type" />
                        {/* <Text style={styles.Text}> Pricing Type :</Text>                        
                        <TextInput style={styles.Text2} underlineColorAndroid="transparent">{element.PricingTypeId}</TextInput>                                       */}
                        {
                            st.pt.map((val,ind)=> val)
                        }
                    </Picker>
                    </View>                    
                </View>

                <View style={{ marginTop: 5}}>                   
                    <View style={styles.topBackground}>
                    <Picker style={{marginTop: -10, marginLeft: -3}}
                        selectedValue={st.DurationId}
                        onValueChange={(itemValue, itemIndex) => t.setState({DurationId: itemValue})}>
                        <Picker.Item label="Duration" value="Duration" />
                        {/* <Text style={styles.Text}> Duration :</Text>    
                        <TextInput style={styles.Text2} underlineColorAndroid="transparent">{element.Duration}</TextInput>                       */}
                        {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                        {
                            st.dr.map((val,ind)=> val)
                        }
                    </Picker>
                    </View>                    
                </View>

                <View style={{ marginTop: 5}}>                   
                    <View style={styles.topBackground}>
                    <Text style={styles.PriceText}> Price :</Text> 
                    <TextInput 
                            style={styles.Text2} 
                            underlineColorAndroid="transparent"                            
                            onChangeText={(value)=> t.setState({Price:value})}                      
                            >{st.Price}</TextInput>
                        {/* <Picker
                            selectedValue={st.Price}
                            onValueChange={(itemValue, itemIndex) => t.setState({Price: itemValue})}>
                            <Picker.Item label="Price" value="Price" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="200" value="200" />
                            <Picker.Item label="35" value="35" />
                            <Picker.Item label="49" value="49" />
                            <Picker.Item label="55" value="55" />  */}
                        {/* <TextInput style={styles.Text2} underlineColorAndroid="transparent">{element.Price}</TextInput>                      */}
                        {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                        {/* </Picker> */}
                    </View>                    
                </View>

                <View style={{ marginTop: 5}}>                   
                    <View style={styles.topBackground}>
                    <Picker    style={{marginTop: -10, marginLeft: -3}}                    
                        selectedValue={st.CleanUpTime}
                        onValueChange={(itemValue, itemIndex) => t.setState({CleanUpTime: itemValue})}>
                        <Picker.Item label="Cleanup Time" value="Cleanup Time" />
                        {/* <Text style={styles.Text}> Cleanup Time :</Text>                        
                        <TextInput style={styles.Text2} underlineColorAndroid="transparent">{element.CleanUpTime}</TextInput> */}
                        {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                        {
                            st.cut.map((val,ind)=> val)
                        }
                    </Picker>
                    </View>                    
                </View>

                <View style={{ marginTop: 5, marginBottom: 0,}}>                   
                    <View style={styles.topBackground}>
                        <Text style={styles.DescriptionText}> Description :</Text>                        
                        <TextInput 
                            style={styles.Text2} 
                            underlineColorAndroid="transparent"                            
                            onChangeText={(value)=> t.setState({Description:value})}                            
                            >
                            {st.Description}</TextInput>
                        {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                    </View>                    
                </View>

                             
                </KeyboardAvoidingView>

                </View>
                </ScrollView>

                <View style={{flex: 1,  marginTop: 0,}}  >  
                    <TouchableOpacity 
                     onPress ={()=>t._Update()} style={styles.buttonproceed1}>
                        {/* onPress={() => this.props.navigation.navigate('Orders')}> */}
                        <Text style={styles.buttonproceed}>Update Service</Text>
                    </TouchableOpacity>
                </View> 
                </View>
                )
            })
        }       
                
            </View>
        );
    }
}
