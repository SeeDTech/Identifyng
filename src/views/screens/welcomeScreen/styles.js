import { StyleSheet } from 'react-native'
import {BaseColor} from '../../../styles/theme/color'
  
 const welcome = StyleSheet.create({  
    
        backgroundImage: {
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover'
        },
    
    container: {
        flex: 1,
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0)',
    },
    logoSection: {
        marginTop:40,
        alignItems: "center",
    },
    formInputsSection:{
        marginTop:'5%',
    },
    buttonSection:{
    marginTop:'10%'
    },
    logoText: {
        alignItems: 'center',
        marginTop: 10,
        fontSize: 21,
        fontFamily: 'Tahoma',
        fontWeight: 'normal',
        color: BaseColor.dark,
    },
    
    footerSection:{
        marginBottom:'5%'
    },
    footerText:{
        fontSize:11,
        fontFamily:'Ubuntu-Regular',
        color:BaseColor.dark
    },
 })
 export default welcome