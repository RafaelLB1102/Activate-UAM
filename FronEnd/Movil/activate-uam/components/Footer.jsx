import { View, Text } from 'react-native';
import { styles } from '../theme/Footer';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { Link } from 'react-router-native';

export const Footer = () => {
  return (
    <View style={ styles.container }>
      <Link to="/webinar" >
        <Ionicons name="videocam" size={35} color="white" />
      </Link>

      <Link to="/">
        <MaterialIcons name="event" size={35} color="white" />
      </Link>
    </View>
  )
}
