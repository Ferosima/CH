import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    elevation: 1.5,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  flex: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  imageWrapper: {
    paddingVertical: 5,
    paddingLeft: 5,
    width: '30%',
    aspectRatio: 102 / 105,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: colors.blueDark,
  },
  subtitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: colors.grey,
  },
  iconContainer: {
    backgroundColor: colors.blueLight,
    aspectRatio: 1,
    borderRadius: 50,
  },
  container: {
    paddingHorizontal: 3,
    borderRadius: 100,
  },
  timeContainer: {
    // backgroundColor: colors.greenLight,
  },
  time: {
    color: '#27B647',
  },
  modalBlurWrapper: {
    flex: 1,
    backgroundColor: '#C0C0C030',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff00',
  },
  modalItemWrapper: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    backgroundColor: 'white',
    // elevation: 3,
  },
  modalImageContainer: {
    // padding: 5,
    width: '100%',
    aspectRatio: 7 / 6,
    borderRadius: 50,
  },
});
