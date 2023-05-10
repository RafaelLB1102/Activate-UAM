import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006DB0',
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  containerNav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backRow: {
    position: 'absolute',
    left: 10
  },
  logoImg: {
    width: 120,
    height: 48,
  }
});
