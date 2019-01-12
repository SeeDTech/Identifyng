import { StyleSheet } from 'react-native'
import { BaseColor } from '../../../../styles/theme/color'

const otp = StyleSheet.create({
    form: {
        alignContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    instruction: {
        alignSelf: 'center',
        alignItems: "center",
        maxWidth: '80%'
    },
    instructionText: {
        fontFamily: 'Ubuntu-Regular',
        opacity: 0.7,
        fontSize: 14,
        color: BaseColor.grey
    },
    itemSection: {
        width: 40,
        justifyContent: 'center',
        alignItems: "center",

        borderBottomColor: BaseColor.dark,
        marginTop: 40,
        alignContent: "center",
    },

    itemInput: {
        flex: 0,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 5,
        borderTopLeftRadius: 5,
        borderWidth:0.4,
        borderColor:BaseColor.dark,
        borderTopRightRadius: 5,
        backgroundColor: 'rgba(50,120,50, 0.1)',
        alignContent: 'center',
        marginTop: 4,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderBottomColor: BaseColor.dark,
        fontFamily: "Ubuntu-Regular",
        fontSize: 30,
        color: BaseColor.base
    },
    buttonSection: {
        flex: 1,
        marginTop: '40%',
        alignSelf: "center"
    },
    button: {
        width: 250,
        borderColor: BaseColor.dark,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'HurmeGeometricSans1 Bold',
        color: BaseColor.dark,
    }
})

export default otp