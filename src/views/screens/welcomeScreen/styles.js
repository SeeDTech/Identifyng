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
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0)',
    },
    ImageBackground:{ resizeMode: 'cover', width: '100%', height: '100%' },
    baseContainer:{
        width:'100%',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: 'transparent',
        
    },
    formWrapper:{
        alignItems:"center",
        justifyContent:'center',
   },
   formSection:{
    width:'90%',
    flex: 1,
    alignContent:'center',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-evenly'
},
itemSection:{marginEnd:3,borderBottomColor:BaseColor.dark},
InputLabel:{ fontFamily: 'Ubuntu-Regular', marginBottom: 20 },
InputField:{marginTop:4, borderBottomColor: BaseColor.dark, fontFamily: "Ubuntu-Regular", color: BaseColor.base},
    logoSection: {
        marginTop:40,
        alignItems: "center",
    },
    formInputsSection:{
        flex:1,
        alignContent:'center',
        justifyContent:'space-between',
        marginTop:'5%',
    },
    buttonSection:{
        flex:1,
        alignContent:'center',
    justifyContent:'center',
    marginTop:'8%'
    },
    askForSignup:{
        marginBottom:25,
        textAlign:'center',
        fontFamily:'HurmeGeometricSans1',
        fontSize: 13,
        color:'#ccc',
    },
    btnStyle:{
        marginTop:30,
    },
    forgotPassword:{
        marginTop:15,
        textAlign:'center',
        alignContent:'center',
       fontFamily:'HurmeGeometricSans1',
       fontSize: 13,
       color:'#ccc',
      },
    logoText: {
        alignItems: 'center',
        marginTop: 10,
        fontSize: 21,
        fontFamily: 'Tahoma',
        fontWeight: 'normal',
        color: BaseColor.dark,
    }
 })
 export default welcome