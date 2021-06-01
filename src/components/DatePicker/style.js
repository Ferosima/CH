import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    marginVertical: 4,
    alignSelf: 'stretch',
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
    marginVertical: 5,
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
  },
  modalWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
  },
  dateStyle: {
    alignSelf: 'stretch',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.dark,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  dateLabel: {fontSize: 15, paddingRight: 10},
  dateText: {fontSize: 17, paddingVertical: 3},
});
