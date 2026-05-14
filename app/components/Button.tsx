import { Text, View } from "react-native";
import styles from "../css/style";
import React from "react";

type buttonProps={children: React.ReactNode;}

export default function Button(props: buttonProps){
    return(
        <View>
            <Text style={styles.btntext}>{props.children}</Text>
        </View>
    )
}
