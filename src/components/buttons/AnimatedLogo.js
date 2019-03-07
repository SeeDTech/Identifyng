import React, {Component} from 'react';
import { Animated, AppRegistry, View, Easing } from 'react-native';
import Svg, { G, Path } from 'react-native-svg'

const AnimatedPath = Animated.createAnimatedComponent(Path)
const AnimatedG = Animated.createAnimatedComponent(G)
const AnimatedSvg = Animated.createAnimatedComponent(Svg)


class Dot extends Component {
constructor(props){
    super(props)
    this.state = {
        spin: new Animated.Value(0)
    }
}

componentDidMount(){
    this.spin()
}
spin = ()=> {
    this.state.spin.setValue(0)
    Animated.timing(this.state.spin, {
        toValue: 1,
        duration:1000,
        easing: Easing.linear,
        useNativeDriver:true
    }).start(()=>this.spin())
}
render () {
    const intSpin = this.state.spin.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
    })

    const intSpinb = this.state.spin.interpolate({
        inputRange: [0, 1],
        outputRange: ["360deg", "0deg"]
    })

    return (
        <Animated.View>
        <AnimatedSvg  height={3} width={3}>
        <G x="38.4" y="56.28" >
        <AnimatedG  style={{transform:[{rotate:intSpin}, {translateX: -38.4}, {translateY: -56.28}]}}>
        <AnimatedPath fill={this.props.fill}  d="M40.74,59.57a3.37,3.37,0,0,0,2.42-2A3.18,3.18,0,0,0,42.59,54a3.6,3.6,0,0,0-6.22,1.56A1.63,1.63,0,0,1,35,57a1.56,1.56,0,0,1-1.79-1.92,6.44,6.44,0,0,1,1.36-2.92,6.76,6.76,0,0,1,11.68,2,6.6,6.6,0,0,1-3.69,8.15,7.34,7.34,0,0,1-3.14.55,6.55,6.55,0,0,1-4.77-2.46,1.51,1.51,0,0,1,.22-2.29,1.54,1.54,0,0,1,2.19.23A3.48,3.48,0,0,0,40.74,59.57Z"/>
        </AnimatedG>
        <AnimatedG  style={{transform:[{rotate:intSpinb}, {translateX: -38.4}, {translateY: -56.28}]}}>
        <AnimatedPath   fill={this.props.fill}  d="M27.88,55.54a12,12,0,0,1,2.26-6.24,11.81,11.81,0,0,1,4.64-3.83,11.6,11.6,0,0,1,3.37-1,12.78,12.78,0,0,1,3.42,0A12.42,12.42,0,0,1,47.42,47,12,12,0,0,1,50,50a12.46,12.46,0,0,1,1.27,2.71,11.14,11.14,0,0,1,.39,5.46A15.71,15.71,0,0,1,51,60.64a1.56,1.56,0,0,1-2.06.89,1.63,1.63,0,0,1-.9-2.08c.23-.67.4-1.37.57-2.05a5.92,5.92,0,0,0,0-2.68,8.74,8.74,0,0,0-5.3-6.52,8.14,8.14,0,0,0-4.79-.56,9,9,0,0,0-4,1.7,8.74,8.74,0,0,0-2.53,3.15,8.89,8.89,0,0,0-.85,3.38,1.71,1.71,0,0,1-.56,1.18,1.76,1.76,0,0,1-2,0,1.68,1.68,0,0,1-.49-.66A1.78,1.78,0,0,1,27.88,55.54Z"/>
        </AnimatedG>
        <AnimatedG  style={{transform:[{rotate:intSpinb}, {translateX: -38.4}, {translateY: -56.28}]}}>
        <AnimatedPath  fill={this.props.fill}  d="M42.7,67.72A13.91,13.91,0,0,1,33.09,66a12.88,12.88,0,0,1-3.68-4.06,1.74,1.74,0,0,1-.29-1.36,1.64,1.64,0,0,1,1.32-1.22,1.44,1.44,0,0,1,1.53.74,11.22,11.22,0,0,0,1.55,2.14,8.84,8.84,0,0,0,12.14.53,1.58,1.58,0,0,1,1.84-.3A1.56,1.56,0,0,1,48.35,64a1.53,1.53,0,0,1-.58,1.12A12.67,12.67,0,0,1,42.7,67.72Z"/>
        </AnimatedG>
        </G>
        </AnimatedSvg>
        </Animated.View>
    )
}
}
export default class AnimLogo extends Component {
    constructor(props){
        super(props) 
        this.state = {
            pulsate : {
                a: new Animated.Value(0),
                b: new Animated.Value(0),
                c: new Animated.Value(0),
                d: new Animated.Value(0),
                e: new Animated.Value(0),
            },
            spinValue: {
                a: new Animated.Value(0),
                b: new Animated.Value(0),
                c: new Animated.Value(0),
            }
        }
    }
    componentDidMount() {
        this.pulsate()
        this.spin()
    }

