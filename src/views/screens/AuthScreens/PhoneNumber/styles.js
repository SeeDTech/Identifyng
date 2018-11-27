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
    logoSection:{
        marginTop:30,
    },
    inputSection:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        paddingBottom: 20,
        width:300
    },
    inputs: {
       flex:1,
        fontSize:18,
        fontFamily:'sans-serif-condensed',
        height: 45,
        marginBottom: 20,
        borderColor: BaseColor.dark, 
        borderBottomWidth:.5,
        color: BaseColor.dark,
        paddingHorizontal: 10,
    }
})
export default phonenumber