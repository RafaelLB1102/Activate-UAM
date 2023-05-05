import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native'
import { Navbar } from '../components/Navbar';
import { styles } from '../theme/Webinar';
import { dataExample2 } from '../data/data';
import LottieView from 'lottie-react-native';
import { WebinarCard } from '../components/WebinarCard';
import { StatusBar } from 'expo-status-bar';

export const Webinar = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData( dataExample2 );
      setLoading( false );
    }, 3000);
  }, [])


  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <Navbar link={'/'}/>
      <View style={ styles.containerHome }>
        <Text style={ styles.title }>Webinars</Text>
        {
          loading 
            ? (
              <LottieView
                style={ styles.loading }
                source={require('../assets/animation/9619-loading-dots-in-yellow.json')} 
                autoPlay 
                loop 
              />
            )
            : (
              <ScrollView
                showsHorizontalScrollIndicator={ false }
                showsVerticalScrollIndicator={ false }
              >
                <View style={ styles.containerEventCard }>
                  {
                    data.map(( item, index ) => {
                      return <WebinarCard key={ index } data={ item } />
                    })
                  }
                </View>
              </ScrollView>
            )
        }
      </View>
    </View>
  )
}
