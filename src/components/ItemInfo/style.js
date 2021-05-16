import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
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
    justifyContent: 'flex-end',

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
    color: '#485E7D',
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
    color: '#485E7D',
    fontSize: 13,
    paddingHorizontal: 2,
    fontFamily: 'Comfortaa-Regular',
  },
  marginBottom: {
    marginBottom: 25,
  },
  hyperlinkStyle: {color: '#91C0F6'},
});
