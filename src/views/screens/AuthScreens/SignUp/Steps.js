
import React from 'react'
import { View, Text,Image } from 'react-native'
import requirement from './styles'

const Steps = (props) => {
    const {children}=props
    return (
        <View style={requirement.steps}>
            <View style={requirement.items}>
                <Image style={{width:22,height:22}} source={require('../../../../components/logo/images/check.png')} />
            </View>
            <View style={requirement.StepContainer}>
                <Text style={requirement.StepText}>{children}</Text>
            </View>
        </View>
    )
}

export default Steps
