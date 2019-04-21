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
        marginBottom:10,
        marginTop:0, 
        marginLeft:'auto',
        marginRight:'auto'
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
        width: 120,
        borderRadius:10,
        height: 120,
        marginLeft:"auto",
        marginRight: "auto",
        marginTop: 0,
        marginBottom: 10,
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
         color:"#ffffff" 
    }


})

export const InfoText = styled.Text`
color: ${props => props.isKey ? "#e9e9e9" : "#fff"};
font-size: ${props => props.isKey ? 11 : 15 };
margin-left: 2;
margin-right: 2;
`
// export const StyledText = styled.Text `
// `

