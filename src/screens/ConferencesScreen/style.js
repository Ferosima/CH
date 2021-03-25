import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleWrapper: {
    justifyContent: 'center',
  },
  headerWrapper: {
    width: '100%',
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Nunito-Light',
    fontSize: 35,
    justifyContent: 'flex-start',
    color: colors.main,
  },
  wrapperContentStyle: {
    alignItems: 'center',
    width: '100%',
    padding: 10,
    flexGrow: 1,
  },
  eventStyle: {
    width: '100%',
  },
});
