import React, { Component } from 'react';
import { 
    AsyncStorage,
    BackHandler,  
    Image,    
    NetInfo,
    StatusBar,
    Text,
    View,
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from './style';

export default class Splash extends Component {
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            progressBarProgress: 0.0,
            user: 0,
        }
        //this._setStaticVariable().done();
        //this._removeStaticVariable().done();
        this._getStaticVariable().done();
    }
    static navigationOptions = {
        header:null
    }

    changeProgress = () => {
        this.setState({ progressBarProgress: parseFloat(Math.random().toFixed(1)) });
    }  

    async _setStaticVariable() {
        await AsyncStorage.setItem('@user:key', '416');
    }

    async _getStaticVariable() {
        const value = await AsyncStorage.getItem('@user:key');
        
        this.setState({
            user: value,
        });                
        if(value != null) {
            this.props.navigation.navigate('SignIn', { userId: value });
        } else {
            this.props.navigation.navigate('SignUp', {userId: 416});
        }
        
    }

    async _removeStaticVariable() {
        await AsyncStorage.removeItem('@user:key');
    }    

    componentDidMount() {
        const dispatchConnected = isConnected => this.props.dispatch(setIsConnected(isConnected));
      
        NetInfo.isConnected.fetch().then().done(() => {
          NetInfo.isConnected.addEventListener('connectionChange', dispatchConnected);
        });
    //   }

    // componentDidMount() {
        StatusBar.setHidden(true);
        this.changeProgress();
        this._setStaticVariable();
    }
    componentWillMount() {        
        // setTimeout(()=> {            
        //     this.props.navigation.navigate('Mobile', {userId: 431});
        // },2000)    
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }
    
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }   

    render () {
        return (
            <View style={styles.container}>                
                <Image 
                    source={require('../../icons/icons/final_logo0.png')} 
                    style={{width: 100, height: 100, }} />
                <Text style={styles.text}> HogarBarber</Text>
                <ProgressBar 
                    style={{ marginTop:100, }}
                    progress={this.state.progressBarProgress} 
                    width={200}
                    // animated = 'true'
                    borderWidth = {1}
                    borderColor = 'grey' 
                    color = 'orange'
                    //#2cc9fe
                />

                {/* <Text>
                    <TouchableOpacity 
                        onPress={()=>this.BackHandler.addEventListener()}>
                    </TouchableOpacity>
                </Text> */}                
                
            </View>
        );
    }    
} 

    

