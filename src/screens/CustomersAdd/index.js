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

export default class CustomersAdd extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            isLoading: true,     
            SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
            UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416,        
            // isPricingLevelLoading: true,
            // SalonsId: '180',
            // UserId: '416',            
            FirstName: '',
            LastName: '',
            ProfileName: '',
            PostalCode: '',
            MemberTypeId: '',
            Gender: '',
            Note: '',
            Newsletter: '',            
            Email: '',
            Password: '',
            CreatedDate: '',
            CreatedBy: '416',
            UpdatedDate: '',            
            UserName: '',
            IsActive: '1',
            Message: '',
            ErrorMessage: '',
            PhoneNumber: '',
            Image: '6467aa12-df10-43f6-b2f2-a7edaab1efb1.jpg',
            ImagePath: 'http://appypetsadmin.developerscode.in/Files/SalonDisplayImages/36a7ad5c-280c-414e-9247-85438d056359.jpg',
            Address: '',
            Age: '',
            // pt: [],
        }
        // this._getPricingLevel();
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

    // _getPricingLevel() {
    //     return fetch('http://hogarbarber.developerscode.in/api/PricingType/GetData')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         this.setState({
    //             isPricingLevelLoading: false,
    //             dbPricingType: responseJson,
    //         }, function () {                    
    //             responseJson.map((value, index) => {
    //                 val = ""+value.PricingType;
    //                 this.state.pt.push(<Picker.Item key={value.PricingTypeId} label={value.PricingType} value={value.PricingTypeId} />);
    //             });                    
    //         })
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }
    
    //"api/Customers/InsertCustomers",
