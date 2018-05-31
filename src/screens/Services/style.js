import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = {   
    Maincategory: {
        flex: 1,
        flexDirection: 'row',        
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        // borderColor: 'red', borderWidth: 2,         
    },
    category: {
        padding: 10,     
    },
    hairecare: {
        flex: 1,  
        flexDirection: 'row', 
        width: 150,      
        height: 100,  
        backgroundColor: '#fff',
        borderColor: '#d1d5dc',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 30,    
        // borderColor: 'red',    
    },
    hairecareImage1: {    
        flex: 1,    
        marginTop: 10,
        resizeMode: 'contain',
        marginLeft: 10,
        width: 130,
        height: 50,
        alignSelf: 'center', 
        // borderColor: 'red', borderWidth: 2,         
    },
    haircareText: {
        flex: 1,
        marginTop: 7,
        marginLeft: 28,
        height: 30,
        width: 90,
        color: '#000',
        flexDirection: 'row',        
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        // borderColor: 'red', borderWidth: 2,        
    },
    headertext: {
        flex: 0,
        textAlign: 'center',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center', 
        fontSize: 20,
        color: 'white',        
    },
    topBackground: {
        flex: 1,
        maxWidth: '100%', //width,
        height: 200,
        backgroundColor: '#2cc9fe',
    },
    textbackground: {
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 340,
        height: 40,
        marginTop: 60,
        marginLeft: 10,      
    },  
    label:{
        marginLeft: 35,
        color: 'lightgrey',
        marginTop: 10,
    },
    inputBox: {
        width: 280,
        marginTop: -20,       
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 10,
        fontSize: 17,
        color: '#000',
        marginVertical: 5,
        marginLeft: 30,        
    },    
    MainContainer :{ 
        justifyContent: 'center',
        flex: 1,
        margin: 15,
        marginTop: -50, 
        }, 
    rowViewContainer: {
         fontSize: 17,
         padding: 10,
        }, 
    TextInputStyleClass:{        
         textAlign: 'center',
         height: 40,
         borderWidth: 1,
         borderColor: '#009688',
         borderRadius: 7 ,
         backgroundColor : "#FFFFFF"        
         },

};

export default styles;