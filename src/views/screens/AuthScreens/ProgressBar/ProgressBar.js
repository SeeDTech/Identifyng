import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { BaseColor } from '../../../../styles/theme/color';
import bar from './styles';


export class ProgressBar extends Component {
    constructor(props) {
        super(props)

    }

    state = {
        active: {
            borderColor: BaseColor.dark,
        }
    }
    render() {
        const checkStep = require('../../../../components/logo/images/check-step.png');
        const { active } = this.state;
        const {checkPhone,
            activeBvn,
        } = this.props;


        const RenderCheckStepOne = ({ checked }) => {
            return (
                <View style={[bar.cirle, active]}>
                    {checked ? <Image source={checkStep} style={{ width: 20, height: 20 }} /> : <Text style={bar.text} >1</Text>}
                </View>
            )
        }
        const RenderCheckStepTwo = () => {
            return (
                <View style={bar.cirle}>
                    {/* <Image source={checkStep} style={{ width: 20, height: 20 }} /> */}
                    <Text style={bar.text} >2</Text>
                </View>
            )
        }
        const RenderCheckStepThree = () => {
            return (
                <View style={bar.cirle}>
                    {/* <Image source={checkStep} style={{ width: 20, height: 20 }} /> */}
                    <Text style={bar.text} >3</Text>
                </View>
            )
        }
        const RenderCheckStepFour = () => {
            return (
                <View style={bar.cirle}>
                    {/* <Image source={checkStep} style={{ width: 20, height: 20 }} /> */}
                    <Text style={bar.text} >4</Text>
                </View>
            )
        }
        const RenderProgressLine = () => {

            return <View style={bar.line} />
        }
        return (
            <View style={bar.container}>
                <RenderCheckStepOne activeBvn={activeBvn} checked={checkPhone} />
                <RenderProgressLine />
                <RenderCheckStepTwo />
                <RenderProgressLine />
                <RenderCheckStepThree />
                <RenderProgressLine />
                <RenderCheckStepFour />
            </View>
        )
    }
}

export default ProgressBar
