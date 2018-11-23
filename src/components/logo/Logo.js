import Image from 'react-native-remote-svg'

import { View, Dimensions } from 'react-native'
import React, { Component } from 'react'

const { width, height } = Dimensions.get('window');
class Logo extends Component {

    render() {
        return (
            <View>
            <Image  style={{width:150,height:150}} source={require('../logo/svg/idlogo.svg')} />
            </View>
        )
    }
}
export default Logo