    spin () {
        this.state.spinValue.a.setValue(0)
        this.state.spinValue.b.setValue(0)
        this.state.spinValue.c.setValue(0)
        Animated.parallel([
            Animated.sequence([
            Animated.timing(
                this.state.spinValue.c,
                {
                  toValue: 1,
                  duration: 1000,
                  easing: Easing.linear,
                  useNativeDriver:true
                }
              ),
              
            ]),
            Animated.timing(
                this.state.spinValue.a,
                {
                  toValue: 1,
                  duration: 1000,
                  easing: Easing.linear
                }
              ),
              Animated.timing(
                this.state.spinValue.b,
                {
                  toValue: 1,
                  duration: 1000,
                  easing: Easing.linear,
                  useNativeDriver:true
                }
              ),
        ]).start(() => {
            Animated.timing(
                this.state.spinValue.c,
                {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.linear
                }
            )
            this.spin()})
      }

    pulsate = () => {
        
        Animated.parallel([
            Animated.sequence([
                Animated.timing(
                    this.state.pulsate.a,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    this.state.pulsate.a,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }
                    )
            ]),
            Animated.sequence([
                Animated.timing(
                    this.state.pulsate.b,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                        delay: 100,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    this.state.pulsate.b,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }
                    )
            ]),
            Animated.sequence([
                Animated.timing(
                    this.state.pulsate.c,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                        delay: 200,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    this.state.pulsate.c,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }
                    )
            ]),
            Animated.sequence([
                Animated.timing(
                    this.state.pulsate.d,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                        delay: 300,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    this.state.pulsate.d,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }
                    )
            ]),
            Animated.sequence([
                Animated.timing(
                    this.state.pulsate.e,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                        delay: 400,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    this.state.pulsate.e,
                    {
                        toValue: 0,
                        delay: 0,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }
                    )
            ])
        ]).start(()=> this.pulsate())
    }
    render () {
        let {pulsate, spinValue} = this.state

        const {size, color} = this.props
        // const color = this.props.color;

      
        const spina = spinValue.c.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '0deg']  //change second to 360
          })
        const spinb = spinValue.c.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '0deg'] //change first to 360
          })

        const spinc = spinValue.b.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '0deg', '0deg']
          })
        const spind = spinValue.a.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '0deg', '0deg']
          })
          
        return (
            <Animated.View >
            <Svg viewBox="0 0 149.73 164.38" height={size?size:130} width={size?size:130} >
            <G id="Layer_2" data-name="Layer 2">
                <G id="Layer_1-2" data-name="Layer 1">
                    <AnimatedG style={{...this.props.style, opacity:pulsate.a}}>
                    <Path fill={color}  d="M104.35,75.5c.11.2.2.42.31.61a1.69,1.69,0,0,1-.76,2.25,1.61,1.61,0,0,1-2.17-.79,13.48,13.48,0,0,0-6.11-6.28,13.31,13.31,0,0,0-5.9-1.47c-2.46,0-4.92,0-7.38,0a1.66,1.66,0,0,1-1.63-2.16,1.59,1.59,0,0,1,1.62-1.12c1.25,0,2.49,0,3.74,0h.51v0c1.35,0,2.71-.1,4.06,0A16.6,16.6,0,0,1,104.35,75.5Z"/>
                    <Path fill={color}  d="M92,100a17.15,17.15,0,0,1-2.48.19c-2.23,0-4.47,0-6.7,0A1.75,1.75,0,0,1,81,98.34c0-2.23,0-4.46,0-6.69a1.67,1.67,0,0,1,3.2-.7,2.13,2.13,0,0,1,.13.76c0,1.51,0,3,0,4.53v.56l.56,0c1.56,0,3.11,0,4.66,0a13.22,13.22,0,0,0,11.88-7.18,12.19,12.19,0,0,0,1.49-7.52,1.63,1.63,0,0,1,.69-1.69,1.61,1.61,0,0,1,1.75-.1,1.52,1.52,0,0,1,.86,1.23,16.22,16.22,0,0,1-1.15,8.18,16.75,16.75,0,0,1-7,8.08A17.06,17.06,0,0,1,92,100Z"/>
                    <Path fill={color}  d="M84.33,87A1.65,1.65,0,0,1,81,87c0-1.42,0-2.83,0-4.25s0-2.86,0-4.29a1.56,1.56,0,0,1,1-1.5,1.54,1.54,0,0,1,1.81.38,1.92,1.92,0,0,1,.45,1.07C84.35,81.27,84.34,84.15,84.33,87Z"/>
                    <Path fill={color}  d="M82,75.06a1.91,1.91,0,0,1-.81-.83,2,2,0,0,1,.66-2.49,1.71,1.71,0,0,1,2.51,1.65A1.63,1.63,0,0,1,82,75.06Z"/>
                    <Path fill={color}  d="M96.77,85.23a1.63,1.63,0,0,1,1.66-1.66,1.68,1.68,0,1,1,0,3.35A1.64,1.64,0,0,1,96.77,85.23Z"/>
                    </AnimatedG>
            
                    <AnimatedG style={{...this.props.style, opacity:pulsate.b}}>
                    <Path fill={color}  d="M90.11,61c1.83.15,3.42.38,4.71.6a23.86,23.86,0,0,1,4.27,1.56,1.6,1.6,0,0,1,.75,2.22,1.66,1.66,0,0,1-2.2.75,19.1,19.1,0,0,0-8.21-1.82c-3.36,0-6.72,0-10.07,0H78.8V65q0,11.24,0,22.46c0,1.16.17,2.91-1.13,3.42a1.75,1.75,0,0,1-2.23-1.26c0-.1-.06-.2-.08-.3a8,8,0,0,1-.15-1.55c-.19-7.73-.09-15.42,0-23.15,0-1.44-.09-3.41,1.83-3.61h0C77.78,60.89,81.15,60.87,90.11,61Z"/>
                    <Path fill={color}  d="M99.79,99.44a21.24,21.24,0,0,0,4-3.47,18.44,18.44,0,0,0,4.29-8.29,19.06,19.06,0,0,0-6.41-19,1.75,1.75,0,0,1-.51-2.37,1.53,1.53,0,0,1,2.21-.44,31.63,31.63,0,0,1,3,2.87,20.87,20.87,0,0,1,3.89,6.37,24.26,24.26,0,0,1,1.55,9.58c-.19,6.27-3.26,12.35-9.38,16.85a8.81,8.81,0,0,1-1,.69,1.56,1.56,0,0,1-2.15-.48A1.66,1.66,0,0,1,99.79,99.44Z"/>
                    <Path fill={color}  d="M96.88,103.88a1.81,1.81,0,0,1-.6.71,2.23,2.23,0,0,1-.77.29c-1.26.24-2.52.49-3.79.68a1.54,1.54,0,0,1-.78-.08A1.65,1.65,0,0,1,90,104a1.77,1.77,0,0,1,1.48-1.68,22,22,0,0,1,3.54-.69,1.83,1.83,0,0,1,1.23.17A1.77,1.77,0,0,1,96.88,103.88Z"/>
                    <Path fill={color}  d="M75.47,94.9a1.67,1.67,0,0,1,1.58-1.76,1.69,1.69,0,0,1,1.73,1.76v6.93c0,.6,0,.6.62.6h7.07a1.67,1.67,0,0,1,1.49.65,1.62,1.62,0,0,1,.14,1.67,1.53,1.53,0,0,1-1.5,1H81.84c-1.52,0-3,0-4.57,0a1.7,1.7,0,0,1-1.8-1.81C75.51,100.9,75.5,97.9,75.47,94.9Z"/>
                    </AnimatedG>
                    
                    <AnimatedG style={{...this.props.style, opacity:pulsate.c}}>
                    <Path fill={color}  d="M117,82.56a1.24,1.24,0,0,1-1.5.52,1.79,1.79,0,0,1-.77-1.17c-.78-2.4-1.3-4.87-2.17-7.24a23.78,23.78,0,0,0-3.64-6.48,24.47,24.47,0,0,0-7.4-6.33,23.9,23.9,0,0,0-7.1-2.62,27.47,27.47,0,0,0-5.5-.51c-.83,0-1.09,0-8,0H73.31l-.06,6.42a1.75,1.75,0,0,1-.69,1.43,1.73,1.73,0,0,1-1.55.18,1.6,1.6,0,0,1-1-1.44q0-4.11,0-8.22a1.65,1.65,0,0,1,1.54-1.62c.29,0,.58,0,.88,0,5.92,0,11.85,0,17.78,0a26.53,26.53,0,0,1,12.55,3.28A27.65,27.65,0,0,1,113.48,69.1a30.23,30.23,0,0,1,2.5,5.53,28.65,28.65,0,0,1,.92,3,13.85,13.85,0,0,1,.44,3.27A3,3,0,0,1,117,82.56Z"/>
                    <Path fill={color}  d="M115,90.14a1.58,1.58,0,0,1-1.31-1.73c.09-.74.21-1.49.36-2.22a1.59,1.59,0,0,1,1.81-1.13,1.77,1.77,0,0,1,1.34,2c-.09.48-.2,1.29-.4,2.08A1.56,1.56,0,0,1,115,90.14Z"/>
                    <Path fill={color}  d="M71.91,111.21A1.67,1.67,0,0,1,70,110a2,2,0,0,1-.08-.59V72a1.64,1.64,0,0,1,3.18-.67,2.44,2.44,0,0,1,.1.81v35.8l.67,0H89.75a23.8,23.8,0,0,0,7.39-1.22,24.54,24.54,0,0,0,11.17-7.5,25.65,25.65,0,0,0,3.74-5.94,1.56,1.56,0,0,1,2.12-.78,1.65,1.65,0,0,1,.85,2.13,27.94,27.94,0,0,1-10.27,12.06,27,27,0,0,1-6.8,3.23,27.56,27.56,0,0,1-8.26,1.28C83.76,111.22,77.83,111.21,71.91,111.21Z"/>
                    </AnimatedG>

                    <AnimatedG style={{...this.props.style, opacity:pulsate.d}}>
                    <Path fill={color}  d="M67.72,80.47A1.61,1.61,0,0,1,65.45,82a1.4,1.4,0,0,1-.92-1.12,3.61,3.61,0,0,1-.07-.73V57.61a7.67,7.67,0,0,1,.93-4A6.87,6.87,0,0,1,71.28,50c1.4-.07,2.8,0,4.2,0a1.46,1.46,0,0,1,1.46,1.29A1.55,1.55,0,0,1,76.12,53a1.9,1.9,0,0,1-.75.15H71.81a3.94,3.94,0,0,0-4.1,4.09V68.74C67.71,72.65,67.69,76.56,67.72,80.47Z"/>
                    <Path fill={color}  d="M81.52,53.15h-.83v.08A7.82,7.82,0,0,1,79.12,53a1.53,1.53,0,0,1,.66-2.91c.59,0,1.17,0,1.75,0A1.41,1.41,0,0,1,83,51.61,1.46,1.46,0,0,1,81.52,53.15Z"/>
                    <Path fill={color}  d="M85.87,50c2.06,0,4.13,0,6.19.09a28.3,28.3,0,0,1,6.7,1.19,32.27,32.27,0,0,1,5.78,2.27A33.44,33.44,0,0,1,113,59.59a32.78,32.78,0,0,1,6.35,8.69,13.86,13.86,0,0,1,.61,1.29,1.57,1.57,0,0,1-.89,2.05,1.61,1.61,0,0,1-2.06-.69c-.79-1.42-1.54-2.86-2.4-4.24A27.16,27.16,0,0,0,109.7,61c-.59-.54-1.26-1.06-1.26-1.06s-1.19-1-2.4-1.76a33.71,33.71,0,0,0-6.62-3.28,30,30,0,0,0-6.64-1.5,64,64,0,0,0-6.64-.21,1.53,1.53,0,0,1-1.66-1.09A1.57,1.57,0,0,1,85.87,50Z"/>
                    <Path fill={color}  d="M121.53,92.93a33,33,0,0,1-11.72,17,33,33,0,0,1-18.63,6.76,1.54,1.54,0,0,1-1.6-.84,1.65,1.65,0,0,1,1.33-2.42c1.11-.12,2.23-.2,3.34-.37a27.35,27.35,0,0,0,3.12-.63,29.42,29.42,0,0,0,8.19-3.56,30,30,0,0,0,8.16-7.56,28.92,28.92,0,0,0,3.52-6.13,28.42,28.42,0,0,0,1-2.8,30.64,30.64,0,0,0,1-4.54,31.85,31.85,0,0,0,0-8.71,27.78,27.78,0,0,1-.63-3.21,1.91,1.91,0,0,1,.21-1.36,1.43,1.43,0,0,1,.49-.45,1.65,1.65,0,0,1,.74-.24c.68,0,1.24.71,1.42.94,1.9,2.5,1.33,9.37,1.33,9.37A37.73,37.73,0,0,1,121.53,92.93Z"/>
                    <Path fill={color}  d="M64.46,101.24c-.11-3.33,0-6.67,0-10A2.42,2.42,0,0,1,64.82,90a1.5,1.5,0,0,1,1.85-.5,1.77,1.77,0,0,1,1,1.53c0,6.19,0,12.38,0,18.56a3.82,3.82,0,0,0,1.47,3.05,3.93,3.93,0,0,0,2.57.86H84.4a1.57,1.57,0,0,1,1.7,1.12,1.65,1.65,0,0,1-1.33,2.09,4,4,0,0,1-.6,0c-4.08,0-8.16,0-12.24,0a7.18,7.18,0,0,1-6-2.84,8.08,8.08,0,0,1-1.46-4.57C64.15,105.46,64.57,104.67,64.46,101.24Z"/>
                    <Path fill={color}  d="M66.15,83.67c1,0,1.57.69,1.57,1.8a1.59,1.59,0,0,1-1.6,1.79,1.7,1.7,0,0,1-1.69-1.76A1.74,1.74,0,0,1,66.15,83.67Z"/>
                    </AnimatedG>

                    <AnimatedG >
                    <Path fill={color}  d="M58.85,94c0-12.24,0-24.48,0-36.71a12.52,12.52,0,0,1,6.4-11.24,12,12,0,0,1,6.25-1.7c3.2,0,6.4,0,9.6,0A1.75,1.75,0,0,1,83,46.16a1.55,1.55,0,0,1-1.46,1.5c-1.06,0-2.13,0-3.19,0-2.14,0-4.28,0-6.42,0A9.4,9.4,0,0,0,63.7,52a8.85,8.85,0,0,0-1.27,2.87,9,9,0,0,0-.24,2c-.07,9.72-.11,14.58,0,37.48a1.9,1.9,0,0,1-.28,1,1.75,1.75,0,0,1-.63.53,1.69,1.69,0,0,1-2.42-1.41C58.85,94.35,58.85,94.18,58.85,94Z"/>
                    <Path fill={color}  d="M127,94.07c-.25.89-.54,1.76-.87,2.63a1.63,1.63,0,0,1-2.24.82,1.61,1.61,0,0,1-.85-2c.49-1.66,1-3.31,1.41-5a31.34,31.34,0,0,0,.68-8.85,49.66,49.66,0,0,0-.65-5.4,35.3,35.3,0,0,0-1.4-5,35.81,35.81,0,0,0-27.26-23,38.68,38.68,0,0,0-7.21-.57,2.3,2.3,0,0,1-.94-.16,1.58,1.58,0,0,1-.83-1.86,1.7,1.7,0,0,1,1.67-1.27,37.6,37.6,0,0,1,3.83.13c1.83.19,3.67.42,5.47.78A35.19,35.19,0,0,1,107,48.51a39.26,39.26,0,0,1,17.72,18.1c.11.21.62,1.3,1.2,2.78.32.82.57,1.52.76,2.07s.25,1,.39,1.44a34.72,34.72,0,0,1,1.28,6.92,39.43,39.43,0,0,1-.15,8.34A41,41,0,0,1,127,94.07Z"/>
                    <Path fill={color}  d="M121.81,105.11a39.77,39.77,0,0,1-8.15,8.78,38.3,38.3,0,0,1-8,4.89,39,39,0,0,1-6.74,2.34,41,41,0,0,1-10.05,1.16c-7.21,0-12.19-.09-16.12,0-.18,0-.89,0-1.83,0a15.08,15.08,0,0,1-3.27-.43A9.43,9.43,0,0,1,64.33,120a13.61,13.61,0,0,1-4.39-5.38,13.91,13.91,0,0,1-1-5.58c0-1.19,0-2.37,0-3.54l0-1.15c0-.24,0-.47,0-.7,0-1,0-2,0-3a1.69,1.69,0,0,1,1.72-1.72,1.57,1.57,0,0,1,1.54,1.52c0,1.33,0,2.65,0,4,0,1.81,0,3.61,0,5.41a9.47,9.47,0,0,0,9.6,9.23q9.09,0,18.16,0a34.78,34.78,0,0,0,6.59-.7,36.14,36.14,0,0,0,11.06-4.2,37.7,37.7,0,0,0,5-3.48c1-1,2.12-2,3.06-3,1.23-1.41,2.36-2.91,3.51-4.38a1.58,1.58,0,0,1,2.25-.48A1.74,1.74,0,0,1,121.81,105.11Z"/>
                    </AnimatedG>

                    <AnimatedG>
                    <Path fill={color}  d="M41.45,98.24v1.49c0,3.4,0,6.79,0,10.19a1.82,1.82,0,0,1-.55,1.47,1.38,1.38,0,0,1-1.41.38,1.49,1.49,0,0,1-1.12-1.18,4.71,4.71,0,0,1-.06-.74q0-10.16,0-20.29c0-.2,0-.41,0-.61a1.5,1.5,0,0,1,1.57-1.34,1.61,1.61,0,0,1,1.54,1.47c0,.16,0,.34,0,.51Z"/>
                    <Path fill={color}  d="M41.46,83.16c0,.23,0,.46,0,.7a1.64,1.64,0,0,1-1.41,1.44,1.53,1.53,0,0,1-1.69-1.14,4.41,4.41,0,0,1,0-2A1.62,1.62,0,0,1,40,81a1.65,1.65,0,0,1,1.49,1.48c0,.23,0,.47,0,.7Z"/>
                    </AnimatedG>

                    <AnimatedG x="39.8" y ="96.25">
                    <AnimatedPath style={{transform: [{rotateX: spind}, {translateX: -39.8}, {translateY: -96.25},  ] }} fill={color}  d="M46.37,102.32a1.67,1.67,0,0,1-2.95-1.3c0-2.58,0-3.86,0-4.28,0-4.69,0-9.37,0-14.06a3.6,3.6,0,0,0-4.85-3.49,3.39,3.39,0,0,0-2.27,2.66,5.62,5.62,0,0,0-.1,1.16c0,1.72,0,3.44,0,5.17a1.75,1.75,0,0,1-.3,1.23,1.51,1.51,0,0,1-1.66.55,1.64,1.64,0,0,1-1.18-1.51c0-2.08,0-4.16,0-6.24a6.76,6.76,0,0,1,12.42-3.35,7,7,0,0,1,1.12,3.92q0,4.52,0,9v9.26A2.18,2.18,0,0,1,46.37,102.32Z"/>
                    <AnimatedPath style={{transform: [{rotateX: spind}, {translateX: -39.8}, {translateY: -96.25},  ] }} fill={color}  d="M33.09,102.05V93.39a1.57,1.57,0,0,1,3.13-.26c0,.45,0,.9,0,1.35v15.4a3.94,3.94,0,0,0,.79,2.61,3.61,3.61,0,0,0,6.18-.91,3.36,3.36,0,0,0,.24-1.4c0-1.38,0-2.77,0-4.15a1.69,1.69,0,0,1,.4-1.16,1.49,1.49,0,0,1,1.68-.47,1.55,1.55,0,0,1,1.12,1.49q0,1.52,0,3a21.61,21.61,0,0,1-.12,2.41A6.74,6.74,0,0,1,39.36,117a6.85,6.85,0,0,1-6.28-6.88C33.1,107.44,33.09,104.74,33.09,102.05Z"/>
                    </AnimatedG>

                    <AnimatedG x="39.8" y ="96.25">
                    <AnimatedPath style={{transform: [{rotateX: spinc}, {translateX: -39.8}, {translateY: -96.25},  ] }} fill={color}  d="M45.64,73.43a1.32,1.32,0,0,1-.36.58,1.59,1.59,0,0,1-1.54.3,13.36,13.36,0,0,0-1.83-.44,10,10,0,0,0-3.42-.08A8.9,8.9,0,0,0,31,82.52c0,1.8,0,3.6,0,5.4h0c0,1.92,0,3.84,0,5.77a2.24,2.24,0,0,1-.23,1,1.46,1.46,0,0,1-1.74.62A1.51,1.51,0,0,1,27.91,94c0-.36,0-.71,0-1.07,0-1.44,0-2.88,0-4.33,0-1.81,0-1.74,0-3.46s0-2.46,0-2.65a11.71,11.71,0,0,1,6.68-10.64,10.48,10.48,0,0,1,1.81-.75,11.79,11.79,0,0,1,8.13.47,2,2,0,0,1,.87.7A1.43,1.43,0,0,1,45.64,73.43Z"/>
                    <AnimatedPath style={{transform: [{rotateX: spinc}, {translateX: -39.8}, {translateY: -96.25},  ] }} fill={color}  d="M51.86,93.87q0,6.13,0,12.25a2.32,2.32,0,0,1-.19,1,1.48,1.48,0,0,1-1.7.74,1.59,1.59,0,0,1-1.24-1.59V94.61c0-4,0-8,0-12.06a8.57,8.57,0,0,0-2.34-6,1.58,1.58,0,0,1-.15-2.28,1.55,1.55,0,0,1,2.27-.1A11.47,11.47,0,0,1,51,77.94a12.41,12.41,0,0,1,.91,5C51.83,86.61,51.86,90.24,51.86,93.87Z"/>
                    <AnimatedPath style={{transform: [{rotateX: spinc}, {translateX: -39.8}, {translateY: -96.25},  ] }} fill={color}  d="M51.44,113.33A11.85,11.85,0,0,1,45.25,121a11.45,11.45,0,0,1-6.07,1.26,11.74,11.74,0,0,1-8.45-4.2,17.59,17.59,0,0,1-1.86-3c-.16-.32-.28-.63-.28-.63s-.12-.37-.23-.75a13.8,13.8,0,0,1-.49-4c0-3.46,0-6.92,0-10.37a1.56,1.56,0,0,1,.72-1.47A1.54,1.54,0,0,1,31,99a5.3,5.3,0,0,1,0,.69v10.2a9.43,9.43,0,0,0,1,4.36,9,9,0,0,0,4.07,4,8.4,8.4,0,0,0,5.07.8,8.73,8.73,0,0,0,6-3.64,9,9,0,0,0,1.65-4.48,1.44,1.44,0,0,1,1.55-1.38,1.5,1.5,0,0,1,1.53,1.54A11.37,11.37,0,0,1,51.44,113.33Z"/>
                    </AnimatedG>

                    <Path fill={color}  d="M125.73,58.81a1.67,1.67,0,1,1-1.67,1.67A1.67,1.67,0,0,1,125.73,58.81Z"/>
                    
                    
                    <Path fill={color}  d="M64.35,99.17s0,0,0,0,0,0,0-.06l0,.06Z"/>
                    
                    
                    
                    
                    <Path fill={color}  d="M78.23,59.1v0h0Z"/>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    <Path fill={color}  d="M108,59.88l0-.07h0Z"/>
                    <Path fill={color}  d="M108.5,61.12l.08,0v0h-.07Z"/>
                    
                   <Dot fill={color} />
                    <Path fill={color}  d="M38.29,56.22a1.58,1.58,0,1,1,3.16,0,1.58,1.58,0,1,1-3.16,0Z"/>
                    <Path fill={color}  d="M26.24,66.16a1.59,1.59,0,0,1,3.17,0,1.59,1.59,0,0,1-3.17,0Z"/>
                    <Path fill={color}  d="M32.12,125.82a1.58,1.58,0,0,1,0-3.16,1.53,1.53,0,0,1,1.57,1.59A1.55,1.55,0,0,1,32.12,125.82Z"/>
                    
                    
                    <Path fill={color}  d="M54.36,119.29a1.62,1.62,0,1,1,.17-3.23A1.61,1.61,0,0,1,56,117.44,1.66,1.66,0,0,1,54.36,119.29Z"/>
                    <Path fill={color}  d="M55.12,104.21a1.56,1.56,0,0,1-1.55-1.58,1.57,1.57,0,1,1,1.55,1.58Z"/>
                    <Path fill={color}  d="M55.91,60.47a1.65,1.65,0,1,1,1.63-1.64A1.63,1.63,0,0,1,55.91,60.47Z"/>
                    
                    <Path fill={color}  d="M71.57,127.26A1.49,1.49,0,0,1,70,125.72a1.63,1.63,0,0,1,1.61-1.56,1.5,1.5,0,0,1,1.48,1.59A1.36,1.36,0,0,1,71.57,127.26Z"/>
                    
                    
                    
                    <Path fill={color}  d="M130,97.51a1.71,1.71,0,0,1-1.68-1.7,1.67,1.67,0,0,1,3.34,0A1.72,1.72,0,0,1,130,97.51Z"/>
                </G>
            </G>
        </Svg>
        </Animated.View>
        )
    }
}
