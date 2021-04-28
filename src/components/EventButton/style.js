import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  button: {
    // width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 50,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    color: 'white',
  },
  successContainer: {backgroundColor: '#27B647'},
  disabledContainer: {
    backgroundColor: 'rgba(255, 164, 25, 0.5)',
    paddingHorizontal: 8,
  },
  dangerContainer: {backgroundColor: 'red'},
  successTextStyle: {fontSize: 16},
  disabledTextStyle: {fontSize: 14},
  dangerTextStyle: {fontSize: 16},
});
