import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    marginVertical: 2,
  },
  inputContainerStyle: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.dark,
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
  required: {
    color: 'red',
  },
  errorStyle: {
    fontFamily: 'Nunito-Light',
    fontSize: 12,
    color: 'red',
    marginHorizontal: 0,
  },
});
