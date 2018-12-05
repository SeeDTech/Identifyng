import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import mainStyle from '../../styles/mainStyle';

export default class BackgroundImageWhite extends Component {

    render() {
        return (
            <Image source={require('../logo/images/sample-log-in-page-bg.png')}
                  style={mainStyle.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}
