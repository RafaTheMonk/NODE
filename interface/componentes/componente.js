import React from "react";
import { View, Text, StyleSheet} from "react-native";

const cartao = StyleSheet.create({
    card:{
        backgroundColor: "white",
        borderRadius: 12,
        color: "white",
        padding: 10,
        marginTop: 15,
        width: 250,
        alignItems: "center",
        gap: 10,
    }
    
    
})

export default function Component(){
    return(
        <View style={cartao.card}>
            <Text>Rodolfo Uber</Text>
            <Text>Tel: (71) 98184-3325</Text>
        </View>
    )
}