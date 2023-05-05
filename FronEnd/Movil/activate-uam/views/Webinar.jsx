import { View, Text } from 'react-native'
import { Navbar } from '../components/Navbar';
import LottieView from 'lottie-react-native';
import { styles } from '../theme/Webinar';

export const Webinar = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      /* setData( dataExample ); */
      setLoading( false );
    }, 2000);
  }, [])


  return (
    <View style={ styles.container }>
      <Navbar />
      <View style={ styles.containerHome }>
        <Text style={ styles.title }>Eventos</Text>
        {
          loading 
            ? (
              <LottieView
                style={ styles.loading }
                source={require('../assets/animation/9619-loading-dots-in-yellow.json')} 
                autoPlay 
                loop 
              />
            )
            : (
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
            )
        }
      </View>
    </View>
  )
}
