import { StyleSheet } from 'react-native'
import { BaseColor } from '../../../../styles/theme/color';

const bvn = StyleSheet.create({
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
        fontSize: 18,
        color: BaseColor.grey
    },
    item: {
        marginEnd: 10,
        borderBottomColor: BaseColor.dark,
        marginTop: 40, width: '90%',
        alignContent: "center"
    },
    label: {
        color: BaseColor.grey,
        fontFamily: 'Ubuntu-Regular'
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
        color: BaseColor.dark
    }
})

export default bvn;