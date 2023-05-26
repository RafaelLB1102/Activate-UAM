import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native'
import { Navbar } from '../components/Navbar';
import { styles } from '../theme/Webinar';
import { WebinarCard } from '../components/WebinarCard';
import { StatusBar } from 'expo-status-bar';
import { LoadingPage } from './LoadingPage';
import { Footer } from '../components/Footer';
import axios from 'axios';

export const Webinar = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, [])

  const getData = async () => {
    try {
      const { data } = await axios.get('http://192.168.130.220:9000/api/v1/webminars/all');

      setData( data );
      setLoading( false );
    } catch (error) {
      console.log(error);
    }
  }


  if ( loading ) {
    return (
      <LoadingPage title={'Webinars'} />
    )
  } 

  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <Navbar link={'/'}/>
      <View style={ styles.containerHome }>
        <Text style={ styles.title }>Webinars</Text>
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
      </View>
      <Footer />
    </View>
  )
}
