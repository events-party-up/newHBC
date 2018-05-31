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
        alignItems: 'center',
        justifyContent: 'center', 
        fontSize: 20,
        color: 'white',
        marginLeft: 20, 
        marginTop: 10,
        // height: 70,
        // borderWidth: 2, borderColor: 'red',     
    },
    topBackground: {
        height: 50,
        backgroundColor: '#2cc9fe',  
        maxWidth: '100%',      
        justifyContent:'space-between',  
        alignContent: 'space-between',
        flexDirection: 'row', 
        // borderWidth: 2, borderColor: 'red',     
    },
    topBackground1: {
        flex: 1,
        marginTop: 20,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 5,         
        marginLeft: 10,     
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
        textAlign: 'center',
        fontSize: 12,
        marginTop: 10,
        marginLeft: 140,
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
        height: 88,       
        borderRadius: 10,        
        marginTop: -24,
    },
};

export default styles;