import { Text, View } from "react-native";
import styles from "../css/style";
import React from "react";
import { Link } from "expo-router";

type buttonProps={children: React.ReactNode;}

export default function Button(props: buttonProps){
    return(
    <View style={styles.info}>
        <Link href={''} style={{color: '#820f82'}}>Esqueçeu a senha?</Link>
    </View>
    )
}