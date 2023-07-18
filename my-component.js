import react from "react";
import {View, Text, StyleSheet } from "react-native";

export default function MyComponent(){
    return(
        <View style={styles.container}>
        <Text style={styles.textTitle}>Hello My Component</Text>
        <Text style={styles.textPara}>PLAP PLAP PLAP GET PREGNANT GET PREGNANT GET PREGNANT</Text>
        <Text style={{color:'red', fontWeight:bold}}>Contact React Native</Text>b
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop:30,
        padding:20,
        backgroundColor:'red',
    },
    textTitle:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
        marginTop:15
    },
    textPara:{
        fontSize:16,
    }
})
