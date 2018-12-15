import { StyleSheet } from 'react-native'
import {BaseColor} from '../../../../styles/theme/color'
  
const requirement = StyleSheet.create({
    base:{
        flex:1,
        flexDirection:'column',
        alignItems: 'stretch',
        backgroundColor:BaseColor.light,
        height:'100%',
        
    },
    upperLayer:{
        width:'100%',
        height:200,
        backgroundColor:BaseColor.dark,
        alignItems:'center',
       

    },
    logoCircle:{
        position:'absolute',
        top:115,
        alignItems:'center',
        width:170,
        height:170,
        backgroundColor:BaseColor.light,
       padding:10,
        borderColor:BaseColor.dark,
        borderRadius:170,
    },
    header:{
        flexDirection:'column',
        alignSelf:'center',
        alignItems:'center',
        marginTop:'22%',
        paddingBottom:5
        },
    HeaderTitle:{
        fontSize:27,
        color:BaseColor.dark,
        fontFamily:'HurmeGeometricSans1 Bold',
        fontWeight: 'normal'
    },
    logoSection: {
        marginTop:20,
        alignItems: "center"
    },
    card:{
        height:270,
        borderRadius:5,
        borderWidth:2,
        borderColor: '#f1f1f1',
        width:240,
        backgroundColor:'#fff',
        paddingTop:30,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:20,
        
    },
    cardHeader:{
        flex:0,
        alignItems:"center",
        },
        ListSection:{
            marginTop:20
        },
    steps:{
        
        flexDirection:'row',
        marginTop:10,
        
    },

    items:{
        marginLeft:'5%',
        alignItems:'center'
    },
    
    StepContainer:{
        flex:1,
        marginLeft:10,
    },
    textSpace:{
        
        alignContent:'center',
        fontSize:20,
        color:BaseColor.base,
        opacity:.8,
        fontFamily:'HurmeGeometricSans1 Bold',
    },
    StepText:{
        fontSize:15,
        color:BaseColor.grey,
        fontFamily:'Ubuntu-Light'
    }
})

export default requirement