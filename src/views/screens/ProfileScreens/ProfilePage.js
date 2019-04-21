import React, {Component} from 'react'
import { View,Text } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
class ProfilePage extends Component{
  constructor(){
    super()
    
  }
 state={
   data:'',
 }

  // ApiUtils = {  
  //   checkStatus: function(response) {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let error = new Error(response.statusText);
  //       error.response = response;
  //       throw error;
  //     }
  //   }
  // };

//   api = ()=>{
   
//     const URL = `http://caa71e7a.ngrok.io/api/test`;
//       return fetch(URL,{
//          method:'GET',
//        headers: {
//           'Accept': 'application/json',
//          'Content-Type': 'application/json',
//        },
     
//      })
//      .then((response) => response.json())
//   .then((responseJson) => {
//     if(responseJson){
//       console.log(responseJson);
//     }
//     this.setState({
//        data: responseJson
//     })
//  })
  
// }

  // componentDidMount=()=> {
  //   this.api();
  // }


  render(){
    const child = (
        <h1>hello world</h1>
    )
    return (
      <View style={{justifyContent:"center",alignItems:"center",flex:1,}}>
        <View style={{elevation:100}}>
        <QRCode
        logoBorderRadius={4}
        activeOpacity={0.7}
      value='www.google.com'
      backgroundColor='transparent'
     size={85}
    />
        </View>
      </View>
    )
  }
}

export default ProfilePage
