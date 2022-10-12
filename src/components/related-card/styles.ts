import {StyleSheet} from 'react-native';
import {stylesApp} from 'styles/app.styles';
import {colors} from 'styles/colors';

export const styles = StyleSheet.create({
  card: {
    ...stylesApp.cardShadow,
    width: '90%',
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  heroImage: {
    flex: 2,
    borderRadius: 8,
  },
  ctnTitle: {
    flex: 4,
    marginEnd: 8,
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  txtTeaser: {
    marginTop: 4,
    fontSize: 12,
    color: colors.darkGray,
  },
});
