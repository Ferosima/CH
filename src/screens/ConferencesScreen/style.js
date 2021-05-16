import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  Dimensions,
  FlatList,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F8F8FA',
  },
  row: {
    flexDirection: 'row',
  },
  titleWrapper: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Nunito-Light',
    fontSize: 35,
    justifyContent: 'flex-start',
    color: colors.main,
  },
  wrapperContentStyle: {
    // flex: 1,
    width: '100%',
  },
  eventStyle: {
    width: '100%',
  },
  headerWrapper: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  headerTextContainer: {
    marginHorizontal: 20,
    paddingVertical: 30,
  },
  headerSubtitle: {
    fontFamily: 'Nunito-Light',
    fontSize: 18,
    color: colors.main,
  },
  headerTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
    color: colors.main,
  },
  countEventsWrapper: {
    shadowRadius: 4,
    alignSelf: 'center',
    paddingVertical: 5,
    flexDirection: 'row',
    backgroundColor: '#F8F8FA',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
  },
  countEventsText: {
    paddingHorizontal: 10,
    fontSize: 12,
    fontFamily: 'Nunito-Light',
  },
  countEventsButton: {
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 2,
  },
  countEventsButtonText: {
    fontSize: 13,
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
  },
  itemListWrapper: {
    // zIndex: 1,
    marginBottom: 20,
    marginHorizontal: 10,
    shadowRadius: 2,
    borderRadius: 10,
    backgroundColor: '#DDDDDD',
  },
  timeContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  timeText: {
    fontSize: 13,
    fontFamily: 'Comfortaa-Light',
    paddingLeft: 5,
    color: '#273B56',
  },
  textStyle: {
    fontSize: 15,
    fontFamily: 'Nunito-Light',
    paddingLeft: 5,
    color: '#273B56',
  },
  emptyWrapper: {
    flex: 1,
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
