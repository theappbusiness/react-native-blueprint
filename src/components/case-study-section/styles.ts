import {StyleSheet} from 'react-native';
import {stylesApp} from 'styles/app.styles';
import {colors} from 'styles/colors';

export const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  sectionBody: {
    fontSize: 16,
    color: colors.black,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  sectionCard: {
    ...stylesApp.cardShadow,
    width: '100%',
    backgroundColor: colors.white,
    marginVertical: 8,
    paddingTop: 16,
    alignSelf: 'center',
  },
});
