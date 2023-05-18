import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native'
import { Navbar } from '../components/Navbar';
import { styles } from '../theme/Webinar';
import { dataExample2 } from '../data/data';
import { WebinarCard } from '../components/WebinarCard';
import { StatusBar } from 'expo-status-bar';
import { LoadingPage } from './LoadingPage';
import { Footer } from '../components/Footer';

export const Webinar = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData( dataExample2 );
      setLoading( false );
    }, 2000);
  }, [])


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
