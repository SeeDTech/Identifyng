import { StyleSheet } from 'react-native';
import styled from 'styled-components/native'

export const CardStyle = StyleSheet.create({
    expandButton:{
        position:"absolute", 
        elevation:0,
        backgroundColor:"transparent", 
        bottom: 0,
        right:0, 
        margin: 10
    },
    avatar: {
        width: 120,
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


})

export const InfoText = styled.Text`
color: ${props => props.isKey ? "#e9e9e9" : "#fff"};
font-size: ${props => props.isKey ? 11 : 15 };
margin-left: 2;
margin-right: 2;
`

