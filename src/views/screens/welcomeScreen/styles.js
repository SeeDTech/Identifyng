import { StyleSheet } from 'react-native'
import {BaseColor} from '../../../styles/theme/color'
  
 const welcome = StyleSheet.create({   
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoSection: {
        marginTop:40,
        alignItems: "center",
    },
    buttonSection:{
    marginTop:'30%'
    },
    logoText: {
        alignItems: 'center',
        marginTop: 10,
        fontSize: 21,
        fontFamily: 'Tahoma',
        fontWeight: 'normal',
        color: BaseColor.dark,
    },
    logoRule: {
        width: 70,
        borderBottomWidth: 0.5,
        marginTop: 2,
        marginRight: 10,
        borderColor: BaseColor.dark,
    },
    footerSection:{
        marginBottom:'5%'
    },
    footerText:{
        fontSize:11,
        color:BaseColor.dark
    },
 })
 export default welcome