import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ctnTitle: {
    backgroundColor: colors.white,
  },
  sectionRelated: {
    marginVertical: 16,
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
