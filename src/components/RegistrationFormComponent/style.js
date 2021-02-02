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
  label: {fontSize: 15},
  required: {color: 'red'},
  birthDayContainer: {
    alignSelf: 'stretch',
  },
  birthDayWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorStyle: {
    fontSize: 12,
    color: 'red',
    marginVertical: 5,
    alignSelf: 'stretch',
  },
  dateStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.dark,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  dateLabel: {fontSize: 15, paddingRight: 10},
  dateText: {fontSize: 20},
});
