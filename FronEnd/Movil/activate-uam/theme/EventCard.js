import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 400,
    backgroundColor: 'rgba(0, 105, 163, 0.8)',
    borderRadius: 8,
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    fontSize: 18,
    color: 'white'
  },
  containerImg: {
    marginTop: 20,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 5,
    /* Mientras */
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  }
});