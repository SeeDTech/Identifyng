import { StyleSheet } from 'react-native'
import { BaseColor } from '../../../styles/theme/color'
const DashboardStyle = StyleSheet.create({
    root: {
        flex:1,
        justifyContent: 'flex-start',
        backgroundColor: 'red'
        // alignContent:'center',
        // alignItems:'center',
    },
    closeWebView: {
        position:"absolute", 
        elevation:0,
        backgroundColor:"transparent", 
        top:0,
        right:0, 
        margin: 10,
    },
    backgroundImage: {
        resizeMode: 'cover', width: '100%', height: '100%'
    },
})

export default DashboardStyle