import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 40,
    justifyContent: 'flex-start',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  buttonDark: {
    backgroundColor: '#0245a3',
  },
  buttonDarkText: {
    color: 'white',
  },
});
