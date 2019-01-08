import { StyleSheet } from 'react-native'


const forms = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    formSection:{
        width: '100%',
        flex: 0,
        alignContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
        marginBottom:250,
    },
    dynamicInput:{
        alignItems:'center',
    },
    button:{
    top:0,
    marginEnd:20,
    alignSelf: "flex-end",
    },
    shadowIOs: {   
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: 'rgba(255, 255, 255, 1)',
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    shadowAndroid:{
     elevation:1
    }

})


export default forms;