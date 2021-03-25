import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.dark,
    marginHorizontal: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Nunito-Light',
    fontSize: 20,
  },
});
