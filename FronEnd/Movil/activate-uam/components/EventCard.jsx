import { View, Text, Image } from 'react-native';
import { styles } from '../theme/EventCard';
import { LinearGradient } from 'expo-linear-gradient';

export const EventCard = ({ data }) => {
  const { name, category, event_date, place, start_time, end_time, image_url } = data;

  return (
    /* left to righ */
    <LinearGradient
      colors={['#007daf', '#4ba47b']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={ styles.card }
    >
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.subtitle }>Categoría: { category }</Text>
      <Text style={ styles.subtitle }>Fecha: { event_date }</Text>
      <Text style={ styles.subtitle }>Lugar: { place }</Text>
      <Text style={ styles.subtitle }>Hora: { start_time } - { end_time }</Text>

      {
        image_url === ''
        ? (
          <View style={ styles.containerImg }>
            <View style={ styles.image }>
              <Text>Imagen</Text>
            </View>
          </View>
        )
        : (
          <View style={ styles.containerImg }>
            <Image
              source={{ uri: image_url }}
              style={ styles.imageUrl }
            />
          </View>
        )
      }
    </LinearGradient>
  )
}
