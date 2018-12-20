import { StyleSheet } from 'react-native'
import { BaseColor } from '../../../../styles/theme/color';

const account = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    logoSection: {
        marginTop: 20,
        alignItems: "center",
    },
    col6:{
        width:'42%',
        marginEnd:5,
        alignContent: 'center',
    },

    instruction: {
        flex: 0,
        alignContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    instructionText: {
         fontFamily: 'Ubuntu-Regular', 
         opacity: 0.7,
          fontSize: 18, 
         color: BaseColor.grey,
        },
    form: {
        flex: 1,
        alignContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    Item: {
        marginEnd: 10,
        borderBottomColor: BaseColor.dark,
         width: '85%',
    },
    itemInput:{
fontFamily:'Ubuntu-Regular',
color:BaseColor.dark,
fontSize:18,
    },
    label: {
        fontSize:14,
        color: BaseColor.grey,
        fontFamily: 'Ubuntu-Regular'
    },
    datePicker:{
        position:'relative',
        top:25,
        left:10,
        borderWidth:0,
    borderBottomColor: BaseColor.dark,
    }

})

export default account