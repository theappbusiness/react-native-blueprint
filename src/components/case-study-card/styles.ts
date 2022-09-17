import {StyleSheet} from 'react-native';
import {stylesApp} from 'styles/app.styles';
import {colors} from 'styles/colors';

export const styles = StyleSheet.create({
  card: {
    ...stylesApp.cardShadow,
    width: '100%',
    backgroundColor: colors.white,
    paddingBottom: 16,
    alignSelf: 'center',
    marginBottom: 16,
  },
  heroImage: {
    height: 140,
    width: '100%',
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 16,
    marginTop: 16,
  },
  txtTeaser: {
    marginHorizontal: 16,
    marginTop: 4,
    color: colors.darkGray,
  },
});
