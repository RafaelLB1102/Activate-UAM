import { View, Text } from 'react-native'
import { styles } from '../theme/EventCard'

export const EventCard = ({ data }) => {
  const { title, category, date, place, hour } = data

  return (
    <View style={ styles.card }>
      <Text style={ styles.title }>{ title }</Text>
      <Text style={ styles.subtitle }>Categoría: { category }</Text>
      <Text style={ styles.subtitle }>Fecha: { date }</Text>
      <Text style={ styles.subtitle }>Lugar: { place }</Text>
      <Text style={ styles.subtitle }>Hora: { hour }</Text>

      {/* Simular imagen */}
      <View style={ styles.containerImg }>
        <View style={ styles.image }>
          <Text>Imagen</Text>
        </View>
      </View>
    </View>
  )
}
