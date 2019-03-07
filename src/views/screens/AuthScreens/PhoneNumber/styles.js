import { StyleSheet } from 'react-native'
import { BaseColor } from '../../../../styles/theme/color'

const phonenumber = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    errorMessage:{
        alignItems:"center",
        justifyContent:'center',
        textAlign:'center',
        fontSize:12,
        alignSelf:'center',
        fontFamily:'Ubuntu-Regular',
        color:BaseColor.red,
        backgroundColor:'#ffcdd2',
        width:'100%',
        marginTop:10,
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:2,
        borderRadius:10,
        },
    logoSection: {
        marginTop: 30,
        alignItems: "center",
    },
    icon: {
        paddingTop: 15

    },
    instruction: {
        flex: 0,
        alignContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    instructionText: { fontFamily: 'Ubuntu-Regular', opacity: 0.7, fontSize: 14 , color: BaseColor.grey },
    form: {
        flex: 0,
        alignContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputs: {
        marginLeft: 10,
        width: '100%',
        fontSize: 18,
        fontFamily: 'Ubuntu-Regular',
        height: 28,
        marginBottom: 20,
        borderColor: BaseColor.dark,
        borderBottomWidth: .5,
        color: BaseColor.dark,

    },
    item: {
        marginEnd: 10,
        borderColor: BaseColor.dark,
        marginTop: 40, width: '90%',
        alignContent: "center",
    },
    label: {
        marginStart:30,
        color: BaseColor.grey,
        fontFamily: 'Ubuntu-Regular'
    },
    itemInput: {
        marginStart:20,
        padding: 10,
        marginTop: 4,
        // border: "1px solid red",
        borderColor: BaseColor.dark,
        fontFamily: "Ubuntu-Regular",

        color: BaseColor.dark,

    },
    inputIcon:{
        position:"absolute",
        top:90,
        color:BaseColor.dark, 
        left:20
    },
    btnSection: {
        flex: 1, marginTop: '48%',
        alignSelf: "center",
    },
    btn: {
        width: 250,
        borderColor: BaseColor.dark,
        justifyContent: 'center'
    },
    btntext: {
        fontSize: 18,
        fontFamily: 'HurmeGeometricSans1 Bold',
        color: BaseColor.dark,
    }
})
export default phonenumber