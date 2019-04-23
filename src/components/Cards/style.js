import { StyleSheet } from 'react-native';
import styled from 'styled-components/native'

export const CardStyle = StyleSheet.create({
    expandButton:{
        position:"absolute", 
        elevation:0,
        backgroundColor:"transparent", 
        top: 55,
        right:0, 
        margin: 10,
        zIndex: 10,
    },
    qr:{
        marginBottom:50,
        marginTop:50, 
        marginLeft:'auto',
        marginRight:'auto',
        // position:"absolute", 
        // bottom: 50,
        // right: 0
    },
    closeWebView: {
        position:"absolute", 
        elevation:0,
        backgroundColor:"transparent", 
        top:0,
        right:0, 
        margin: 10,
    },
    avatar: {
        width: 140,
        borderRadius:10,
        height: 140,
        marginLeft:"auto",
        marginRight: "auto",
        marginTop: 0,
        marginBottom: 10,
    },
    logo: {
        width: 70,
        borderRadius:10,
        height: 70,
        marginLeft:"auto",
        marginTop: 0,
        marginBottom: 0,
    },
    logob: {
        width: 80,
        borderRadius:10,
        height: 50,
        marginLeft:"auto",
        marginTop: 10,
        marginBottom: 0,
    },

    row: {
        height: "auto",
        paddingBottom: 10,
        flex:0,
        alignItems: "center",
        justifyContent: "center"
        
    },
    rowb: {
        height: "auto",
        paddingBottom: 5,
        flex:0,
        alignItems: "center",
        justifyContent: "flex-start"
        
    },

    col: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },

    cardHeader : {
        margin:0,
        padding:0,
        color:"#ffffff",
        fontSize: 22
    },
    infoView : {
        width: "50%"
    },
    infoViewb : {
        width: "100%",
        flex:0,
        flexDirection:"row",
        alignItems: 'center'
    },
    infoContainer : {
        flexDirection: "row",
        // marginTop: 8,
        marginBottom: 16
    },
    infoContainerb : {
        flexDirection: "column",
        // marginTop: 8,
        marginBottom: 16
    }

})

export const InfoText = styled.Text`
color: ${props => props.isKey ? "#e9e9e9" : "#fff"};
font-size: ${props => props.isKey ? 13 : 17 };
margin-left: 2;
margin-right: 2;
/* align-self: center */
`
// export const StyledText = styled.Text `
// `

