import { View, Text, Animated, Easing } from 'react-native';
import { styles } from '../theme/Home';
import { Navbar } from '../components/Navbar';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';

export const LoadingPage = ({ title }) => {
  const animationProgress = useRef(new Animated.Value(0))

  useEffect( () => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])
  

  return (
    <View style={ styles.container }>
      <StatusBar
       style="auto" />
      <Navbar />
      <View style={ styles.containerHome }>
        <Text style={ styles.title }>{ title }</Text>
        
        <LottieView 
          style={ styles.loading }
          source={require('../assets/animation/98288-loading.json')} 
          progress={animationProgress.current}
        />
      </View>
      <Footer />
    </View>
  )
}
