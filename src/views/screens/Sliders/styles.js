import { StyleSheet } from 'react-native'
import { BaseColor } from '../../../styles/theme/color';

  
 const slides = StyleSheet.create({  
    
        backgroundImage: {
            resizeMode: 'cover', width: '100%', height: '100%'
        },
        SlideTextSection:{
            flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        },
        slideoneSection:{
            alignItems:'center',
            alignContent:'center',
            position:'absolute',
            top:137,
            borderRadius:5,
            borderWidth:2,
            borderColor: '#f1f1f1',
            width:'60%',
            height:'40%',
            backgroundColor:'#fff',
            padding:10,
            marginBottom:40,

        },
        slideOneText:{
            color: '#424242',
            fontSize: 22,

            fontFamily:'Ubuntu-Regular',
            
        },
        slideTwoText:{
            color: '#656565',
            fontFamily:'Ubuntu-Regular',
            fontSize: 17,
            
          },
          activeDotStlye:{
            backgroundColor: '#fff'
          },
          dotstyle:{
              borderColor:"#fff",
          },
          slideThreeText:{
            color: '#434343',
            fontFamily:'Ubuntu-Regular',
            fontSize: 17,
          },
          buttonSection:{alignContent:"center",justifyContent:'center', position:"absolute",top:450, alignSelf:"center", flex:1},
          logoSection:{position:"absolute", top:20, alignSelf:"center", alignItems:"center"},
          logoText:{position:"absolute", top:25, opacity:.5,  fontFamily:'Ubuntu-Regular', color:BaseColor.grey, fontSize:18}
    })

    export default slides