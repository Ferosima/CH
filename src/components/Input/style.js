import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  inputContainerStyle: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.dark,
  },
  containerStyle: {paddingHorizontal: 0},
  label: {fontSize: 15},
  required: {color: 'red'},
  errorStyle: {fontSize: 12, color: 'red'},
});
