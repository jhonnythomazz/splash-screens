import { Text, View } from "react-native";
import styles from "../css/style";
import React from "react";
import { Link } from "expo-router";

type buttonProps={children: React.ReactNode;}

export default function Button(props: buttonProps){
    return(
        <View style={styles.button}>
            <Link href={''} style={styles.btntext}>Entrar</Link>
        </View>
    )
}
