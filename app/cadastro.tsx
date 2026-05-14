import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './css/style';
import { Image } from 'react-native';
import FormField from './components/FormField';
import Button from './components/Button'
import Info from './components/Info';
import Back from './components/Back';
import Buttonlink from './components/Buttonlink';

export default function Cadastro() {
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
        <FormField placeholder={'Insira seu nome de usuário'} label={'Nome de usuário'} secure={false}></FormField>
      </View>
      
      <View>
        <Back></Back>
      </View>

      </View>

      <View>
      <Buttonlink text={'Criar conta'} href={'/login'}/>
      </View>   
      
      <StatusBar style="auto" />
    </View>
  );
}
