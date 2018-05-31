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
            isCompleteOrderLoading: true,
            isNoShowOrderLoading: true, 
            isCancelOrderLoading: true, 
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
            PaymentStatus: 'pending',
            FromDate: '2018-02-01',
            ToDate: '2018-05-31',
            BookingType: '0',
            Duration: '',            
            IsActive: '1',
            UpdatedBy: '416',
            PaymentsId: '',
            SalonCheckoutId: '2922',
            Status: '3',           
            Date: [],
        }       
        this._getDate();
        // this._getCompleteOrder(); 
        // this._getNOShowOrder();
        // this._getCancelOrder();
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

    _getDate() {          
        console.log(`http://hogarbarber.developerscode.in/api/AdminBilling/AdminListofBookingsBySearch?FromDate=${this.state.FromDate}&ToDate=${this.state.ToDate}&IsActive=${this.state.IsActive}&BookingType=${this.state.BookingType}`);
        return fetch(`http://hogarbarber.developerscode.in/api/AdminBilling/AdminListofBookingsBySearch?FromDate=${this.state.FromDate}&ToDate=${this.state.ToDate}&IsActive=${this.state.IsActive}&BookingType=${this.state.BookingType}`)
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

    _getCompleteOrder()  {
        console.log(`http://hogarbarber.developerscode.in/api/Payment/Complete?PaymentStatus=${this.state.PaymentStatus}&IsActive=${this.state.IsActive}&UpdatedBy=${this.state.UserId}&PaymentsId=${this.state.PaymentsId}&SalonCheckoutId=${this.state.SalonCheckoutId}`) 
        return fetch(`http://hogarbarber.developerscode.in/api/Payment/Complete?PaymentStatus=${this.state.PaymentStatus}&IsActive=${this.state.IsActive}&UpdatedBy=${this.state.UserId}&PaymentsId=${this.state.PaymentsId}&SalonCheckoutId=${this.state.SalonCheckoutId}`)   
        
        // "PaymentStatus": PaymentStatus, "IsActive": Status, "UpdatedBy": UserId, "PaymentsId": PaymentsId,
        //         "SalonCheckoutId": SalonCheckoutId

          .then((response) => response.json())
          .then((responseJson) => {            
            let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.setState({
                // isCompleteOrderLoading: false,
                // dbCompleteOrder: ds.cloneWithRows(responseJson),
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJson),
            }, function() {
                
              });            
          })
          .catch((error) => {
            console.error(error);
          }); 
    }

    _getNOShowOrder()  {
        console.log(`http://hogarbarber.developerscode.in/api/SalonCheckout/UpdateStatus?Status=3&UpdatedBy=${this.state.Status}&SalonCheckoutId=${this.state.SalonCheckoutId}`) 
        return fetch(`http://hogarbarber.developerscode.in/api/SalonCheckout/UpdateStatus?Status=3&UpdatedBy=${this.state.Status}&SalonCheckoutId=${this.state.SalonCheckoutId}`) 

        // "Status": 3, "UpdatedBy": UserId,
        //         "SalonCheckoutId": SalonCheckoutId   

          .then((response) => response.json())
          .then((responseJson) => {            
            let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.setState({
                // isNoShowOrderLoading: false,
                // dbNoShowOrder: ds.cloneWithRows(responseJson),
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJson),
            }, function() {
                
              });            
          })
          .catch((error) => {
            console.error(error);
          }); 
    }

    _getCancelOrder()  {
        console.log(`http://hogarbarber.developerscode.in/api/SalonCheckout/UpdateStatus?Status=2&UpdatedBy=${this.state.Status}&SalonCheckoutId=${this.state.SalonCheckoutId}`) 
        return fetch(`http://hogarbarber.developerscode.in/api/SalonCheckout/UpdateStatus?Status=2&UpdatedBy=${this.state.Status}&SalonCheckoutId=${this.state.SalonCheckoutId}`) 

        //         "Status": 2, "UpdatedBy": UserId,
        //            "SalonCheckoutId": SalonCheckoutId      

          .then((response) => response.json())
          .then((responseJson) => {            
            let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.setState({
                // isCancelOrderLoading: false,
                // dbCancelOrder: ds.cloneWithRows(responseJson),
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
        // if (st.isCompleteOrderLoading) {
        //     return (
        //         <View style={{ flex: 1, paddingTop: 20 }}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // } 
        // if (st.isNoShowOrderLoading) {
        //     return (
        //         <View style={{ flex: 1, paddingTop: 20 }}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // } 
        // if (st.isCancelOrderLoading) {
        //     return (
        //         <View style={{ flex: 1, paddingTop: 20 }}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // }          

        return (          
            <View>

                <View style={{backgroundColor: '#2cc9fe', height: 50,}}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 'bold', margin: 12,}}>User Booking Details</Text>
                </View>

                <ScrollView style={{flex: 0, height: '90%', }}>                                    
                    <View>                                     
                        {/* <KeyboardAvoidingView>
                            <View style={{ backgroundColor: '#eaf8fd', height: 30, }}>
                                <Text style={styles.Name1}> User Booking Details </Text>
                            </View>                         
                        </KeyboardAvoidingView>      */}

                        {/* <Text>{ this.state.UserId },{ this.state.SalonsId }</Text>                    */}

                        <View style={{ flex: 1, marginTop: 3,}}>       
                            <ListView style={{marginTop: 0,}}
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => 
                                    <View style={{ height: 210, backgroundColor: "#E3F2FD", width: '95%', margin: 3, marginRight: 10, marginLeft: 10,
                                                     borderColor: 'grey', borderWidth: 1,  }}>
                                        <TouchableOpacity style= {{ height: 190, width: 300, margin: 0,}}>
                                                    {/* borderColor: 'red', borderWidth: 2, }}> */}
                                            <Text style={styles.BusinessName}>Customer Name : {rowData.FirstName}</Text>                
                                            <Text style={styles.BusinessName}>Booking Id : {rowData.BookingsId}</Text>
                                            <Text style={styles.BusinessName}>Appointment Date : {rowData.BookingDate}</Text>
                                            <Text style={styles.BusinessName}>Appointment Time : {rowData.BookingTime}</Text>
                                            <Text style={styles.BusinessName}>Service: {rowData.TreatmentTitle}</Text>
                                            <Text style={styles.BusinessName}>Service Duration : {rowData.Duration}</Text>
                                            <Text style={styles.BusinessName}>Payment Status : {rowData.PaymentStatus}</Text>
                                            <Text style={styles.BusinessName}>Amount to be paid : {rowData.Price}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            />  
                        </View> 

                        <View style={{ flex: 1,  marginTop: 20, }}>
                            <TouchableOpacity style={styles.buttonproceed1} onPress = {()=>t._getCancelOrder()}>
                                <Text style={styles.buttonproceed0}
                                > Cancel Order </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, marginTop: 30, }}>
                            <TouchableOpacity style={styles.buttonproceed2}  onPress = {()=>t._getNOShowOrder()}>
                                <Text style={styles.buttonproceed}
                               > NO Show Order </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1,  marginTop: 30, }}>
                            <TouchableOpacity style={styles.buttonproceed1} onPress = {()=>t._getCompleteOrder()}>
                                <Text style={styles.buttonproceed0}
                                > Complete Order </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>          
            </View>                        
        );
    }
}
