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
        alignSelf:'center',
        alignItems:'center',
        marginTop:'22%',
        paddingBottom:5
        },
    HeaderTitle:{
        fontSize:27,
        color:BaseColor.dark,
        fontFamily:'sans-serif-condensed',
        fontWeight: 'bold'
    },
    steps:{
        flex:1,
        flexDirection:'row',
        marginTop:'5%',
        height:200
    },
    items:{
        width:21,
        height:21,
        borderRadius:21,
        backgroundColor:BaseColor.dark,
        marginLeft:'10%',
        marginTop:4,
        alignItems:'center'
    },
    itemsText:{
        color:BaseColor.light,
        fontSize:14
    },
    StepContainer:{
        flex:1,
        marginLeft:25,
    },
    StepText:{
        fontSize:20,
        color:BaseColor.dark,
        fontFamily:'sans-serif-condensed'
    }
})

export default requirement