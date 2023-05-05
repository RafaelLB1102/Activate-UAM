import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {Navbar} from '../components/Navbar'
import { styles } from '../theme/Home'
import { EventCard } from '../components/EventCard'
import { useEffect, useState } from 'react'
import { dataExample } from '../data/data'

export const Home = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    setData(dataExample);
  }, [])

  return (
    <View style={ styles.container }>
      <Navbar />
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
    </View>
  )
}
