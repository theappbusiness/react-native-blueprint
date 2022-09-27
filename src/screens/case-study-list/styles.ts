import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textNoContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'center',
    marginTop: 32,
  },
});
