import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  active: {
    paddingHorizontal: 15,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: colors.main,
    borderBottomWidth: 1,
    borderColor: colors.main,
  },
  disable: {
    paddingHorizontal: 15,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: 'grey',
    borderBottomWidth: 0,
    borderColor: colors.main,
  },
});
