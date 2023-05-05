import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './views/Home';
import { styles } from './theme/App';
import { useFonts, FiraSans_400Regular } from '@expo-google-fonts/fira-sans';
import { useEffect, useState } from 'react';
import { Webinar } from './views/Webinar';
import { NativeRouter, Route, Routes } from 'react-router-native';

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
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webinar" element={<Webinar />} />
        </Routes>
      </NativeRouter>
    </View>
  );
}


const MyStyles = StyleSheet.create({})