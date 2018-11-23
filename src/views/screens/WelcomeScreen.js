import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Button from '../../components/buttons/AuthButons'
import Logo from '../../components/logo/Logo'
import { TextWithLetterSpacing } from '../../components/TextWithLetterSpacing'

class WelcomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoSection}>
                    <Logo />
                    <View style={styles.logoText}>
                        <TextWithLetterSpacing spacing={4} textStyle={styles.logoText}>IDentifyNG</TextWithLetterSpacing>
                        <View style={styles.horizontalRule}></View>
                    </View>
                </View>
            </View>
        )
    }
}

export default WelcomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoSection: {
        alignItems: "center",
    },
    logoText: {
        alignItems: 'center',
        marginTop: 10,
        fontSize: 21,
        fontFamily: 'Tahoma',
        fontWeight: 'normal',
        color: "#097a34",
    },
    horizontalRule: {
        width: 70,
        borderBottomWidth: 0.5,
        marginTop: 2,
        marginRight: 10,
        borderColor: "#097a34",
    }
})