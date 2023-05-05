import { View, Text } from 'react-native'
import { styles } from '../theme/WebinarCard'

export const WebinarCard = ({ data }) => {
  const { title, hour, guests, link } = data

  return (
    <View style={ styles.card }>
      <Text style={ styles.title }>{ title }</Text>
      <Text style={ styles.subtitle }>Hora: { hour }</Text>
      <Text style={ styles.subtitle }>Invitados: { guests.join(', ') }</Text>
      <Text style={ styles.link }>{ link }</Text>
    </View>
  )
}
