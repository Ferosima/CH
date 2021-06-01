import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
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
  buttonBack: {
    alignSelf: 'flex-end',
    padding: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  required: {color: 'red'},
  errorStyle: {
    fontSize: 12,
    color: 'red',
    marginVertical: 5,
    alignSelf: 'stretch',
  },
});
