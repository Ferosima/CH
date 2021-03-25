import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    padding: 5,
    width: '35%',
  },
  dateWrapper: {
    paddingVertical: 5,
  },
  infoWrapper: {
    flex: 1,
  },
  textWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    flex: 1,
    // width: '55%',
    // justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    borderRadius: 20,
  },
  title: {
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
    color: '#2267C8',
  },
  date: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
  },
  time: {
    fontFamily: 'Comfortaa-Regular',
    includeFontPadding: false,
    fontSize: 25,
    color: '#2267C8',
  },
  year: {
    color: '#87AEE3',
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    paddingHorizontal: 5,
  },
});
