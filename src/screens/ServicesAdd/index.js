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

export default class ServicesAdd extends Component {

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
            // SalonsId: '180',
            // UserId: '416',
            CleanUpTimeId: '',
            DurationId: '',
            TreatmentTitleId: '',
            PricingTypeId: '',
            CategoryId: '1',
            TreatmentTypeId: '',
            Price: '',
            Description: '',
            CreatedBy: '416',
            IsAcitve: '1',
            featuredServices: '0',
            SalonServicesId: '',
            ImagePath: 'http://appypetsadmin.developerscode.in/Files/SalonDisplayImages/36a7ad5c-280c-414e-9247-85438d056359.jpg',
            CleanUpTime: '',
            Sale: '',            
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
    
    _getCleanUpTime() {
        return fetch('http://hogarbarber.developerscode.in/api/CleanUpTime/GetData')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isCleanUpTimeLoading: false,
                    dbCleanuptime: responseJson,
                }, function () {
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
                }, function () {
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
                }, function () {
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
                }, function () {                    
                    responseJson.map((value, index) => {
                        val = ""+value.PricingType;
                        this.state.pt.push(<Picker.Item key={value.PricingTypeId} label={value.PricingType} value={value.PricingTypeId} />);

                    });
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _Save() {
        console.log(`http://hogarbarber.developerscode.in/api/SalonServices/Insert?SalonsId=${this.state.SalonsId}&CategoryId=${this.state.CategoryId}&TreatmentTypeId=${this.state.TreatmentTypeId}&TreatmentTitleId=${this.state.TreatmentTitleId}&PricingTypeId=${this.state.PricingTypeId}&DurationId=${this.state.DurationId}&Price=${this.state.Price}&Sale=${this.state.Sale}&CleanUpTime=${this.state.CleanUpTime}&Description=${this.state.Description}&IsAcitve=${this.state.IsAcitve}&CreatedBy=${this.state.CreatedBy}&featuredServices=${this.state.featuredServices}&ImagePath=${this.state.ImagePath}`)
        return fetch(`http://hogarbarber.developerscode.in/api/SalonServices/Insert?SalonsId=${this.state.SalonsId}&CategoryId=${this.state.CategoryId}&TreatmentTypeId=${this.state.TreatmentTypeId}&TreatmentTitleId=${this.state.TreatmentTitleId}&PricingTypeId=${this.state.PricingTypeId}&DurationId=${this.state.DurationId}&Price=${this.state.Price}&Sale=${this.state.Sale}&CleanUpTime=${this.state.CleanUpTime}&Description=${this.state.Description}&IsAcitve=${this.state.IsAcitve}&CreatedBy=${this.state.CreatedBy}&featuredServices=${this.state.featuredServices}&ImagePath=${this.state.ImagePath}`, {
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
                })
                // console.log(`http://hogarbarber.developerscode.in/api/SalonServices/Insert?SalonsId=${this.state.SalonsId}&CategoryId=${this.state.CategoryId}&TreatmentTypeId=${this.state.TreatmentTypeId}&TreatmentTitleId=${this.state.TreatmentTitleId}&PricingTypeId=${this.state.PricingTypeId}&DurationId=${this.state.DurationId}&Price=${this.state.Price}&Sale=${this.state.Sale}&CleanUpTime=${this.state.CleanUpTimeId}&Description=${this.state.Description}&IsAcitve=${this.state.IsAcitve}&CreatedBy=${this.state.CreatedBy}&featuredServices=${this.state.featuredServices}&ImagePath=${this.state.ImagePath}`)
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

        return (

            <View>
                <View >

                   <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                        <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}> Add Services  </Text>
                            <TouchableOpacity onPress = {()=> navigate('Services')} 
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
                                    <Text style={styles.Name1}> Add Services </Text>
                                </View>
                            </KeyboardAvoidingView> */}

                            {/* <Text>{this.state.UserId},{this.state.SalonsId}</Text>  */}

                            <KeyboardAvoidingView>
                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.Text}>Service Name :</Text>
                                        <TextInput style={styles.Text1} underlineColorAndroid="transparent"
                                        onChangeText={(value)=> t.setState({TreatmentTypeId:value})}>{st.TreatmentTypeId}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Picker style={{marginTop: -10, marginLeft: -3}}
                                            selectedValue={st.TreatmentTitleId}
                                            onValueChange={(itemValue, itemIndex) => t.setState({ TreatmentTitleId: itemValue })}>
                                            <Picker.Item label="Service Type" value="Service Type" />
                                            {
                                                st.ss.map((val, ind) => val)
                                            }
                                        </Picker>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Picker style={{marginTop: -10, marginLeft: -3}}
                                            selectedValue={st.PricingTypeId}
                                            onValueChange={(itemValue, itemIndex) => t.setState({ PricingTypeId: itemValue })}>
                                            <Picker.Item label="Pricing Type" value="Pricing Type" />
                                            {
                                                st.pt.map((val, ind) => val)
                                            }
                                        </Picker>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Picker style={{marginTop: -10, marginLeft: -3}}
                                            selectedValue={st.DurationId}
                                            onValueChange={(itemValue, itemIndex) => t.setState({ DurationId: itemValue })}>
                                            <Picker.Item label="Duration" value="Duration" />
                                            {
                                                st.dr.map((val, ind) => val)
                                            }
                                        </Picker>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.PriceText}> Price :</Text>
                                        <TextInput
                                            style={styles.Text2}
                                            underlineColorAndroid="transparent"
                                            onChangeText={(value) => t.setState({ Price: value })}
                                        >
                                            {st.Price}</TextInput>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={styles.topBackground}>
                                        <Picker style={{marginTop: -10, marginLeft: -3}}
                                            selectedValue={st.CleanUpTime}
                                            onValueChange={(itemValue, itemIndex) => t.setState({ CleanUpTime: itemValue })}>
                                            <Picker.Item label="Cleanup Time" value="Cleanup Time" />
                                            {
                                                st.cut.map((val, ind) => val)
                                            }
                                        </Picker>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5, marginBottom: 20, }}>
                                    <View style={styles.topBackground}>
                                        <Text style={styles.DescriptionText}> Description :</Text>
                                        <TextInput
                                            style={styles.Text2}
                                            underlineColorAndroid="transparent"
                                            onChangeText={(value) => t.setState({ Description: value })}
                                        >
                                            {st.Description}</TextInput>
                                    </View>
                                </View>

                                
                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>
                    <View style={{ flex: 1, marginTop: 0, }} >
                                    <TouchableOpacity 
                                     onPress={() => t._Save()} style={styles.buttonproceed1}>                                                   
                                        <Text style={styles.buttonproceed} >Add Service</Text>
                                    </TouchableOpacity>
                                </View>
                </View>                        
            </View>
        );
    }
}
