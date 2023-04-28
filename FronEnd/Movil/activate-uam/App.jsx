import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './views/Home';
import { styles } from './theme/App';
import { useFonts, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';

export default function App () {
  let [fontsLoaded] = useFonts({
    FiraSans_400Regular
  });

  if (!fontsLoaded) return null;

  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}
