import { Alert } from 'react-native';
const URL = 'http://hogarbarber.developerscode.in/';
const API_URL = `${URL}api/`;
var myres = (url)=> fetch(url).then((res) => res.json());

var myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');

var api = {    
    //--------- Users ------------ //
    //registerThroughOtp
    // Register through OTP
    //http://hogarbarber.developerscode.in/api/Users/registerThroughOtp?MobileNumber=${this.state.mobile}
    registerThroughOtp(mobile){      
      // mobile = mobile.toLowerCase().trim();
      var url = `${API_URL}Users/registerThroughOtp?MobileNumber=${mobile}`;
      return fetch(url).then((res) => res.json())
  },
    // registerThroughOtp(mobile){      
    //     // mobile = mobile.toLowerCase().trim();
    //     var url = `${API_URL}Users/registerThroughOtp`;
    //     return fetch(url,{
    //         method: 'POST',
    //         headers: myHeaders,
    //         mode: 'cors',
    //         cache: 'default',
    //         body: JSON.stringify({
    //             MobileNumber: mobile
    //           })
    //     }).then((response)=>{
    //       if(response.status >= 200 && response.status < 300){
    //           return response;
    //       }else{
    //           // var error = new Error(response.statusText);
    //           // error.response = response;
    //           // throw error;
    //           throw response;
    //       }
    //   }) .then((res) => res.json())
    // },
    //registerThroughEmail
    // Register with Email, Mobile and Facebook.
    //http://hogarbarber.developerscode.in/api/Users/registerThroughEmail?Name=${this.state.name}&Email=${this.state.email}&MobileNumber=${this.state.mobile}&Password=${this.state.password}
    registerThroughEmail(name, email, mobile, password){
      // userid = userid.trim();
      // otp = otp.trim();
      var url = `${API_URL}Users/registerThroughEmail?Name=${name}&Email=${email}&MobileNumber=${mobile}&Password=${password}`;
      return fetch(url).then((res) => res.json())
  },
    // registerThroughEmail(name, email, mobile, password){
    //     name = name.toLowerCase().trim();
    //     email = email.toLowerCase().trim();
    //     mobile = mobile.toLowerCase().trim();
    //     password = password.trim();
    //     var url = `${API_URL}Users/registerThroughEmail`;
    //     return fetch(url,{
    //         method: 'post',
    //         body: JSON.stringify({
    //             Name: name,
    //             Email: email,
    //             MobileNumber: mobile,
    //             Password: password
    //           })
    //     }).then((res) => res.json())
    // },
    //verifyOtp
    // OTP Verification
    //http://hogarbarber.developerscode.in/api/Users/verifyOtp?UserId=${this.state.userId}&OTP=${this.state.otp}
    verifyOtp(userid, otp){
      // userid = userid.trim();
      // otp = otp.trim();
      var url = `${API_URL}Users/verifyOtp?UserId=${userid}&OTP=${otp}`;
      return fetch(url).then((res) => res.json())
  },
    // verifyOtp(userid, otp){
    //     userid =userid.trim();
    //     otp = otp.trim();
    //     var url = `${API_URL}Users/verifyOtp`;
    //     return fetch(url,{
    //         method: 'post',
    //         body: JSON.stringify({
    //             UserId: userid,
    //             OTP: otp
    //           })
    //     }).then((res) => res.json())
    // },    
    //ResendOTP
    // Resend OTP to particular mobile
    //http://hogarbarber.developerscode.in/api/Users/ResendOTP?MobileNumber=${this.state.mobile}
    ResendOTP(mobile){      
      // mobile = mobile.toLowerCase().trim();
      var url = `${API_URL}Users/ResendOTP?MobileNumber=${mobile}`;
      return fetch(url).then((res) => res.json())
  },
  //Get_User_ById
  // Get User Details by userid
  //http://hogarbarber.developerscode.in/api/Users/Get_User_ById?UserId=${this.state.userId}
  Get_User_ById(userid) {
    // userid = userid.trim();
    var url = `${API_URL}Users/Get_User_ById?UserId=${userid}`;
    return fetch(url).then((res) => res.json())
  },
  //Update_User
  // Update User Details by userid
  //http://hogarbarber.developerscode.in/api/Users/Update_User?Name=${this.state.name}&UserName=${this.state.email}&Password=${this.state.password}&MobileNumber=${this.state.mobile}&Email=${this.state.email}&UpdatedBy=${this.state.userId}&RoleId=${this.state.roleid}&UserId=${this.state.userId}
  Update_User(name,username,password,mobile,email,updatedby,roleid,userid) {
    // userid = userid.trim();
    var url = `${API_URL}Users/Update_User?Name=${name}&UserName=${username}&Password=${password}&MobileNumber=${mobile}&Email=${email}&UpdatedBy=${updatedby}&RoleId=${roleid}&UserId=${userId}`;
    return fetch(url).then((res) => res.json())
  },
  //Verify_Login
  // To Verify User based on Username and Password
  //http://hogarbarber.developerscode.in/api/Users/Verify_Login?UserName=${this.state.username}&Password=${this.state.password}
  Verify_Login(username,password) {
    // userid = userid.trim();
    var url = `${API_URL}Users/Verify_Login?UserName=${username}&Password=${password}`;
    return fetch(url).then((res) => res.json())
  },
    //--------- Salons ------------ //
    //GetSalons
    // Get All Salon Details
    //http://hogarbarber.developerscode.in/api/Salons/GetSalons
    getSalons(){
        var url = `${API_URL}Salons/GetSalons`;
        return fetch(url).then((res) => res.json())
      },
    //GetActiveSalons
    // Get only Active Salons
    //http://hogarbarber.developerscode.in/api/Salons/GetActiveSalons
    GetActiveSalons(){      
      var url = `${API_URL}Salons/GetActiveSalons`;
      return fetch(url).then((res) => res.json())
    },
    //GetSalonsId
    //Get Salon by SalonId
    //http://hogarbarber.developerscode.in/api/Salons/GetSalonsId?SalonsId=${salonsid}
    getSalonById(salonsid){
        // salonsid = salonsid.trim();
        var url = `${API_URL}Salons/GetSalonsId?SalonsId=${salonsid}`;
        return fetch(url).then((res) => res.json());
      },
    //GetPopularSalons
    //Get Popular Salons
    //http://hogarbarber.developerscode.in/api/Salons/GetPopularSalons
    GetPopularSalons(){
      // salonsid = salonsid.trim();
      var url = `${API_URL}Salons/GetPopularSalons`;
      return fetch(url).then((res) => res.json());
    },
    //--------- Search ------------ //  
    //ViewSalonImages
    //Get Salon Gallery by SalonId
    //http://hogarbarber.developerscode.in/api/Search/ViewSalonImages?SalonsId=${this.state.SalonId}
    ViewSalonImages(salonsid){
       // salonsid = salonsid.trim();
        var url = `${API_URL}Search/ViewSalonImages?SalonsId=${salonsid}`;
        return fetch(url).then((res) => res.json());
      },

    //--------- SalonReviews ------------ //
    //GetDatabySalonsId
    //Get Salon Reviews by SalonId
    //http://hogarbarber.developerscode.in/api/SalonReviews/GetDatabySalonsId?SalonsId=${salonsid}
    getSalonReviewsById(salonsid){
        // salonsid = salonsid.trim();
        var url = `${API_URL}SalonReviews/GetDatabySalonsId?SalonsId=${salonsid}`;
        return fetch(url).then((res) => res.json());
      },
    //InsertSalonReviews
    //Insert Salon Reviews
    //http://hogarbarber.developerscode.in/api/SalonReviews/InsertSalonReviews?SalonsId=${this.state.SalonId}&UserId=${this.state.userId}&Comment=${this.state.text}&OverallSatisfaction=${4}&Type=Salon&SalonServiceId=&EmployeeId=
    InsertSalonReviews(salonsid,userid,comment,overall,type,salonserviceid,employeeid){
      // comment = comment.trim();
      var url = `${API_URL}SalonReviews/InsertSalonReviews?SalonsId=${salonsid}&UserId=${userid}&Comment=${comment}&OverallSatisfaction=${overall}&Type=${type}&SalonServiceId=${salonserviceid}&EmployeeId=${employeeid}`;
      return fetch(url).then((res) => res.json());
    },  
    //--------- SalonEmployees ------------ //
    //GetDatabySalonsId
    //Get Salon Stylists/Employee Details by SalonId
    //http://hogarbarber.developerscode.in/api/SalonEmployees/GetDatabySalonsId?SalonsId=${salonsid}
    getSalonStylistsById(salonsid){
        // salonsid = salonsid.trim();
        var url = `${API_URL}SalonEmployees/GetDatabySalonsId?SalonsId=${salonsid}`;
        return fetch(url).then((res) => res.json());
      },
    //GetDatabyId
    //Get Stylists by StylistsId
    getStylistsById(stylistsid){
        // stylistsid = stylistsid.trim();
        var url = `${API_URL}SalonEmployees/GetDatabyId?SalonEmployeesId=${stylistsid}`;
        return fetch(url).then((res) => res.json());
      },
    //--------- TreatmentTitle ------------ //  
    //GetData
    //Get Salon Services
    getSalonServices(){        
        var url = `${API_URL}TreatmentTitle/GetData`;
        return fetch(url).then((res) => res.json());
      },
    //GetbyCategoryId
    //Get by CategoryId
    //http://hogarbarber.developerscode.in/api/TreatmentTitle/GetbyCategoryId?CategoryId=1
    GetbyCategoryId(categoryid){        
      var url = `${API_URL}TreatmentTitle/GetbyCategoryId?CategoryId=${categoryid}`;
      return fetch(url).then((res) => res.json());
    },  
    //GetTreatmentTitlebyCategoryId
    //Get Treatment Title by CategoryId
    //http://hogarbarber.developerscode.in/api/TreatmentTitle/GetTreatmentTitlebyCategoryId?CategoryId=1
    GetTreatmentTitlebyCategoryId(categoryid){        
      var url = `${API_URL}TreatmentTitle/GetTreatmentTitlebyCategoryId?CategoryId=${categoryid}`;
      return fetch(url).then((res) => res.json());
    }, 
    //--------- Customers ------------ //    
    //GetUserId
    //Get Profile
    //http://hogarbarber.developerscode.in/api/Customers/GetUserId?UserId=${this.state.userId}
    getProfile(userid){
        // userid = userid.trim();        
        var url = `${API_URL}Customers/GetUserId?UserId=${userid} `;
        return fetch(url).then((res) => res.json());
      },
    //UpdateCustomers
    //Update Customer Details
    //http://hogarbarber.developerscode.in/api/Customers/UpdateCustomers?FirstName=${this.state.FirstName}&LastName=${this.state.LastName}&PhoneNumber=${this.state.PhoneNumber}&ProfileName=${this.state.ProfileName}&PostalCode=${this.state.PostalCode}&MemberTypeId=${this.state.MemberTypeId}&Gender=${this.state.Gender}&Note=${this.state.Note}&Newsletter=${this.state.Newsletter}&Email=${this.state.Email}&Password=${this.state.Password}&UserId=${this.state.UserId}&Iamge=${this.state.Iamge}&ImagePath=${this.state.ImagePath}&UpdatedBy=${this.state.UpdatedBy}&CustomerId=${this.state.CustomerId}&Address=${this.state.Address}&Age=${this.state.Age}  
    UpdateCustomers(firstname,lastname,phonenumber,profilename,postalcode,membertypeid,gender,note,newsletter,email,password,userid,image,imagepath,updatedby,customerid,address,age){
      // userid = userid.trim();        
      var url = `${API_URL}Customers/UpdateCustomers?FirstName=${firstname}&LastName=${lastname}&PhoneNumber=${phonenumber}&ProfileName=${profilename}&PostalCode=${postalcode}&MemberTypeId=${membertypeid}&Gender=${gender}&Note=${note}&Newsletter=${newsletter}&Email=${email}&Password=${password}&UserId=${userid}&Iamge=${image}&ImagePath=${imagepath}&UpdatedBy=${updatedby}&CustomerId=${customerid}&Address=${address}&Age=${age}`;
      return fetch(url).then((res) => res.json());
    },
    //------------  FavouriteSalons ----------------- //
    //AddSalontoFavourite
    //Add Salon to Favourite based on UserId and Salonid
    //http://hogarbarber.developerscode.in/api/FavouriteSalons/AddSalontoFavourite?SalonId=${salonid}&UserId=${this.state.userId} 
    AddSalontoFavourite(salonid,userid){
      // salonid = salonid.trim();      
      // userid = userid.trim();        
      var url = `${API_URL}FavouriteSalons/AddSalontoFavourite?SalonId=${salonid}&UserId=${userid}`;
      return fetch(url).then((res) => res.json());
    },
    //RemoveSalonFromFavourite
    //Remove Salon from Favourite based on UserId and Salonid
    //http://hogarbarber.developerscode.in/api/FavouriteSalons/RemoveSalonFromFavourite?SalonId=${salonid}&UserId=${this.state.userId}
    RemoveSalonFromFavourite(salonid,userid){
      // salonid = salonid.trim();      
      // userid = userid.trim();        
      var url = `${API_URL}FavouriteSalons/RemoveSalonFromFavourite?SalonId=${salonid}&UserId=${userid}`;
      return fetch(url).then((res) => res.json());
    },
    //------------  FavouriteSalonService ----------------- //
    //AddServicestoFavourites
    //Add Services to Favourites based on UserId and SalonServicesId
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/AddServicestoFavourites?SalonServicesId=${this.state.SalonServicesId}&UserId=${this.state.UserId}
    AddServicestoFavourites(salonserviceid,userid){
      // salonserviceid = salonserviceid.trim();      
      // userid = userid.trim();        
      var url = `${API_URL}FavouriteSalonService/AddServicestoFavourites?SalonServicesId=${salonserviceid}&UserId=${userid}`;
      return fetch(url).then((res) => res.json());
    },
    //RemoveServicefromFavourite
    //Remove Service from Favourite based on UserId and SalonServicesId
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/RemoveServicefromFavourite?SalonServicesId=${this.state.SalonServicesId}&UserId=${this.state.UserId}
    RemoveServicefromFavourite(salonserviceid,userid){
      // salonid = salonid.trim();      
      // userid = userid.trim();        
      var url = `${API_URL}FavouriteSalonService/RemoveServicefromFavourite?SalonServicesId=${salonserviceid}&UserId=${userid}`;
      return fetch(url).then((res) => res.json());
    },
    //AddServiceToCart
    //Add Service To Cart 
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/AddServiceToCart?SalonServicesId=${this.state.SalonServicesId}&UserId=${this.state.userId}&SalonsId=${this.state.SalonId}&BookingDate=${this.state.BookingDate}&BookingTime=${this.state.BookingTime}&Chairs=${this.state.Chairs}&EmployeeServicesId=${this.state.EmployeeServicesId}
    AddServiceToCart(salonserviceid,userid,salonid,bookingdate,bookingtime,chairs,employeeserviceid){
             
      var url = `${API_URL}FavouriteSalonService/AddServiceToCart?SalonServicesId=${salonserviceid}&UserId=${userid}&SalonsId=${salonid}&BookingDate=${bookingdate}&BookingTime=${bookingtime}&Chairs=${chairs}&EmployeeServicesId=${employeeservicesid}`;
      return fetch(url).then((res) => res.json());
    },
    //GetCartServices
    //Get Service From Cart 
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/GetCartServices?UserId=${this.state.userId}&SalonsId=${this.state.SalonId}
    GetCartServices(userid,salonid){             
      var url = `${API_URL}FavouriteSalonService/GetCartServices?UserId=${userid}&SalonsId=${salonid}`;
      return fetch(url).then((res) => res.json());
    },
    //DeleteServiceFromCart
    //Delete Service From Cart by Cartid
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/DeleteServiceFromCart?CartId=${cartid}
    DeleteServiceFromCartbyCartId(cartid){             
      var url = `${API_URL}FavouriteSalonService/DeleteServiceFromCart?CartId=${cartid}`;
      return fetch(url).then((res) => res.json());
    },
    //DeleteServiceFromCart
    //Delete Service From Cart by Userid
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/DeleteServiceFromCart?UserId={UserId}
    DeleteServiceFromCartbyUserId(userid){             
      var url = `${API_URL}FavouriteSalonService/DeleteServiceFromCart?UserId=${userid}`;
      return fetch(url).then((res) => res.json());
    },
    //DeleteServiceFromCart
    //Delete Service From Cart by userid and salonid
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/DeleteServiceFromCart?UserId={UserId}&SalonsId={SalonsId}
    DeleteServiceFromCartbyUserIdSalonId(userid,salonid){             
      var url = `${API_URL}FavouriteSalonService/DeleteServiceFromCart?UserId=${userid}&SalonsId=${salonid}`;
      return fetch(url).then((res) => res.json());
    },
    //AddServiceToSaveForLater
    //Add Service To SaveForLater
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/AddServiceToSaveForLater?SalonServicesId=${this.state.SalonServicesId}&UserId=${this.state.userId}&SalonsId=${this.state.SalonId}&CartId=${cartid}&BookingDate=${this.state.BookingDate}&BookingTime=${this.state.BookingTime}&Chairs=${this.state.Chairs}&EmployeeServicesId=${this.state.EmployeeServicesId}
    AddServiceToSaveForLater(salonserviceid,userid,salonid,bookingdate,bookingtime,chairs,employeeserviceid){       
      var url = `${API_URL}FavouriteSalonService/AddServiceToSaveForLater?SalonServicesId=${salonserviceid}&UserId=${userid}&SalonsId=${salonid}&BookingDate=${bookingdate}&BookingTime=${bookingtime}&Chairs=${chairs}&EmployeeServicesId=${employeeservicesid}`;
      return fetch(url).then((res) => res.json());
    },
    //GetSaveForLaterServices
    //Get Save For Later Services
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/GetSaveForLaterServices?UserId=${this.state.userId}&SalonsId=${this.state.SalonId}
    GetSaveForLaterServices(userid,salonid){       
      var url = `${API_URL}FavouriteSalonService/GetSaveForLaterServices?UserId=${userid}&SalonsId=${salonid}`;
      return fetch(url).then((res) => res.json());
    },
    //DeleteServiceFromSaveForLater
    //Delete Service From SaveForLater
    //http://hogarbarber.developerscode.in/api/FavouriteSalonService/DeleteServiceFromSaveForLater?SaveForLaterId=${SaveForLaterId}
    DeleteServiceFromSaveForLater(SaveForLaterId){       
      var url = `${API_URL}FavouriteSalonService/DeleteServiceFromSaveForLater?SaveForLaterId=${SaveForLaterId}`;
      return fetch(url).then((res) => res.json());
    },
    //------------  Payment ----------------- //
    //GetAllPaymentsByUser
    //Get All Payments based on UserId 
    //http://hogarbarber.developerscode.in/api/Payment/GetAllPaymentsByUser?UserId=431
    GetAllPaymentsByUser(userid){        
      // userid = userid.trim();        
      var url = `${API_URL}Payment/GetAllPaymentsByUser?UserId=${userid}`;
      return fetch(url).then((res) => res.json());
    },
    //GetBookingDetailsByPaymentId
    //Get Booking Details By PaymentId
    //http://hogarbarber.developerscode.in/api/Payment/GetBookingDetailsByPaymentId?PaymentsId=${this.state.PaymentsId}
    GetBookingDetailsByPaymentId(paymentsid){        
      // userid = userid.trim();        
      var url = `${API_URL}Payment/GetBookingDetailsByPaymentId?PaymentsId=${paymentsid}`;
      return fetch(url).then((res) => res.json());
    },
    //------------  SalonServices ----------------- //
    //GetData
    //Get Data for Salon Services
    //http://hogarbarber.developerscode.in/api/SalonServices/GetData
    GetSalonServicesData(){                
      var url = `${API_URL}SalonServices/GetData`;
      return fetch(url).then((res) => res.json());
    },
    //GetDatabySalonsId
    //Get Data based on SalonsId 
    //http://hogarbarber.developerscode.in/api/SalonServices/GetDatabySalonsId?SalonsId=${this.state.SalonId}
    GetDatabySalonsId(salonid){        
      // salonid = salonid.trim();        
      var url = `${API_URL}SalonServices/GetDatabySalonsId?SalonsId=${salonid}`;
      return fetch(url).then((res) => res.json());
    },
    //GetDatabyId
    //Get Salon Services Data by Id
    //http://hogarbarber.developerscode.in/api/SalonServices/GetDatabyId?SalonServicesId=${this.state.SalonServicesId}
    GetServicesbyId(salonserviceid){                
      var url = `${API_URL}SalonServices/GetDatabyId?SalonServicesId=${salonserviceid}`;
      return fetch(url).then((res) => res.json());
    },
    //------------  SalonCheckout ----------------- //
    //InsertNew1
    //Insert Salon Checkout
    //http://hogarbarber.developerscode.in/api/SalonCheckout/InsertNew1?EmployeeServicesId=${this.state.EmployeeServicesId}&BookingDate=${this.state.BookingDate}&BookingTime=${this.state.BookingTime}&PaymentStatus=${this.state.PaymentStatus}&PaymentType=${this.state.PaymentType}&IsAcitve=${this.state.IsAcitve}&CreatedDate=${this.state.CreatedDate}&SalonsId=${this.state.SalonId}&SalonServicesId=${this.state.SalonServicesId}&BookingType=${this.state.BookingType}
    SalonCheckoutInsert(employeeservicesid,bookingdate,bookingtime,paymentstatus,paymenttype,isactive,createddate,salonid,salonserviceid,bookingtype){                
      var url = `${API_URL}InsertNew1?EmployeeServicesId=${employeeservicesid}&BookingDate=${bookingdate}&BookingTime=${bookingtime}&PaymentStatus=${paymentstatus}&PaymentType=${paymenttype}&IsAcitve=${isactive}&CreatedDate=${createddate}&SalonsId=${salonid}&SalonServicesId=${salonserviceid}&BookingType=${bookingtype}`;
      return fetch(url).then((res) => res.json());
    },    
    //------------  ClassesApi ----------------- //
    //GetActiveClasses
    //Get Active Classes
    //http://hogarbarber.developerscode.in/api/ClassesApi/GetActiveClasses
    GetActiveClasses(){                
      var url = `${API_URL}ClassesApi/GetActiveClasses`;
      return fetch(url).then((res) => res.json());
    },
    //------------  Area ----------------- //
    //GetDatabyId
    //Get Area Details by Id
    //http://hogarbarber.developerscode.in/api/Area/GetDatabyId?Areaid=${areaid}
    GetAreabyId(areaid){                
      var url = `${API_URL}Area/GetDatabyId?Areaid=${areaid}`;
      return fetch(url).then((res) => res.json());
    },
    //------------  Google Api ----------------- //
    //maps/api/directions/json
    //Get google maps
    //https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.origin}&destination=${this.state.destination}&key=AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8
    GetGoogleMapDirections(origin, destination){                
      var url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8`;
      return fetch(url).then((res) => res.json());
    },
  };
  
  module.exports = api;