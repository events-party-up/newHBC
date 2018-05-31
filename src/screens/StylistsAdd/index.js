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

export default class StylistsAdd extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            isLoading: true,            
            isPricingLevelLoading: true,
            SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
            UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416, 
            // SalonsId: '180',
            // UserId: '416',
            EmployeeName: '',
            PricingLevel: '',
            JobTitle: '',
            Phone: '',
            Gender: '',
            Email: '',
            StartDate: '04-05-2018',
            StartTime: '9:00',
            EndDate: '04-05-2020',
            EndTime: '21:00',
            About: '',
            Image: '6467aa12-df10-43f6-b2f2-a7edaab1efb1.jpg',
            ImagePath: 'http://appypetsadmin.developerscode.in/Files/SalonDisplayImages/36a7ad5c-280c-414e-9247-85438d056359.jpg',
            CreatedBy: '416',
            // SalonEmployeesId: '',
            DOB: '28-12-1991',
            DOJ: '04-05-2018',
            Age: '',
            pt: [],
        }
        this._getPricingLevel();
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

    onChanged(Name, Email){
        filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(this.state.Name.length == 0) {
          Alert.alert("Alert","Enter Name")
          return false;
      } else if(this.state.Email.length == 0) {
          Alert.alert("Alert","Enter Email")
          return false;
      } else if(!filter.test(this.state.Email)) {
          Alert.alert("Alert","Enter Valid Email")
          return false;
      } else if(this.state.Name.length > 0 && this.state.Email.length > 0 ) {
          return true;
      } else {
          Alert.alert("Alert","Enter Valid Details")
          return false;
      }      
    }  

    onChanged(text){
        if(this.state.mobile.length ==10) {
            return true;
        } else {
            Alert.alert("Alert","Enter Valid Mobile Number")
            return false;
        }      
    } 

    _getPricingLevel() {
        return fetch('http://hogarbarber.developerscode.in/api/PricingType/GetData')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isPricingLevelLoading: false,
                dbPricingType: responseJson,
            }, function () {                    
                responseJson.map((value, index) => {
                    val = ""+value.PricingType;
                    this.state.pt.push(<Picker.Item key={value.PricingTypeId} label={val} value={value.PricingTypeId} />);
                });                    
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
    _Save() {   
        console.log(`http://hogarbarber.developerscode.in/api/SalonEmployees/Insert?EmployeeName=${this.state.EmployeeName}&PricingLevel=${this.state.PricingLevel}&JobTitle=${this.state.JobTitle}&Phone=${this.state.Phone}&Gender=${this.state.Gender}&Email=${this.state.Email}&StartDate=${this.state.StartDate}&StartTime=${this.state.StartTime}&EndDate=${this.state.EndDate}&EndTime=${this.state.EndTime}&About=${this.state.About}&SalonsId=${this.state.SalonsId}&Image=${this.state.Image}&ImagePath=${this.state.ImagePath}&IsActive=1&CreatedBy=${this.state.CreatedBy}&DOB=${this.state.DOB}&DOJ=${this.state.DOJ}&Age=${this.state.Age}`)     
        return fetch(`http://hogarbarber.developerscode.in/api/SalonEmployees/Insert?EmployeeName=${this.state.EmployeeName}&PricingLevel=${this.state.PricingLevel}&JobTitle=${this.state.JobTitle}&Phone=${this.state.Phone}&Gender=${this.state.Gender}&Email=${this.state.Email}&StartDate=${this.state.StartDate}&StartTime=${this.state.StartTime}&EndDate=${this.state.EndDate}&EndTime=${this.state.EndTime}&About=${this.state.About}&SalonsId=${this.state.SalonsId}&Image=${this.state.Image}&ImagePath=${this.state.ImagePath}&IsActive=1&CreatedBy=${this.state.CreatedBy}&DOB=${this.state.DOB}&DOJ=${this.state.DOJ}&Age=${this.state.Age}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource2: responseJson,
            });
            console.log(responseJson);
            // console.log("Hello");
        })
        .catch((error) => {
            console.error(error);
        });
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        this.props.navigation.navigate('EditProfile');
        return true;
    }

    render() {

        const t = this;
        const st = this.state;

        // if (st.isLoading) {
        //     return (
        //         <View style={{ flex: 1, paddingTop: 20 }}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // }
        if (st.isPricingLevelLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
        const { navigate } = this.props.navigation;

        // const { navigate } = []; 

        return (

            <View>             
                <View>

                     <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                        <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}>  Add Stylists  </Text>
                        <TouchableOpacity onPress = {()=> navigate('Stylists')}
                        style={{marginTop: -40, height: 40, width: 40,}}>
                                    <Image
                                        source={require('../../Images/back-arrow_left-512.png')}                                                
                                        style={{ margin: 5, height: 30, width: 30, }} />  
                                </TouchableOpacity>
                     </View>

                    <ScrollView style={{ height: '90%', }}>
                        
                        <View>
                            <View style={styles.pad}>
                                <Image
                                    source={require('../../Images/hbhairs.png')}                                                
                                    style={styles.Image} />
                            </View>

                            {/* <KeyboardAvoidingView>
                                <View style={{ backgroundColor: '#eaf8fd', height: 30, }}>
                                    <Text style={styles.Name1}> Add Stylists </Text>
                                </View>
                            </KeyboardAvoidingView> */}

                            {/* <Text>{this.state.UserId},{this.state.SalonsId}</Text> */}

                            <KeyboardAvoidingView>
                                <View style={{ marginTop: 10 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>EmployeeName :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({EmployeeName:value})}>{st.EmployeeName}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Email :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({Email:value})}>{st.Email}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Picker style={{marginTop: -10, marginLeft: -3}}
                                            selectedValue={st.PricingLevel}
                                            onValueChange={(itemValue, itemIndex) => t.setState({ PricingLevel: itemValue })}>
                                            <Picker.Item label="Pricing Level" value="Pricing Level" />                                                        
                                            {
                                                st.pt.map((val, ind) => val)
                                            }
                                        </Picker>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Job Title :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({JobTitle:value})}>{st.JobTitle}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Phone Number :</Text>
                                        <TextInput style={styles.Text1} 
                                        underlineColorAndroid="transparent"
                                        keyboardType={'numeric'}
                                        onChangeText={(value)=> t.setState({Phone:value})}>{st.Phone}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Picker style={{marginTop: -10, marginLeft: -3}}
                                            selectedValue={st.Gender}
                                            onValueChange={(itemValue, itemIndex) => t.setState({ Gender: itemValue })}>
                                            <Picker.Item label="Gender" value={0} />
                                            <Picker.Item label="Male" value="1" />
                                            <Picker.Item label="Female" value="2" />
                                        </Picker>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Age :</Text>
                                        <TextInput style={styles.Text1}
                                         underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({Age:value})}
                                        >{st.Age}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>About :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({About:value})}>{st.About}</TextInput>
                                    </View>
                                </View>

                               
                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>

                                <View style={{ flex: 1, marginTop: 0, }}>
                                    <TouchableOpacity   onPress={() => t._Save()} style={styles.buttonproceed1}>
                                        <Text style={styles.buttonproceed}>Add Stylist</Text>
                                    </TouchableOpacity>
                                </View>
                </View>                      
            </View>
        );
    }
}
