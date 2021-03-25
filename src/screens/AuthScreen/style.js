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
    fontFamily: 'Nunito-Bold',
    // fontWeight: 'bold',
    fontSize: 45,
    justifyContent: 'flex-start',
    color: colors.dark,
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
