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
            
        },
        inActive:{
            borderColor: BaseColor.grey,
        },
        activeText:{
            color:BaseColor.dark,
        },
        inActiveText:{
            color:BaseColor.grey,
        }
    }
//     componentDidMount = () => {
//       this.props.isCheck;
//     }
//    componentDidUpdate = (prevProps, prevState) => {
//      if(prevProps.isCheck !==this.props.isCheck){
//          return this.props.isCheck
//      }
//    }
   
    
    
    render() {
        const checkStep = require('../../../../components/logo/images/check-step.png');
        const { active,inActive, activeText,inActiveText } = this.state;
        const {isCheck} = this.props;
        
        const RenderCheckStepOne = ({ isCheck }) => {
            return (
                <View style={[bar.cirle,  isCheck >=0 ? active:inActive]}>
                    {isCheck>0 ? <Image source={checkStep} style={{ width: 20, height: 20 }} /> : <Text style={[bar.text,isCheck >=0 ? activeText:inActiveText]} >1</Text>}
                </View>
            )
        }
        const RenderCheckStepTwo = ({isCheck}) => {
            return (
                <View style={[bar.cirle,isCheck >=1 ? active:inActive]}>
                   { isCheck>1 ? <Image source={checkStep} style={{ width: 20, height: 20 }} /> :
                    <Text style={[bar.text,isCheck >=1 ? activeText:inActiveText]} >2</Text>}
                </View>
            )
        }
        const RenderCheckStepThree = ({isCheck}) => {
            return (
                <View style={[bar.cirle,isCheck >=2 ? active:inActive]}>
                   { isCheck>2 ?<Image source={checkStep} style={{ width: 20, height: 20 }} /> :
                    <Text style={[bar.text,isCheck >=2 ? activeText:inActiveText]} >3</Text>}
                </View>
            )
        }
        const RenderCheckStepFour = ({isCheck}) => {
           
            return (
                <View style={[bar.cirle,isCheck >=3 ? active:inActive]}>
                   {isCheck>3 ? <Image source={checkStep} style={{ width: 20, height: 20 }} /> :
                    <Text style={[bar.text, isCheck >=3 ? activeText:inActiveText]} >4</Text>}
                </View>
            )
        }
        const RenderProgressLine = () => {

            return <View style={bar.line} />
        }
        return (
            <View style={bar.container}>
                <RenderCheckStepOne  isCheck={isCheck} />
                <RenderProgressLine />
                <RenderCheckStepTwo isCheck={isCheck} />
                <RenderProgressLine />
                <RenderCheckStepThree isCheck={isCheck}/>
                <RenderProgressLine />
                <RenderCheckStepFour isCheck={isCheck}/>
            </View>
        )
    }
}

export default ProgressBar
