import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const stylesApp = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'times',
  },
  cardShadow: {
    // shadow
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 3,
  },
});
