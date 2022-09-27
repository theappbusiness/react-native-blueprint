import {StyleSheet} from 'react-native';
import {stylesApp} from 'styles/app.styles';
import {colors} from 'styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ctnTitle: {
    backgroundColor: colors.white,
  },
  sectionCard: {
    ...stylesApp.cardShadow,
    width: '100%',
    backgroundColor: colors.white,
    marginVertical: 8,
    paddingTop: 16,
    alignSelf: 'center',
  },
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
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 16,
    marginTop: 16,
  },
  txtSubtitle: {
    fontSize: 14,
    color: colors.darkGray,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
});