//    data: { "FirstName": $("#txtFirstName").val(), "LastName": $("#txtLastName").val(), "PhoneNumber": $('#txtPhoneNumber').val(), "ProfileName": $('#txtProfileName').val(), "PostalCode": $('#txtPostalcode').val(), "MemberTypeId": $('#ddlMemberType').val(), "Gender": $('#ddlGender').val(), "Note": $('#txtNote').val(), "Newsletter": "1", "Email": $('#txtEmail').val(), "Password": $('#txtPassword').val(), "Image": '', "ImagePath": '', "CreatedBy": CreatedBy, "Address": $("#txtAddress").val() },

    _Save() {  
        console.log(`http://hogarbarber.developerscode.in/api/Customers/InsertCustomers?FirstName=${this.state.FirstName}&LastName=${this.state.LastName}&PhoneNumber=${this.state.PhoneNumber}&ProfileName=${this.state.ProfileName}&PostalCode=${this.state.PostalCode}&MemberTypeId=${this.state.MemberTypeId}&Gender=${this.state.Gender}&Note=${this.state.Note}&Newsletter=${this.state.Newsletter}&Email=${this.state.Email}&Password=${this.state.Password}&Image=${this.state.Image}&ImagePath=${this.state.ImagePath}&CreatedBy=${this.state.CreatedBy}&Address=${this.state.Address}&Age=${this.state.Age}`)  
        
        // api/Customers/InsertCustomers?FirstName={FirstName}&LastName={LastName}&PhoneNumber={PhoneNumber}&ProfileName={ProfileName}&PostalCode={PostalCode}&MemberTypeId={MemberTypeId}&Gender={Gender}&Note={Note}&Newsletter={Newsletter}&Email={Email}&Password={Password}&Image={Image}&ImagePath={ImagePath}&CreatedBy={CreatedBy}&Address={Address}

        return fetch(`http://hogarbarber.developerscode.in/api/Customers/InsertCustomers?FirstName=${this.state.FirstName}&LastName=${this.state.LastName}&PhoneNumber=${this.state.PhoneNumber}&ProfileName=${this.state.ProfileName}&PostalCode=${this.state.PostalCode}&MemberTypeId=${this.state.MemberTypeId}&Gender=${this.state.Gender}&Note=${this.state.Note}&Newsletter=${this.state.Newsletter}&Email=${this.state.Email}&Password=${this.state.Password}&Image=${this.state.Image}&ImagePath=${this.state.ImagePath}&CreatedBy=${this.state.CreatedBy}&Address=${this.state.Address}&Age=${this.state.Age}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource2: responseJson,
            });console.log('Hello');
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

        // if (st.isLoading) {
        //     return (
        //         <View style={{ flex: 1, paddingTop: 20 }}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // }
        // if (st.isPricingLevelLoading) {
        //     return (
        //         <View style={{ flex: 1, paddingTop: 20 }}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // }
        const { navigate } = this.props.navigation;

        return (

            <View>             
                <View >
                    <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}>Add Customers </Text>
                    <TouchableOpacity onPress = {()=> navigate('Customers')}
                    style={{marginTop: -40, height: 40, width: 40,}}>
                                    <Image
                                        source={require('../../Images/back-arrow_left-512.png')}                                                
                                        style={{ margin: 5, height: 30, width: 30, }} />  
                                </TouchableOpacity>
                </View>
                    <ScrollView style={{flex: 0, height: '90%', }}>
                        
                        <View>
                            <View style={styles.pad}>
                                <Image
                                    source={require('../../Images/hbhairs.png')}                                                
                                    style={styles.Image} />                                
                            </View>

                            {/* <KeyboardAvoidingView>
                                <View style={{ backgroundColor: '#eaf8fd', height: 30, }}>
                                    <Text style={styles.Name1}> Add Customer </Text>
                                </View>
                            </KeyboardAvoidingView> */}

                            {/* <TouchableOpacity onPress = {()=> (this.props.navigation.navigate('CustomersEdit'))}>
                                <Text style={{ marginLeft: 100, marginTop: 10, borderColor: 'red', 
                                borderWidth: 2, width: 30, height: 20, }}>Edit</Text>  
                            </TouchableOpacity> */}

                            {/* <Text>{this.state.UserId},{this.state.SalonsId}</Text> */}
                            
                            <KeyboardAvoidingView>
                                <View style={{ marginTop: 10 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>First Name :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({FirstName:value})}>{st.FirstName}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Last Name :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({LastName:value})}>{st.LastName}</TextInput>
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
                                        <Picker style={{marginTop: -10, marginLeft: -4}}
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
                                        <Text style={styles.Text}>Profile Name :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({ProfileName:value})}>{st.ProfileName}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5, }}>
                                    <View style={styles.topBackground}>
                                        <Picker style={{marginTop: -10, marginLeft: -4,}}
                                            selectedValue={st.MemberTypeId}
                                            onValueChange={(itemValue, itemIndex) => t.setState({ MemberTypeId: itemValue })}>
                                            <Picker.Item label="Member Type" value={0} />
                                            <Picker.Item label="Business class" value="1" />
                                            <Picker.Item label="Normal Class" value="2" />
                                        </Picker>
                                    </View>
                                </View>                                

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Postal Code :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({PostalCode:value})}>{st.PostalCode}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Note :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({Note:value})}>{st.Note}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Phone Number :</Text>
                                        <TextInput style={styles.Text1} 
                                        underlineColorAndroid="transparent"
                                        keyboardType={'numeric'}
                                        onChangeText={(value)=> t.setState({PhoneNumber:value})}
                                        >{st.PhoneNumber}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Address :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({Address:value})}>{st.Address}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Password :</Text>
                                        <TextInput style={styles.Text1} 
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={true} 
                                        onChangeText={(value)=> t.setState({Password:value})}>{st.Password}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5, marginBottom: 20, }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Age :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({Age:value})}>{st.Age}</TextInput>
                                    </View>
                                </View>

                                
                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>   

                                 
                     
                </View>  

                        <View style={{ flex: 1,  marginTop: 0, }} >
                            <TouchableOpacity onPress={() => t._Save()}
                            style={styles.buttonproceed1}>
                                <Text style={styles.buttonproceed} >Add Customer</Text>
                            </TouchableOpacity>
                        </View>                         
            </View>
        );
    }
}
