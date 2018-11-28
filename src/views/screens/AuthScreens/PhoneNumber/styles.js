import { StyleSheet } from 'react-native'
import {BaseColor} from '../../../../styles/theme/color'
  
const phonenumber = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:BaseColor.light,
    },
    inputSection:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        flexDirection:'row',
        marginBottom:50,
        width:250
    },
    logoSection:{
        marginTop:30
    },
    icon:{
        paddingTop:15
        
    },
    inputs: {
        marginLeft:10,
        width:'100%',
        fontSize:18,
        fontFamily:'sans-serif-condensed',
        height: 28,
        marginBottom: 20,
        borderColor:BaseColor.dark, 
        borderBottomWidth:.5,
        color:BaseColor.dark,
        
    },
    btnSection:{
        flexDirection:'row',
        alignItems:'flex-end'
    }
})
export default phonenumber