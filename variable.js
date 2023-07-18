import react from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Variable(){
    let x = 10;
    let y = 18.6543
    let z = -12
    const name = 'Poom'
    const tel = ''
    return(
        <View>
            <Text>แสดงค่าจากตัวแปร</Text>
            <Text>X = {x}</Text>
            <Text>Name = {name}</Text>
            <Text>Tel = {tel}</Text>
        </View>
    )
}