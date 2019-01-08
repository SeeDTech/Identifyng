import { StyleSheet } from 'react-native'
import {BaseColor} from '../../styles/theme/color'

  
 const styles = StyleSheet.create({   
   container: {  
     justifyContent:'center',                     
    alignItems:"center",
    alignContent:"center",
     flexWrap: 'wrap'
   }
 })
  
 const buttons = StyleSheet.create({  
   primary: {                         
    width: 250,
    margin:10,
    height:55,
    backgroundColor:BaseColor.dark,
    justifyContent:'center',
    textAlign:'center',
    marginBottom:20,
    borderRadius:8,
    borderWidth:1,
    borderColor: BaseColor.dark,
    
   },
   inverse:{
    flexWrap: 'wrap',
    alignItems:'center',textAlign:'center', alignContent:"center",justifyContent:'center', backgroundColor:BaseColor.light,borderRadius:10,width:200
   },
   inverseText:{
    flex:1,textAlign:'center', justifyContent:'center', fontFamily:'Ubuntu-Regular',alignSelf:'center', color:BaseColor.dark,fontSize:20,alignItems:"center"
   },
   main:{alignItems:'center',textAlign:'center', alignContent:"center",justifyContent:'center', backgroundColor:BaseColor.dark,borderRadius:10,width:200},
   mainButtonText:{flex:1,textAlign:'center', justifyContent:'center', fontFamily:'Ubuntu-Regular',alignSelf:'center', color:BaseColor.light,fontSize:20,alignItems:"center"},
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
    borderColor: BaseColor.light,
    
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
  justifyContent:'center',
  marginBottom:'3%',
    width: 250,
    fontSize:20,
    height:55,
    color:BaseColor.dark,
},
circle:{
  // transform: [
  //       {translateX:130},
  //       {translateY:-10}
  //    ],
  width:55,
  height:55,
  borderRadius:55,
  backgroundColor:BaseColor.dark,
  marginBottom:20,
  alignItems:'center',
  alignSelf:'flex-end',
  marginEnd:'6%',
 }
})
  
 export { styles, buttons }           