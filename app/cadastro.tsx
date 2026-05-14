import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import styles from './css/style';
import { Image } from 'react-native';
import FormField from './components/FormField';
import Button from './components/Button'

export default function Login() {
  return (
    <View style={styles.container}>

      <Image source={require("../assets/sesisenai.png")}
      style={styles.image}
      />

      <View style={styles.general}>

      <View>
        <FormField placeholder={'Insira seu email'} label={'Login'} secure={false}></FormField>
      </View>
    
      <View> 
        <FormField placeholder={'Insira sua senha'} label={'Senha'} secure={true}></FormField>
      </View>

      <View> 
        <FormField placeholder={'Insira seu username'} label={'Nome de usuário'} secure={false}></FormField>
      </View>
     
      </View>
      <View>
        
         <Button>
            <a href={'/login'}>Cadastrar</a>
        </Button>
      </View>   
      
      <StatusBar style="auto" />
    </View>
  );
}
