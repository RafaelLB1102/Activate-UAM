import { Image, SafeAreaView, View } from 'react-native'
import { styles } from '../theme/Navbar'
import { AntDesign } from '@expo/vector-icons'; 

export const Navbar = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.containerNav }>
        <View style={ styles.backRow }>
          <AntDesign name="left" size={20} color="#fff" />
        </View> 
        <View>
          <Image source={ require('../assets/img/Logos_UAM-09.png') } style={ styles.logoImg } />
        </View>
      </View>
    </SafeAreaView>
  )
}
