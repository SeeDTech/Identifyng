import { StyleSheet } from 'react-native'
import {BaseColor} from '../../../../styles/theme/color'
  
const bar = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection: "row", 
        alignItems: 'center',
    },
    cirle:{
        alignItems: 'center', 
        width: 20, 
        height: 20, 
        borderRadius: 20, 
        borderWidth: 1, 
        backgroundColor: 'transparent', 
        justifyContent: 'center' 
    },
    text:{
        fontSize:12, 
        fontFamily:'Ubuntu-Regular',
        marginBottom:2,
    },

    line:{
        justifyContent: 'center', 
        borderTopWidth: 1, 
        marginTop: 0, 
        width: 25, 
        borderTopColor: BaseColor.grey,
    }
})
export default bar