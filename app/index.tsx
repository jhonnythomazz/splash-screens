import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles  from './css/style';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <LottieView
        source={require("../assets/black rainbow cat.json")}
        style={{ width: "100%", height: "100%" }}
        autoPlay
        loop={false}
        onAnimationFinish={()=> router.navigate('login')}
        />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
