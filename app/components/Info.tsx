import { Text, View } from "react-native";
import styles from "../css/style";
import React from "react";
import { Link } from "expo-router";



export default function Info(){
    return(
        <View style={styles.info}>
            <Link href={'/cadastro'} style={{color: '#820f82'}}>Cadastrar</Link>
            <Link href={'/forgotpasswd'} style={{color: '#820f82'}}>Esqueçeu a senha?</Link>
        </View>
    )
}
