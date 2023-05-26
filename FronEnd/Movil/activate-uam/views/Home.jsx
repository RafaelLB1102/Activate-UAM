import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { convertDate } from '../data/data';
import { LoadingPage } from './LoadingPage';
import { StatusBar } from 'expo-status-bar';
import { Navbar } from '../components/Navbar';
import { EventCard } from '../components/EventCard';
import { Footer } from '../components/Footer';
import { styles } from '../theme/Home';
import axios from 'axios';

export const Home = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, [])

  const getData = async () => {
    try {
      const { data } = await axios.get('http://192.168.130.220:9000/api/v1/events/all');

      data.map(( item ) => {
        item.event_date = convertDate( item.event_date );
      })

      setData( data );
      setLoading( false );
    } catch (error) {
      console.log(error);
    }
  }

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
