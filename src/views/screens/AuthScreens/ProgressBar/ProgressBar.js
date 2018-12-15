import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { BaseColor } from '../../../../styles/theme/color';

export class ProgressBar extends Component {

    render() {
        const renderCheckStep =(
            <View  style={{alignItems:'center', width:20, height:20, borderRadius:20, borderWidth:1, borderColor:BaseColor.dark,backgroundColor:'transparent',justifyContent:'center'}}>
                <Image source={require('../../../../components/logo/images/check-step.png')} style={{width:20,height:20}} /> 
            {/* <Text style={{fontSize:12, fontFamily:'Ubuntu-Regular',color:BaseColor.grey}} >1</Text> */}
            </View>
        )
        const renderProgressLine =(
            <View style={{justifyContent:'center', borderTopWidth:1,marginTop:10, width:25,borderTopColor:BaseColor.grey}}/>
        )
    return (
      <View style={{flex:1,flexDirection:"row", justifyContent:'center',}}>
       {renderCheckStep}
       {renderProgressLine}
       {renderCheckStep}
       {renderProgressLine}
       {renderCheckStep}
       {renderProgressLine}
       {renderCheckStep}
      </View>
    )
  }
}

export default ProgressBar
