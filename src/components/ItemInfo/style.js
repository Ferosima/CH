import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  blurWrapper: {
    flex: 1,
    backgroundColor: '#C0C0C030',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff00',
  },
  itemContainer: {
    maxHeight: '90%',
    width: '89%',
    borderRadius: 30,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 17 / 13,
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
    // backgroundColor: 'grey',
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
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: colors.blueDark,
    paddingVertical: 0,
  },
  subtitle: {
    color: colors.blueDark,
    paddingBottom: 3,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold',
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: colors.grey,
  },
  mapText: {
    flex: 1,
    fontSize: 14,
  },
  mapButtonText: {
    paddingVertical: 5,
    color: 'white',
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
  },
  mapButtonContainer: {
    backgroundColor: '#91C0F6',
    borderRadius: 20,
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  greenText: {
    color: colors.green,
  },
  dateContainer: {
    marginBottom: 25,
    justifyContent: 'flex-start',
  },
  dateText: {
    color: colors.grey,
    fontSize: 13,
    paddingHorizontal: 2,
    fontFamily: 'Comfortaa-Regular',
  },
  marginBottom: {
    marginBottom: 25,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#27B647',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Comfortaa',
    color: 'white',
  },
});
