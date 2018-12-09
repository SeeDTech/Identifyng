import { StyleSheet } from 'react-native'
import {BaseColor} from '../../styles/theme/color'

  
 const styles = StyleSheet.create({   
   container: {                       
    alignItems:"center",
    alignContent:"center",
     flexWrap: 'wrap'
   }
 })
  
 const buttons = StyleSheet.create({  
   
  secondary: {                         
    width: 250,
    margin:10,
    height:55,
    backgroundColor:BaseColor.light,
    justifyContent:'center',
    textAlign:'center',
    marginBottom:20,

    borderRadius:8,
    borderWidth:1,
    borderColor: BaseColor.dark,
    
   },
   whitetext:{
    fontSize: 18,
    color:'#fff',
    fontFamily:'HurmeGeometricSans1 Bold',
    textAlign:'center',
    alignContent:'center',
},
   transparent:{
    backgroundColor:'transparent',
    width: 250,
    height:55,
    color:BaseColor.dark,
    justifyContent:'center',
    textAlign:'center',
    marginBottom:20,
    borderRadius:8,
    borderWidth:1,
    borderColor: BaseColor.dark,
    justifyContent:"center",
   },
   greenText:{
    fontSize: 20,
    color:BaseColor.dark,
    textAlign:'center',
    fontFamily:'HurmeGeometricSans1 Bold',
    alignContent:'center'
},
noBorder:{
  marginBottom:'3%',
  margin:5,
  borderWidth:0,
  backgroundColor:'transparent',
    width: 250,
    fontSize:20,
    height:65,
    color:BaseColor.dark,
    
},
circle:{
  transform: [
        {translateX:130},
        {translateY:-10}
     ],
  width:60,
  height:60,
  borderRadius:60,
  backgroundColor:BaseColor.dark,
  marginBottom:20,
  alignItems:'center',


 }
})
  
 export { styles, buttons }           