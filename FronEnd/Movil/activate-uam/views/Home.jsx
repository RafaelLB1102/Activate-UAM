import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { convertDate, dataExample } from '../data/data';
import { LoadingPage } from './LoadingPage';
import { StatusBar } from 'expo-status-bar';
import { Navbar } from '../components/Navbar';
import { EventCard } from '../components/EventCard';
import { Footer } from '../components/Footer';
import { styles } from '../theme/Home';

export const Home = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dataExample.map(( item ) => {
        item.date = convertDate( item.date );
      })

      setData( dataExample );
      setLoading( false );
    }, 2000);
  }, [])

  if ( loading ) {
    return (
      <LoadingPage title={'Eventos'} />
    )
  } 

  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <Navbar link={'/webinar'} />
      <View style={ styles.containerHome }>
        <Text style={ styles.title }>Eventos</Text>   
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
      </View>
      <Footer />
    </View>
  )
}
