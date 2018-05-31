import React, { Component } from 'react';
import {
    Alert,
    AsyncStorage,
    ActivityIndicator,
    BackHandler,
    Dimensions,
    DatePickerAndroid,
    DatePickerIOS,
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
import DatePicker from 'react-native-datepicker';

import styles from './style';

const { width, height } = Dimensions.get('window');

export default class Billing extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            isLoading: true, 
            isDateLoading: true,   
            SalonsId: this.props.navigation.state.params ? this.props.navigation.state.params.salonid : 180,
            UserId: this.props.navigation.state.params ? this.props.navigation.state.params.userid : 416,    
            // SalonsId: '180',
            // UserId: '416',     
            BookingsId: '',   
            BookingDate: '',   
            FirstName: '', 
            TreatmentTitle: '',
            Price: '',
            IsActive: '1',
            PaymentStatus: '',
            FromDate: '2018-05-07',
            ToDate: '2018-05-25',
            BookingType: '0',
            Date: [],
        }       
        this._getDate(); 
    }

    state = {
        isDateTimePickerVisible: false,
      };
    
      _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
      _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

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

    // componentDidMount() {
    //     // return console.log(`http://hogarbarber.developerscode.in/api/Billings/ListofBookingsbasedonSalonsId?SalonsId=180`)
    //     return fetch(`http://hogarbarber.developerscode.in/api/Billings/ListofBookingsBySearch?SalonsId=${this.state.SalonsId}&FromDate=${this.state.FromDate}&ToDate=${this.state.ToDate}&IsActive=${this.state.IsActive}&BookingType=${this.state.BookingType}`) 
    //     // (`http://hogarbarber.developerscode.in/api/Billings/ListofBookingsBySearch?SalonsId=${this.state.SalonsId}&SalonsId=${this.state.SalonsId}&ToDate=${this.state.ToDate}&IsActive=${this.state.IsActive}&BookingType=${this.state.BookingType}`)
    //     // (`http://hogarbarber.developerscode.in/api/Billings/ListofBookingsBySearch?SalonsId=180&FromDate=2018-05-07&ToDate=2018-05-30&IsActive=1&BookingType=0`)
    //       .then((response) => response.json())
    //       .then((responseJson) => {            
    //         let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    //         this.setState({
    //             isLoading: false,
    //             dataSource: ds.cloneWithRows(responseJson),
    //         }, function() {
                
    //           });            
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });       
    // }

    _getDate() {     
        // this.setState({
        //     isLoading: true
        // });
         console.log(`http://hogarbarber.developerscode.in/api/Billings/ListofBookingsBySearch?SalonsId=${this.state.SalonsId}&FromDate=${this.state.FromDate}&ToDate=${this.state.ToDate}&IsActive=${this.state.IsActive}&BookingType=${this.state.BookingType}`)   ;
        return fetch(`http://hogarbarber.developerscode.in/api/Billings/ListofBookingsBySearch?SalonsId=${this.state.SalonsId}&FromDate=${this.state.FromDate}&ToDate=${this.state.ToDate}&IsActive=${this.state.IsActive}&BookingType=${this.state.BookingType}`)
          .then((response) => response.json())
          .then((responseJson) => {            
            let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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
        // if (this.state.isDateLoading) {
        //     return (
        //         <View style={{ flex: 1, paddingTop: 20 }}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // }     

        return (          
            <View>

                <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}>Billing Details</Text>
                </View>

                <ScrollView style={{ height: '90%', }}>                                    
                    <View>                                     
                        {/* <KeyboardAvoidingView>
                            <View style={{ backgroundColor: '#eaf8fd', height: 30, }}>
                                <Text style={styles.Name1}> Billing </Text>
                            </View>
                        </KeyboardAvoidingView> */}

                        {/* <Text>{ this.state.UserId },{ this.state.SalonsId }</Text> */}

                        <View style={{ marginTop: 15 }}>
                            <View style={styles.topBackground}>
                                <Picker style={{marginTop: -10,}}
                                //     selectedValue={st.MemberTypeId}
                                // onValueChange={(itemValue, itemIndex) => t.setState({ MemberTypeId: itemValue })}
                                    >
                                    <Picker.Item label="Appointment Bookings" value={0} />               
                                </Picker>
                            </View>
                        </View>                         

                        <View style={{ marginTop: 15 }}>
                            <View style={styles.topBackground}>
                                <Picker style={{marginTop: -10,}}
                                    selectedValue={st.IsActive}
                                    onValueChange={(itemValue, itemIndex) => t.setState({ IsActive: itemValue })}>
                                    <Picker.Item label="All Types" value={0} />
                                    <Picker.Item label="Confimed" value="1" />
                                    <Picker.Item label="Cancelled" value="2" />
                                    <Picker.Item label="Completed" value="4" />
                                </Picker>
                            </View>
                        </View>                           

                        <Text style={{color: '#000', textAlign: 'center', fontWeight: 'bold', marginTop: 10,}}>Select From Date </Text>
                        <View style={styles.topBackground1}>   
                            <DatePicker
                                style={{width: '100%'}}
                                date={this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2016-04-01"
                                maxDate="2050-04-01"
                                // dateTimeFormat='2018-04-28 10:30'
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 10,
                                    marginTop: 3,
                                    width: 25,
                                    height: 25,
                                },
                                dateInput: {
                                    marginLeft: 0
                                }
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {this.setState({FromDate: date})}}
                            />                                    
                        </View>

                        <Text style={{color: '#000', textAlign: 'center', fontWeight: 'bold', marginTop: 5,}}>Select To Date </Text>
                        <View style={styles.topBackground1}>   
                            <DatePicker
                                style={{width: '100%' }}
                                date= {this.state.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2016-04-01"
                                maxDate="2050-04-01"
                                dateTimeFormat='2018-04-28 10:30'
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 10,
                                    marginTop: 3,
                                    width: 25,
                                    height: 25,
                                },
                                dateInput: {
                                    marginLeft: 0
                                }
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {this.setState({ToDate: date})}}
                            />                                    
                        </View>

                        <View style={{ flex: 0, width: '100%',  marginTop: 25, }}>
                            <TouchableOpacity style={styles.buttonproceed1} onPress = {()=>t._getDate()} >
                                <Text style={styles.buttonproceed}> Search </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, marginTop: 10, }}>       
                            <ListView style={{marginTop: 10, }}
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => 
                                    <View style={{ height: 155, width : '95%', marginRight: 10, marginLeft: 10,
                                                     borderColor: 'grey', borderWidth: 2, alignSelf: 'center', marginTop: 10,  }}>
                                        <TouchableOpacity style= {{ height: 160, width: 300, margin: 10, }}
                                                    // borderColor: 'red', borderWidth: 2, }}
                                                    onPress = {()=>this.props.navigation.navigate('BookingDetails', 
                                                    // {userid: this.state.UserId}
                                                    )}>                  
                                            <Text style={styles.BookingsId}>Booking Id : {rowData.BookingsId}</Text>
                                            <Text style={styles.BusinessName}>Booking Date & Time : {rowData.BookingDate}</Text>
                                            <Text style={styles.BusinessName}>FirstName :{rowData.FirstName}</Text>
                                            <Text style={styles.BusinessName}>TreatmentTitle : {rowData.TreatmentTitle}</Text>
                                            <Text style={styles.BusinessName}>Price : {rowData.Price}</Text>
                                            <Text style={styles.BusinessName}>IsActive : {rowData.IsActive}</Text>
                                            <Text style={styles.BusinessName}>Payment Status : {rowData.PaymentStatus}</Text>
                                            <Text style={styles.BusinessName}>Action : {rowData.Action}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            />  
                        </View>    
                     </View>
                </ScrollView>
            </View>                        
        );
    }
}
