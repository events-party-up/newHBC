import React from 'react';
import { View, Text, Platform, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14

import Index from './index';

import Splash from '../screens/Splash';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import SalonDetails from '../screens/SalonDetails';
// import EditProfile from '../screens/EditProfile';
// import List from '../screens/List';
import Customers from '../screens/Customers';
import CustomersAdd from '../screens/CustomersAdd';
import CustomersEdit from '../screens/CustomersEdit';
import Services from '../screens/Services';
import ServicesAdd from '../screens/ServicesAdd';
import ServicesEdit from '../screens/ServicesEdit';
import Stylists from '../screens/Stylists';
import StylistsEdit from '../screens/StylistsEdit';
import StylistsAdd from '../screens/StylistsAdd';
import Billing from '../screens/Billing';
import BookingDetails from '../screens/BookingDetails';

const SplashView = ({navigation}) => (
  <Splash navigation={navigation} />
);

const SignUpView = ({navigation}) => (
  <SignUp navigation={navigation} />
);

const SignInView = ({navigation}) => (
  <SignIn navigation={navigation} />
);

const SalonDetailsView = ({navigation}) => (
  <SalonDetails navigation={navigation} />
);

// const EditProfileView = ({navigation}) => (
//   <EditProfile navigation={navigation} />
// );

// const ListView = ({navigation}) => (
//   <List navigation={navigation} />
// );

const CustomersView = ({navigation}) => (
  <Customers navigation={navigation} />
);

const CustomersAddView = ({navigation}) => (
  <CustomersAdd navigation={navigation} />
);

const CustomersEditView = ({navigation}) => (
  <CustomersEdit navigation={navigation} />
);

const ServicesView = ({navigation}) => (
  <Services navigation={navigation} />
);

const ServicesAddView = ({navigation}) => (
  <ServicesAdd navigation={navigation} />
);

const ServicesEditView = ({navigation}) => (
  <ServicesEdit navigation={navigation} />
);

const StylistsView = ({navigation}) => (
  <Stylists navigation={navigation} />
);

const StylistsAddView = ({navigation}) => (
  <StylistsAdd navigation={navigation} />
); 

const StylistsEditView = ({navigation}) => (
  <StylistsEdit navigation={navigation} />
);Billing

const BillingView = ({navigation}) => (
  <Billing navigation={navigation} />
);

const BookingDetailsView = ({navigation}) => (
  <BookingDetails navigation={navigation} />
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const getTypedIcon = name => {
  return Platform.OS === 'ios' ? (focused ? `ios-${name}` : `ios-${name}-outline`) : `md-${name}`;   
};

const RootDrawer = DrawerNavigator({  
            
Splash: {
  screen: Splash,
  navigationOptions: {
    drawerLabel: 'Splash',
    drawerIcon: ({ tintColor, focused }) => (      
      <Image 
      source={require('../Images/splash.png')}
      style={{width:20, height:20}}
    />
    ),
  },
}, 
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      drawerLabel: 'SignUp',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/signup.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  }, 
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      drawerLabel: 'SignIn',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/Signin.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
  SalonDetails: {
    screen: SalonDetails,
    navigationOptions: {
      drawerLabel: 'SalonDetails',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/personal.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
  // EditProfile: {
  //   screen: EditProfile,
  //   navigationOptions: {
  //     drawerLabel: 'EditProfile',
  //     drawerIcon: ({ tintColor, focused }) => (
  //       // <Ionicons
  //       //   name={getTypedIcon("home")}
  //       //   size={26}
  //       //   style={{ color: tintColor }}
  //       // />
  //       <Image 
  //       source={require('../Images/Profile.png')}
  //       style={{width:20, height:20}}
  //     />
  //     ),
  //   },
  // },
  // List: {
  //   screen: List,
  //   navigationOptions: {
  //     drawerLabel: 'List',
  //     drawerIcon: ({ tintColor, focused }) => (
  //       // <Ionicons
  //       //   name={getTypedIcon("home")}
  //       //   size={26}
  //       //   style={{ color: tintColor }}
  //       // />
  //       <Image 
  //       source={require('../Images/Profile.png')}
  //       style={{width:20, height:20}}
  //     />
  //     ),
  //   },
  // },
  Customers: {
    screen: Customers,
    navigationOptions: {
      drawerLabel: 'Customers',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/Customer.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  },      
  CustomersAdd: {
    screen: CustomersAdd,
    navigationOptions: {
      drawerLabel: 'CustomersAdd',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/Customer.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  }, 
  CustomersEdit: {
    screen: CustomersEdit,
    navigationOptions: {
      drawerLabel: 'CustomersEdit',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/Customer.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
  Services: {
    screen: Services,
    navigationOptions: {
      drawerLabel: 'Services',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/Services.jpeg')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
  ServicesAdd: {
    screen: ServicesAdd,
    navigationOptions: {
      drawerLabel: 'ServicesAdd',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/Services.jpeg')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
  ServicesEdit: {
    screen: ServicesEdit,
    navigationOptions: {
      drawerLabel: 'ServicesEdit',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/Services.jpeg')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
  Stylists: {
    screen: Stylists,
    navigationOptions: {
      drawerLabel: 'Stylists',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/stylists.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
  StylistsAdd: {
    screen: StylistsAdd,
    navigationOptions: {
      drawerLabel: 'StylistsAdd',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/stylists.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  }, 
  StylistsEdit: {
    screen: StylistsEdit,
    navigationOptions: {
      drawerLabel: 'StylistsEdit',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/stylists.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  },    
  Billing: {
    screen: Billing,
    navigationOptions: {
      drawerLabel: 'Billing',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/billing.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
  BookingDetails: {
    screen: BookingDetails,
    navigationOptions: {
      drawerLabel: 'BookingDetails',
      drawerIcon: ({ tintColor, focused }) => (
        <Image 
        source={require('../Images/Booking.png')}
        style={{width:20, height:20}}
      />
      ),
    },
  },
},
{
  headerMode: 'none',
});

export default RootDrawer;