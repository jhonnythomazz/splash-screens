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

      <View> 
      <Text style={{marginLeft: 10}}>Login</Text>
      <TextInput placeholder="Insira seu CPF" style={styles.input}/>
      </View>
    
      <View> 
      <Text style={{marginLeft: 10}}>Senha</Text>
      <TextInput placeholder="Insira sua senha" style={styles.input}/>
      </View>
     
      </View>

      <View style={styles.info}>
      <Text style={{color: '#820f82'}}>Cadastrar</Text>
      <Text style={{color: '#820f82'}}>Esqueçeu a senha?</Text>
      </View>

      <View style={styles.button}>
        <Text style={{fontSize: 15, color: 'white'}}>Entrar</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
