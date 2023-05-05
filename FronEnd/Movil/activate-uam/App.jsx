import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './views/Home';
import { styles } from './theme/App';
import { useFonts, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';
import LottieView from 'lottie-react-native';
import { useEffect, useState } from 'react';

export default function App () {
  let [fontsLoaded] = useFonts({
    FiraSans_400Regular
  });

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  })

  if (!fontsLoaded) return null;

  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      {
        loading ? <LottieView source={require('./assets/animation/9619-loading-dots-in-yellow.json')} autoPlay loop /> : <Home />
      }
    </View>
  );
}


const MyStyles = StyleSheet.create({})