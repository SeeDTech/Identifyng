import { StyleSheet } from 'react-native'
import {BaseColor} from '../../../../styles/theme/color'
  
const phonenumber = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        backgroundColor: 'transparent',
    },
   
    logoSection:{
        marginTop:30,
        alignItems: "center",
    },
    icon:{
        paddingTop:15
        
    },
    inputs: {
        marginLeft:10,
        width:'100%',
        fontSize:18,
        fontFamily:'Ubuntu-Regular',
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