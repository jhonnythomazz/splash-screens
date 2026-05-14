import { View } from "react-native";
import styles from "../css/style";
import { Link } from "expo-router";
import Button from "./Button";

type ButtonAreaProps = {
  text: string;
  href?: string;
};

export default function ButtonArea({ text, href = "" }: ButtonAreaProps) {
  return (
    <View style={styles.button}>
      <Link href={href}>
        <Button>{text}</Button>
      </Link>
    </View>
  );
}