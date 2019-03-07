import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { Btn } from '../../../components/buttons/Butons';
import { BaseColor } from '../../../styles/theme/color';
import { connect } from 'react-redux'
import { userLogout } from '../../../helpers/Auth.helpers';
class SettingsScreen extends Component {
    signOut = ()=>{
     return this.props.userLogout();      
      }
      componentDidUpdate=(prevProps)=>{
        if(prevProps.isLoading !==this.props.isLoggedIn){
          if(this.props.isLoggedIn!==true){
            this.props.navigation.navigate('AuthLoading')
          }
        }
      }
  render() {
    return (
      <View  style={{alignContent:'center',backgroundColor:BaseColor.light, alignItems:"center", justifyContent:'center', flex:1 }}>
        <Btn onPress={this.signOut} title="LOGOUT"/>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      isLoggedIn:state.Auth.isLoggedIn,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(userLogout())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SettingsScreen)
