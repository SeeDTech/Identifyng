import mainStyle from '../styles/mainStyle'
import { View, Text, TextInput, Animated } from 'react-native'
import { BaseColor } from '../styles/theme/color'
import React, { Component } from 'react'

class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };


  componentWillMount=()=> {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused ||this.props.value !== '') ? 1 : 0,
      duration: 200,

    }).start();
  }
  
  render() {
    const { label, ...props } = this.props;
    const {isFocused} =this.state;
    const labelStyle = {
      position: 'absolute',
      left: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0]
      }),
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0]
      }),
      fontSize:this._animatedIsFocused.interpolate({
        inputRange:[0,1],
        outputRange:[20,12]
      }),
      color:this._animatedIsFocused.interpolate({
        inputRange:[0,1],
        outputRange:['#9e9e9e','#424242'],
      })
    };
    const InputBorder = {
      borderBottomWidth: isFocused? 1.5:.5,
      borderBottomColor:isFocused?BaseColor.dark:'#9e9e9e',
    };
    return (
      <View style={{ paddingTop: 10 }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={[mainStyle.textInput, InputBorder]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}
export default FloatingLabelInput