import { ScrollView, Text, View } from 'react-native';
import { Navbar } from '../components/Navbar';
import { styles } from '../theme/Home';
import { EventCard } from '../components/EventCard';
import { useEffect, useState } from 'react';
import { dataExample } from '../data/data';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

export const Home = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData( dataExample );
      setLoading( false );
    }, 3000);
  }, [])

  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <Navbar link={'/webinar'} />
      <View style={ styles.containerHome }>
        <Text style={ styles.title }>Eventos</Text>
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
                      return <EventCard key={ index } data={ item } />
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
