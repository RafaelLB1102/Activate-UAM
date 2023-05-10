import { Image, SafeAreaView, View } from 'react-native'
import { styles } from '../theme/Navbar'
import { AntDesign } from '@expo/vector-icons'; 
import { Link } from 'react-router-native';

export const Navbar = ({ link }) => {
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.containerNav }>
        <View style={ styles.backRow }>
          <Link to={ link }>
            <AntDesign name="left" size={20} color="#fff" />
          </Link>
        </View> 
        <View>
          <Image source={ require('../assets/img/Logos_UAM-09.png') } style={ styles.logoImg } />
        </View>
      </View>
    </SafeAreaView>
  )
}
