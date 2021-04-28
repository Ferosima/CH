import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: colors.blueDark,
    paddingVertical: 0,
  },
  subtitle: {
    color: colors.blueDark,
    paddingBottom: 3,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
  },
  text: {
    includeFontPadding: false,
  },
});
