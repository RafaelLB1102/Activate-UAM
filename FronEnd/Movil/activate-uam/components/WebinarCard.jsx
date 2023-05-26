import { View, Text, Linking } from 'react-native';
import { styles } from '../theme/WebinarCard';

export const WebinarCard = ({ data }) => {
  const { name, start_time, speakers, url } = data;

  const speakersList = speakers.map(( item, index ) => {
    return item.name;
  });


  return (
    <View style={ styles.card }>
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.subtitle }>Hora de inicio: { start_time }</Text>
      <Text style={ styles.subtitle }>Invitados: { speakersList.join(', ') }</Text>
      <Text 
        style={ styles.link }
        onPress={ () => Linking.openURL(url) }
      >
        { url }
      </Text>
    </View>
  )
}
