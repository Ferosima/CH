import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.blueLight,
    paddingTop: 15,
    paddingBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    paddingBottom: 10,
    color: colors.blueDark,
  },
  subtitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: colors.grey,
  },
  eventContainer: {
    padding: 15,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  timeContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: colors.blueDark,
  },
});
