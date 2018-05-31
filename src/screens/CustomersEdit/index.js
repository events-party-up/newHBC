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

export default class CustomersEdit extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            isLoading: true,            
            // isPricingLevelLoading: true,
            SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
            UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416, 
            CustomerId: this.props.navigation.state.params ? this.props.navigation.state.params.CustomerId : 225,
            // UpdatedBy: this.props.navigation.state.params ? this.props.navigation.state.params.UpdatedBy : 980,
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
            UpdatedBy: '8',
            // CustomerId: '',
            PhoneNumber: '',
            Iamge: '6467aa12-df10-43f6-b2f2-a7edaab1efb1.jpg',
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

    componentDidMount() {
        console.log(`http://hogarbarber.developerscode.in/api/Customers/GetCustomersId?CustomerId=${this.state.CustomerId}`)
        return fetch(`http://hogarbarber.developerscode.in/api/Customers/GetCustomersId?CustomerId=${this.state.CustomerId}`)
            .then((response) => response.json())
            .then((responseJson) => {                
                console.log(responseJson);
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                    FirstName: responseJson[0].FirstName,
                    LastName: responseJson[0].LastName,
                    ProfileName: responseJson[0].ProfileName,
                    PostalCode: responseJson[0].PostalCode,
                    MemberTypeId: responseJson[0].MemberTypeId,
                    Gender: responseJson[0].Gender,
                    UserId: responseJson[0].UserId,
                    // CustUserId: responseJson[0].UserId,
                    Note: responseJson[0].Note,
                    Newsletter: responseJson[0].Newsletter,
                    Email: responseJson[0].Email,
                    Password: responseJson[0].Password,
                    // UpdatedBy: responseJson[0].UpdatedBy,
                    CustomerId: responseJson[0].CustomerId,
                    PhoneNumber: responseJson[0].PhoneNumber,
                    Iamge: responseJson[0].Image,
                    ImagePath: responseJson[0].ImagePath,
                    Address: responseJson[0].Address,
                    Age: responseJson[0].Age,

                }, function () {
                    
                });
            })
            .catch((error) => {
                console.error(error);
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

    
    //api/Customers/UpdateCustomers?FirstName=" + $("#txtFirstName").val() + "&LastName=" + $("#txtLastName").val() + "&PhoneNumber=" + $('#txtPhoneNumber').val() + "&ProfileName=" + $('#txtProfileName').val() + "&PostalCode=" + $('#txtPostalcode').val() + "&MemberTypeId=" + $('#ddlMemberType').val() + "&Gender=" + $('#ddlGender').val() + "&Note=" + $('#txtNote').val() + "&Newsletter=" + "1" + "&Email=" + $('#txtEmail').val() + "&Password=" + $('#txtPassword').val() + "&UserId=" + $('#txtUserId').val() + "&Iamge=" + Image + "&ImagePath=" + ImagePath + "&UpdatedBy=" + UpdatedBy + "&CustomerId=" + $("#txtCustomerId").val() + "&Address=" + $("#txtAddress").val() + "",
    _Update() {    
        console.log(`http://hogarbarber.developerscode.in/api/Customers/UpdateCustomers?FirstName=${this.state.FirstName}&LastName=${this.state.LastName}&PhoneNumber=${this.state.PhoneNumber}&ProfileName=${this.state.ProfileName}&PostalCode=${this.state.PostalCode}&MemberTypeId=${this.state.MemberTypeId}&Gender=${this.state.Gender}&Note=${this.state.Note}&Newsletter=${this.state.Newsletter}&Email=${this.state.Email}&Password=${this.state.Password}&UserId=${this.state.UserId}&Iamge=${this.state.Iamge}&ImagePath=${this.state.ImagePath}&UpdatedBy=${this.state.UserId}&CustomerId=${this.state.CustomerId}&Address=${this.state.Address}&Age=${this.state.Age}
        `)    
        return fetch(`http://hogarbarber.developerscode.in/api/Customers/UpdateCustomers?FirstName=${this.state.FirstName}&LastName=${this.state.LastName}&PhoneNumber=${this.state.PhoneNumber}&ProfileName=${this.state.ProfileName}&PostalCode=${this.state.PostalCode}&MemberTypeId=${this.state.MemberTypeId}&Gender=${this.state.Gender}&Note=${this.state.Note}&Newsletter=${this.state.Newsletter}&Email=${this.state.Email}&Password=${this.state.Password}&UserId=${this.state.UserId}&Iamge=${this.state.Iamge}&ImagePath=${this.state.ImagePath}&UpdatedBy=${this.state.UserId}&CustomerId=${this.state.CustomerId}&Address=${this.state.Address}&Age=${this.state.Age}
        `, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
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

                {
                    st.dataSource.map(function (element, index, array) {
                        
                        return (
                            <View key={index}>

                              <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                                <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}> Edit Customer </Text>
                                <TouchableOpacity onPress = {()=> navigate('Customers')}
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
                                                source={element.ImagePath == "" || element.ImagePath == null ? require('../../Images/hbhairs.png') : { uri: element.ImagePath }}                                                
                                                style={styles.Image} />
                                        </View>

                                        {/* <Text>{ st.UserId },{ st.SalonsId } </Text> */}

                                        {/* <KeyboardAvoidingView>
                                            <View style={{ backgroundColor: '#eaf8fd', height: 30, }}>
                                                <Text style={styles.Name1}> Edit Customer </Text>
                                            </View>
                                        </KeyboardAvoidingView>                                         */}

                                        <KeyboardAvoidingView>
                                            <View style={{ marginTop: 5 }}>
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
                                                    <Picker style={{marginTop: -10, marginLeft: -3}}
                                                        selectedValue={st.Gender}
                                                        onValueChange={(itemValue, itemIndex) => t.setState({ Gender: itemValue })}>
                                                        <Picker.Item label="Gender" value={0} />
                                                        <Picker.Item label="Male" value={1} />
                                                        <Picker.Item label="Female" value={2} />
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

                                            <View style={{ marginTop: 5 }}>
                                                <View style={styles.topBackground}>
                                                    <Picker style={{marginTop: -10, marginLeft: -3}}
                                                        selectedValue={st.MemberTypeId}
                                                        onValueChange={(itemValue, itemIndex) => t.setState({ MemberTypeId: itemValue })}>
                                                        <Picker.Item label="Member Type" value={0} />
                                                        <Picker.Item label="Business class" value={1} />
                                                        <Picker.Item label="Normal Class" value={2} />
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


                                             <View style={{ flex: 1, marginTop: 0, }} >
                                                <TouchableOpacity onPress={() => t._Update()}
                                                 style={styles.buttonproceed1}>
                                                    <Text style={styles.buttonproceed} >Update Customer</Text>
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
