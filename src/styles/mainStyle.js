import { StyleSheet } from 'react-native'
import { BaseColor } from './theme/color';

const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    
    textInput: {
        height: 43,
        
        fontSize: 20,
        paddingHorizontal: 5,
        width:350,
        marginLeft:10,
        color: BaseColor.dark,
        fontFamily:'Ubuntu-Regular',

    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
})

export default mainStyle