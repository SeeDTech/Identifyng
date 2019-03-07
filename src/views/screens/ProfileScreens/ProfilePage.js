import React, {Component} from 'react'
import { View,Text } from 'react-native'

class ProfilePage extends Component{
  constructor(){
    super()
    
  }
 state={
   data:'',
 }

  ApiUtils = {  
    checkStatus: function(response) {
      if (response.ok) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  };

  api = ()=>{
   
    const URL = `http://caa71e7a.ngrok.io/api/test`;
      return fetch(URL,{
         method:'GET',
       headers: {
          'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
     
     })
     .then((response) => response.json())
  .then((responseJson) => {
    if(responseJson){
      console.log(responseJson);
    }
    this.setState({
       data: responseJson
    })
 })
    //  .then(this.ApiUtils.checkStatus)
    //  .then(res => res.json())
    //  .then(res=>{this.setState({data:res})})
    //  .catch(e=>e)
  
  //    const response = await fetch(URL,{
  //     method:'GET',
  //   headers: {
  //     // "Accept": 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  
  // })
  
}

  componentDidMount=()=> {
    this.api();
  }

  render(){
    return (
      <View style={{justifyContent:"center",alignItems:"center",flex:1,}}>
        <Text>{this.state.data.body}</Text>
      </View>
    )
  }
}

export default ProfilePage
