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

export default class StylistsEdit extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            isLoading: true,            
            isPricingLevelLoading: true,
            SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
            UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416, 
            // UserId: '416',
            SalonEmployeesId: this.props.navigation.state.params ? this.props.navigation.state.params.SalonEmployeesId : 130,
            EmployeeName: '',
            PricingLevel: '',
            JobTitle: '',
            Phone: '',
            Gender: '',
            Email: '',
            StartDate: '28-05-2018',
            StartTime: '10:00',
            EndDate: '28-05-2022',
            EndTime: '22:00',
            About: '',
            // SalonsId: '180',
            Image: '6467aa12-df10-43f6-b2f2-a7edaab1efb1.jpg',
            ImagePath: 'http://appypetsadmin.developerscode.in/Files/SalonDisplayImages/36a7ad5c-280c-414e-9247-85438d056359.jpg',
            UpdatedBy: '416',            
            DOB: '20-03-1988',
            DOJ: '28-05-2018',
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
            UpdatedBy: value,
        });                
    }

    componentDidMount() {
        console.log(`http://hogarbarber.developerscode.in/api/SalonEmployees/GetDatabyId?SalonEmployeesId=${this.state.SalonEmployeesId}`)
        return fetch(`http://hogarbarber.developerscode.in/api/SalonEmployees/GetDatabyId?SalonEmployeesId=${this.state.SalonEmployeesId}`)
            .then((response) => response.json())
            .then((responseJson) => {                
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                    StylUserId: responseJson[0].UserId,
                    EmployeeName: responseJson[0].EmployeeName,
                    PricingLevel: responseJson[0].PricingLevel,
                    JobTitle: responseJson[0].JobTitle,
                    Phone: responseJson[0].Phone,
                    Gender: responseJson[0].Gender,
                    Email: responseJson[0].Email,
                    StartDate: responseJson[0].StartDate,
                    StartTime: responseJson[0].StartTime,
                    EndDate: responseJson[0].EndDate,
                    EndTime: responseJson[0].EndTime,
                    About: responseJson[0].About,
                    SalonsId: responseJson[0].SalonsId,
                    Image: responseJson[0].Image,
                    ImagePath: responseJson[0].ImagePath,
                    // UpdatedBy: responseJson[0].UpdatedBy,
                    SalonEmployeesId: responseJson[0].SalonEmployeesId,
                    DOB: responseJson[0].DOB,
                    DOJ: responseJson[0].DOJ,
                    Age: responseJson[0].Age,
                }, function () {
                    
                });
            })
            .catch((error) => {
                console.error(error);
            });
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
                        this.state.pt.push(<Picker.Item key={value.PricingTypeId} label={value.PricingType} value={value.PricingTypeId} />);
                    });                    
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    _Update() {  
        console.log(`http://hogarbarber.developerscode.in/api/SalonEmployees/Update?EmployeeName=${this.state.EmployeeName}&PricingLevel=${this.state.PricingLevel}&JobTitle=${this.state.JobTitle}&Phone=${this.state.Phone}&Gender=${this.state.Gender}&Email=${this.state.Email}&StartDate=${this.state.StartDate}&StartTime=${this.state.StartTime}&EndDate=${this.state.EndDate}&EndTime=${this.state.EndTime}&About=${this.state.About}&SalonsId=${this.state.SalonsId}&Image=${this.state.Image}&ImagePath=${this.state.ImagePath}&UpdatedBy=${this.state.UpdatedBy}&SalonEmployeesId=${this.state.SalonEmployeesId}&DOB=${this.state.DOB}&DOJ=${this.state.DOJ}&Age=${this.state.Age}`)      
        return fetch(`http://hogarbarber.developerscode.in/api/SalonEmployees/Update?EmployeeName=${this.state.EmployeeName}&PricingLevel=${this.state.PricingLevel}&JobTitle=${this.state.JobTitle}&Phone=${this.state.Phone}&Gender=${this.state.Gender}&Email=${this.state.Email}&StartDate=${this.state.StartDate}&StartTime=${this.state.StartTime}&EndDate=${this.state.EndDate}&EndTime=${this.state.EndTime}&About=${this.state.About}&SalonsId=${this.state.SalonsId}&Image=${this.state.Image}&ImagePath=${this.state.ImagePath}&UpdatedBy=${this.state.UpdatedBy}&SalonEmployeesId=${this.state.SalonEmployeesId}&DOB=${this.state.DOB}&DOJ=${this.state.DOJ}&Age=${this.state.Age}`,
        // {
        //     method: 'Get',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
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
        if (st.isPricingLevelLoading) {
            return (
                <View style={{justifyContent: 'center',  alignContent: 'center', flex: 1,}}>
                   
                    <ActivityIndicator size="large" color="orange" />
                </View>
            );
        }
        const { navigate } = this.props.navigation;

        return (

            <View>
                {
                    st.dataSource.map(function (element, index, array) {
                        
                        return (
                            <View key={index}>

                     <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                        <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}>Edit Stylists </Text>
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
                                                // source={element.ImagePath == "" || element.ImagePath == null ? require('../../Images/4.jpeg') : { uri: element.ImagePath }}                                                
                                                style={styles.Image} />
                                        </View>

                                        {/* <KeyboardAvoidingView>
                                            <View style={{ backgroundColor: '#eaf8fd', height: 30, }}>
                                                <Text style={styles.Name1}> Edit Stylists </Text>
                                            </View>
                                        </KeyboardAvoidingView> */}

                                        {/* <Text>{st.UserId},{st.SalonsId}</Text> */}

                                        <KeyboardAvoidingView>
                                            <View style={{ marginTop: 10 }}>
                                                <View style={styles.topBackground}>
                                                    <Text style={styles.Text}>Stylist Name :</Text>
                                                    <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                                    onChangeText={(value)=> t.setState({EmployeeName:value})}
                                                    >{st.EmployeeName}</TextInput>
                                                </View>
                                            </View>

                                            <View style={{ marginTop: 5 }}>
                                                <View style={styles.topBackground}>
                                                    <Text style={styles.Text}>Email :</Text>
                                                    <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                                    onChangeText={(value)=> t.setState({Email:value})}
                                                    >{st.Email}</TextInput>
                                                </View>
                                            </View>

                                            <View style={{ marginTop: 5 }}>
                                                <View style={styles.topBackground}>
                                                    <Picker style={{marginTop: -10, marginLeft: -3}}
                                                        selectedValue={st.PricingLevel}
                                                        onValueChange={(itemValue, itemIndex) => t.setState({ PricingLevel: itemValue })}>
                                                        <Picker.Item label="Pricing Level" value="Pricing Level" />
                                                        <Picker.Item label="Simple" value="1" />
                                                        <Picker.Item label="Staff Based" value="2" />  
                                                        <Picker.Item label="Titanium" value="3" />
                                                        <Picker.Item label="Test" value="4" />                                                        
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
                                                    onChangeText={(value)=> t.setState({JobTitle:value})}
                                                    >{st.JobTitle}</TextInput>
                                                </View>
                                            </View>

                                            <View style={{ marginTop: 5 }}>
                                                <View style={styles.topBackground}>
                                                    <Text style={styles.Text}>Phone Number :</Text>
                                                    <TextInput style={styles.Text1} 
                                                    underlineColorAndroid="transparent"
                                                    keyboardType={'numeric'}
                                                    onChangeText={(value)=> t.setState({Phone:value})}
                                                    >{st.Phone}</TextInput>
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
                                                    <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                                    onChangeText={(value)=> t.setState({Age:value})}
                                                    >{st.Age}</TextInput>
                                                </View>
                                            </View>

                                            <View style={{ marginTop: 5 }}>
                                                <View style={styles.topBackground}>
                                                    <Text style={styles.Text}>About :</Text>
                                                    <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                                    onChangeText={(value)=> t.setState({About:value})}
                                                    >{st.About}</TextInput>
                                                </View>
                                            </View>

                                          
                                        </KeyboardAvoidingView>
                                    </View>
                                </ScrollView>

                                            <View style={{ flex: 1, marginTop: 0, }} >
                                                <TouchableOpacity onPress={() => t._Update()} 
                                                style={styles.buttonproceed1}> 
                                                <Text style={styles.buttonproceed}>Update Stylist</Text>
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
