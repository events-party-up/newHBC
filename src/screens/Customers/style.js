import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = {
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',      
        // borderWidth: 2, borderColor: 'red', 
    },
    headertext: {    
        flex: 1,         
        textAlign: 'center',        
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center', 
        fontSize: 20,
        color: 'white', 
        height: 70, 
        //borderWidth: 2, borderColor: 'red',     
    },
    topBackground: {
        flex: 0.5,
        backgroundColor: '#2cc9fe',  
        maxWidth: '100%',     
        //borderWidth: 2, borderColor: 'red',     
    },
    topBackground1: {
        flex: 1,
        marginTop: 5,
        height: 85,
        backgroundColor: 'white',
        borderRadius: 5,         
        marginLeft: 10,    
        // flexDirection: 'row', 
    },
    Text: {
        color: '#E7711B',
        marginLeft: 150,
        fontSize: 20,
        marginBottom: 10,
    },
    button: {    
        padding: 0,
        marginTop: -30,
        marginLeft: 300,
    },
    BusinessName: {
        flex: 1,
        color: '#000',
        alignSelf: 'flex-start',
        // textAlign: 'center',
        fontSize: 12,
        marginTop: 10,
        marginLeft: 150,
    },
    
    Text2: {
        color: '#33aefe',
        marginLeft: 270,
       fontSize: 20,
       marginTop: 10,
    },
    Image1: {
        maxWidth: '30%',
        width: 130,
        height: 80,       
        borderRadius: 10,        
        marginTop: -20,
    },
};

export default styles;