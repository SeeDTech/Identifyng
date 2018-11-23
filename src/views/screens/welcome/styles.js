import { StyleSheet } from 'react-native'
  
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
        color: "#097a34",
    },
    logoRule: {
        width: 70,
        borderBottomWidth: 0.5,
        marginTop: 2,
        marginRight: 10,
        borderColor: "#097a34",
    },
    footerSection:{
        marginBottom:'5%'
    },
    footerText:{
        fontSize:11,
        color:'#097a34'
    },
 })
 export default welcome