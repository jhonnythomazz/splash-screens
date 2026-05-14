import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../css/style";



export default function Info(){
    return(
        <View style={styles.goback}>
            <Link href={'/login'} style={{color: '#820f82'}}>Voltar</Link>
        </View>
    )
}
