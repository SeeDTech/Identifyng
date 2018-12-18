import { StyleSheet } from 'react-native'
import { BaseColor } from '../../../../styles/theme/color'

const phonenumber = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },

    logoSection: {
        marginTop: 30,
        alignItems: "center",
    },
    icon: {
        paddingTop: 15

    },
    instruction: {
        flex: 0,
        alignContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    instructionText: { fontFamily: 'Ubuntu-Regular', opacity: 0.7, fontSize: 18, color: BaseColor.grey },
    form: {
        flex: 0,
        alignContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputs: {
        marginLeft: 10,
        width: '100%',
        fontSize: 18,
        fontFamily: 'Ubuntu-Regular',
        height: 28,
        marginBottom: 20,
        borderColor: BaseColor.dark,
        borderBottomWidth: .5,
        color: BaseColor.dark,

    },
    item: {
        marginEnd: 10,
        borderBottomColor: BaseColor.dark,
        marginTop: 40, width: '90%',
        alignContent: "center",
    },
    label: {
        color: BaseColor.grey,
        fontFamily: 'Ubuntu-Regular'
    },
    itemInput: {
        padding: 10,
        marginTop: 4,
        borderBottomColor: BaseColor.dark,
        fontFamily: "Ubuntu-Regular",
        color: BaseColor.base,
    },
    btnSection: {
        flex: 1, marginTop: '50%',
        alignSelf: "center",
    },
    btn: {
        width: 250,
        borderColor: BaseColor.dark,
        justifyContent: 'center'
    },
    btntext: {
        fontSize: 18,
        fontFamily: 'HurmeGeometricSans1 Bold',
        color: BaseColor.dark,
    }
})
export default phonenumber