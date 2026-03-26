import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import styles from './css/style';
import { Image } from 'react-native';
export default function Login() {
  return (
    <View style={styles.container}>

      <Image source={require("../assets/sesisenai.png")}
      style={styles.image}
      />

      <View style={styles.general}>
      <Text>Login</Text>
      <TextInput placeholder="Insira seu CPF" style={styles.input}/>
      <Text>Senha</Text>
      <TextInput placeholder="Insira sua senha" style={styles.input}/>
      </View>
      <Text>Cadastrar</Text>
      <Text>Esqueçeu a senha?</Text>
      <StatusBar style="auto" />
    </View>
  );
}
