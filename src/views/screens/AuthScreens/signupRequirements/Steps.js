
import React from 'react'
import { View, Text } from 'react-native'
import requirement from './styles'

const Steps = (props) => {
    const {number,children}=props
    return (
        <View style={requirement.steps}>
            <View style={requirement.items}>
                <Text style={requirement.itemsText}>{number}</Text>
            </View>
            <View style={requirement.StepContainer}>
                <Text style={requirement.StepText}>{children}</Text>
            </View>
        </View>
    )
}

export default Steps
