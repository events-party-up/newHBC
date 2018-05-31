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

import Api from '../../api';
import styles from './style';

const { width, height } = Dimensions.get('window');

export default class SalonDetails extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            isLoading: true,
            isBusinessLoading: true,
            isClassLoading: true,
            isCityLoading: true,
            isPopularityLoading: true,
            isAreaLoading: true,
            // SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
            UserId: this.props.navigation.state.params ? this.props.navigation.state.params.UserId : 416,   
            // UserId: '',          
            SalonName: '',
            BusinessTypeId: '',
            Website: '',           
            BusinessName: '', 
            Address: '',           
            Name: '',   
            PostalCode: '',        
            MemberTypeId: '',
            Note: '',
            PhoneNumber: '',
            Email: '',
            Password: '',
            BusinessType: '', 
            CityId: '',   
            AreaId: '',        
            CountryId: '',
            ManageYourBookings: '',
            ReasonForSigningUp: '',
            Website: '',
            GoogleMaps: 'Dilshuknagar',
            Image: '6467aa12-df10-43f6-b2f2-a7edaab1efb1.jpg',
            ImagePath: 'http://appypetsadmin.developerscode.in/Files/SalonDisplayImages/36a7ad5c-280c-414e-9247-85438d056359.jpg',
            UpdatedBy: '',
            FrontendStatus: '',
            SalonsId: '',   
            NoofChairs: '',       
            Available: '',  
            Popularity: '',  
            ClassId: '',              
            cl: [],
            bs: [],
            ct: [],
            ar: [],
        }
        this._getClasses();
        this._getBusinessType();
        this._getArea();
        this._getCity();
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
            // UserId: value,
            salons: value1,
            salonsid: value1,             
            CategoryId: '1',
            // UpdatedBy: value,
        });                
    }

    onChanged(name, email, password){
        filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(this.state.name.length == 0) {
          Alert.alert("Alert","Enter Name")
          return false;
      } else if(this.state.email.length == 0) {
          Alert.alert("Alert","Enter Email")
          return false;
      } else if(this.state.password.length == 0) {
          Alert.alert("Alert","Enter Password")
          return false;
      } else if(!filter.test(this.state.email)) {
          Alert.alert("Alert","Enter Valid Email")
          return false;
      } else if(this.state.password.length < 6 || this.state.assword.length > 18 ) {
          Alert.alert("Alert","Password Must be Between 6 -18 Characters")
          return false;
      } else if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
          return true;
      } else {
          Alert.alert("Alert","Enter Valid Details")
          return false;
      }      
    }

    // onChanged(PhoneNumber){
    //     if(this.state.mobile.length ==10) {
    //         return true;
    //     } else {
    //         Alert.alert("Alert","Enter Valid Mobile Number")
    //         return false;
    //     }      
    // }

    componentDidMount() {
        // Alert.alert("hello");
        console.log(`http://hogarbarber.developerscode.in/api/Salons/GetByUserId?UserId=${this.state.UserId}`)
        return fetch(`http://hogarbarber.developerscode.in/api/Salons/GetByUserId?UserId=${this.state.UserId}`)
            .then((response) => response.json())
            .then((responseJson) => {
                // let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                        // UserId: responseJson[0].UserId,
                        SalonName: responseJson[0].SalonName,
                        BusinessTypeId: responseJson[0].BusinessTypeId,
                        Website: responseJson[0].Website,
                        CityId: responseJson[0].CityId,
                        AreaId: responseJson[0].AreaId,
                        ClassId: responseJson[0].ClassId,                        
                        Address:responseJson[0].Address,
                        PostalCode: responseJson[0].PostalCode,         
                        NoofChairs: responseJson[0].Noofchairs,                        
                        Popularity: responseJson[0].Popularity,
                        BusinessName: responseJson[0].BusinessName,          
                        Name: responseJson[0].Name,        
                        MemberTypeId: responseJson[0].MemberTypeId,
                        Note: responseJson[0].Note,
                        PhoneNumber: responseJson[0].PhoneNumber,
                        Email: responseJson[0].Email,
                        Password: responseJson[0].Password,
                        BusinessType: responseJson[0].BusinessType,          
                        CountryId: responseJson[0].CountryId,
                        ManageYourBookings: responseJson[0].ManageYourBookings,
                        ReasonForSigningUp: responseJson[0].ReasonForSigningUp,
                        Website: responseJson[0].Website,
                        GoogleMaps: responseJson[0].GoogleMaps,
                        Image: responseJson[0].Image,
                        ImagePath: responseJson[0].ImagePath,
                        UpdatedBy: responseJson[0].UpdatedBy,
                        FrontendStatus: responseJson[0].FrontendStatus,
                        SalonsId: responseJson[0].SalonsId,         
                        Available: responseJson[0].Available,
                        Popularity: responseJson[0].Popularity,
                }, function () {   
                    console.log(responseJson)                 
                });
                // if(responseJson[0].Message == "Mobile Number Already Exist") {                        
                //     Alert.alert("Alert","Mobile Number Already Registered");
                // }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _getCity() {
        return fetch('http://hogarbarber.developerscode.in/api/City/GetdataByIsActive')
            .then((response) => response.json())
            .then((responseJson) => {                
                this.setState({
                    isCityLoading: false,
                    dbcity: responseJson,
                }, function () {                       
                    responseJson.map((value, index) => {
                        this.state.ct.push(<Picker.Item key={value.CityId} label={value.CityName} value={value.CityId} />);
                    })         
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _getBusinessType() {
        return fetch('http://hogarbarber.developerscode.in/api/Category/GetCategoryByIsActive')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isBusinessLoading: false,
                    dbBusinesstype: responseJson,
                }, function () {
                    responseJson.map((value, index) => {
                        this.state.bs.push(<Picker.Item key={value.CategoryId} label={value.Category} value={value.CategoryId} />);                        
                    })
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _getArea() {
        return fetch(`http://hogarbarber.developerscode.in/api/Area/GetDatabyCityIdByIsActive?CityId=6`)
        // http://hogarbarber.developerscode.in/api/Area/GetDatabyCityIdByIsActive?CityId=${this.state.CityId}
            .then((response) => response.json())
            .then((responseJson) => {                
                this.setState({
                    isAreaLoading: false,
                    dbArea: responseJson,
                }, function () {
                    responseJson.map((value, index) => {
                        this.state.ar.push(<Picker.Item key={value.AreaId} label={value.AreaName} value={value.AreaId} />);
                    })
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _getClasses() {
        return fetch('http://hogarbarber.developerscode.in/api/ClassesApi/GetActiveClasses')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isClassLoading: false,
                    dbClasses: responseJson,
                }, function () {
                    responseJson.map((value, index) => {
                        this.state.cl.push(<Picker.Item key={value.ClassId} label={value.ClassName} value={value.ClassId} />);
                    })
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _Update() {          
        console.log(`http://hogarbarber.developerscode.in/api/Salons/UpdateSalons?BusinessName=${this.state.BusinessName}&Address=${this.state.Address}&Name=${this.state.Name}&PostalCode=${this.state.PostalCode}&MemberTypeId=${this.state.MemberTypeId}&Note=hello&PhoneNumber=${this.state.PhoneNumber}&Email=${this.state.Email}&Password=${this.state.Password}&BusinessType=${this.state.BusinessType}&CityId=${this.state.CityId}&AreaId=${this.state.AreaId}&CountryId=${this.state.CountryId}&ManageYourBookings=${this.state.ManageYourBookings}&ReasonForSigningUp=${this.state.ReasonForSigningUp}&Website=${this.state.Website}&GoogleMaps=${this.state.GoogleMaps}&Image=${this.state.Image}&ImagePath=${this.state.ImagePath}&UpdatedBy=${this.state.UpdatedBy}&FrontendStatus=${this.state.FrontendStatus}&SalonsId=${this.state.SalonsId}&Noofchairs=${this.state.Noofchairs}&Available=${this.state.Available}&Popularity=${this.state.Popularity}&ClassId=${this.state.ClassId}`);
        return fetch(`http://hogarbarber.developerscode.in/api/Salons/UpdateSalons?BusinessName=${this.state.BusinessName}&Address=${this.state.Address}&Name=${this.state.Name}&PostalCode=${this.state.PostalCode}&MemberTypeId=${this.state.MemberTypeId}&Note=hello&PhoneNumber=${this.state.PhoneNumber}&Email=${this.state.Email}&Password=${this.state.Password}&BusinessType=${this.state.BusinessType}&CityId=${this.state.CityId}&AreaId=${this.state.AreaId}&CountryId=${this.state.CountryId}&ManageYourBookings=${this.state.ManageYourBookings}&ReasonForSigningUp=${this.state.ReasonForSigningUp}&Website=${this.state.Website}&GoogleMaps=${this.state.GoogleMaps}&Image=${this.state.Image}&ImagePath=${this.state.ImagePath}&UpdatedBy=${this.state.UpdatedBy}&FrontendStatus=${this.state.FrontendStatus}&SalonsId=${this.state.SalonsId}&Noofchairs=${this.state.Noofchairs}&Available=${this.state.Available}&Popularity=${this.state.Popularity}&ClassId=${this.state.ClassId}`)
        //,{
           // method: 'POST',
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json'
            // },
        // }
    // )
          .then((response) => response.json())
          .then((responseJson) => {            
            this.setState({
              dataSource2: responseJson,
            });            
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
        // this.props.navigation.navigate('EditProfile');
        return true;
    }

    render() {

        const t = this;
        const st = this.state;
        
        if (this.state.isLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
        if (this.state.isClassLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
        if (this.state.isBusinessLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
        if (this.state.isCityLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
        if (this.state.isAreaLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }        

        const { navigate } = [];    

        return (                            
            <View>
                <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}>Salon Details</Text>
                </View>

                <ScrollView style={{ height: '90%', }}>                      
                        <View>
                        <View style={styles.pad}>
                            <Image
                                source={require('../../Images/hbhairs.png')}
                                //source={element.ImagePath == "" || element.ImagePath == null ? require('../../Images/5.jpeg') : { uri: element.ImagePath }}
                                // source={require('../../icons/icons/checklist_copy.png')}                 
                                style={styles.Image} />
                        </View>

                        <KeyboardAvoidingView>
                            <View style={{ backgroundColor: '#eaf8fd', height: 30, }}>
                                <Text style={styles.Name1}> Personal Information </Text>
                                {/* <TextInput style={styles.Name} underlineColorAndroid="transparent">{element.Name}</TextInput>                      */}
                                {/* <Text style={styles.Check2}>Edit</Text> */}
                            </View>
                        </KeyboardAvoidingView>

                        {/* <Text>{this.state.UserId},{this.state.SalonsId}</Text>  */}

                        {/* <KeyboardAvoidingView>
                            <View style={{ backgroundColor: '#eaf8fd', height: 30, marginTop: 10, }}>
                                <Text style={styles.Name1}>{st.BusinessName}</Text>
                            </View>
                        </KeyboardAvoidingView> */}


                        <KeyboardAvoidingView>


                        <View style={{ marginTop: 15, marginBottom: 5, }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Salon Name : </Text>
                                    <TextInput style={styles.Text5} underlineColorAndroid="transparent"
                                    onChangeText={(value)=> t.setState({BusinessName:value})}>{st.BusinessName}</TextInput>
                                </View>
                            </View>
                           

                           

                            <View style={{ marginTop: 0 }}>
                                <View style={styles.topBackground}>
                                    <Picker style={{marginTop: -10,}}
                                        selectedValue={st.BusinessTypeId}
                                        onValueChange={(itemValue, itemIndex) => {   
                                            t.setState({BusinessTypeId: itemValue})}}>
                                        <Picker.Item label="Business Type" value="Business Type" />
                                        {
                                            st.bs.map((val,ind)=> val)
                                        }
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Email : </Text>
                                    <TextInput style={styles.Text1} 
                                    underlineColorAndroid="transparent"
                                    onChangeText={(value)=> t.setState({Email:value})}
                                    minLength={10}
                                    maxLength={50}  
                                    // value = {this.state.Email}
                                    >{st.Email}</TextInput>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Website : </Text>
                                    <TextInput style={styles.Text2} underlineColorAndroid="transparent"
                                    onChangeText={(value)=> t.setState({Website:value})}>{st.Website}</TextInput>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Name : </Text>
                                    <TextInput style={styles.Text1}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({Name:value})}
                                        blurOnSubmit={false}
                                        minLength={5}
                                        maxLength={26} 
                                        // value = {this.state.Name}
                                        >{st.Name}</TextInput>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Password : </Text>
                                    <TextInput style={styles.Text2}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({Password:value})}
                                        secureTextEntry={true}                                     
                                        // value = {this.state.Password} 
                                        >{st.Password}</TextInput>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Picker style={{marginTop: -10,}}
                                        selectedValue={st.ClassId}
                                        onValueChange={(itemValue, itemIndex) => t.setState({ ClassId: itemValue })}>
                                        <Picker.Item label="Classes" value={0} />     
                                        {
                                            st.cl.map((val,ind)=> val)
                                        }
                                    </Picker>
                                </View>
                            </View>                                            

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Phone Number : </Text>
                                    <TextInput style={styles.Text2} 
                                    underlineColorAndroid="transparent"
                                    onChangeText={(value)=> t.setState({PhoneNumber:value})}
                                    keyboardType={'numeric'}
                                    // value={this.state.PhoneNumber}
                                    >{st.PhoneNumber}</TextInput>
                                    {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Address : </Text>
                                    <TextInput style={styles.Text2} underlineColorAndroid="transparent"
                                    onChangeText={(value)=> t.setState({Address:value})}>{st.Address}</TextInput>
                                    {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Postal code : </Text>
                                    <TextInput style={styles.Text2} underlineColorAndroid="transparent"
                                    onChangeText={(value)=> t.setState({PostalCode:value})}>{st.PostalCode}</TextInput>
                                    {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                                </View>
                            </View>                                      

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Picker style={{marginTop: -10,}}
                                        selectedValue={st.CityId}
                                        onValueChange={(itemValue, itemIndex) => t.setState({CityId: itemValue})}>
                                        <Picker.Item label="City" value="City" />
                                        {/* <Text style={styles.Text}> City : </Text>                        
                                        <TextInput style={styles.Text2} underlineColorAndroid="transparent">{element.CityId}</TextInput> */}
                                        {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                                        {/* {st.ct} */}
                                        {
                                            st.ct.map((val,ind)=> val)
                                        }
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Picker style={{marginTop: -10,}}
                                        selectedValue={st.AreaId}
                                        onValueChange={(itemValue, itemIndex) => t.setState({AreaId: itemValue})}>
                                        <Picker.Item label="Area" value="Area" />
                                        {/* <Text style={styles.Text}> Area : </Text>                        
                                        <TextInput style={styles.Text2} underlineColorAndroid="transparent">{element.AreaId}</TextInput> */}
                                        {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                                        {/* {st.ar} */}
                                        {
                                            st.ar.map((val,ind)=> val)
                                        }
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Picker style={{marginTop: -10,}}
                                        selectedValue={st.Popularity}
                                        onValueChange={(itemValue, itemIndex) => t.setState({Popularity: itemValue})}>
                                        <Picker.Item label="Popularity" value="Popularity" />
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                        {/* <Text style={styles.Text}> Popularity : </Text>                        
                                        <TextInput style={styles.Text2} underlineColorAndroid="transparent">{element.Popularity}</TextInput> */}
                                        {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> No Of Chairs : </Text>
                                    <TextInput style={styles.Text2} underlineColorAndroid="transparent"
                                    onChangeText={(value)=> t.setState({Noofchairs:value})}>{st.Noofchairs}</TextInput>
                                    {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                                </View>
                            </View>

                            <View style={{ marginTop: 5, marginBottom: 25, }}>
                                <View style={styles.topBackground}>
                                    <Text style={styles.Text}> Available chairs : </Text>
                                    <TextInput style={styles.Text2} underlineColorAndroid="transparent"
                                    onChangeText={(value)=> t.setState({Available:value})}>{st.Available}</TextInput>
                                    {/* <TextInput style={styles.Text3} underlineColorAndroid="transparent">{element.Gender==0?'Male':'Female'}</TextInput>                                       */}
                                </View>
                            </View>                                      
                        </KeyboardAvoidingView>

                       

                    </View>
                </ScrollView>

                <View style={{flex: 1,  }}  >  
                            <TouchableOpacity onPress ={()=>t._Update()} style={styles.buttonproceed1}>
                                <Text style={styles.buttonproceed}
                                >Update</Text>
                            </TouchableOpacity>
                        </View>


            </View>                    
            
        );
    }
}
