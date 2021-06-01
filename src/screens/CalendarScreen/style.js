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
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarButton: {
    backgroundColor: '#F8F8FA',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  calendarWrapper: {
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  calendarButtonText: {
    fontSize: 15,
    fontFamily: 'Comfortaa-Regular',
    paddingLeft: 5,
    color: '#273B56',
    // backgroundColor:'red'
  },
  calendarButtonIconContainer: {
    paddingBottom: 4,
  },
  calendarStripStyle: {
    // alignItems: 'flex-end',
    paddingBottom: 20,
  },
  calendarStripDateNameStyle: {
    color: '#b6c1cd',
    fontSize: 14,
    fontFamily: 'Comfortaa-Light',
    textTransform: 'capitalize',
  },
  calendarStripDateNumberStyle: {
    color: '#69727E',
    fontSize: 18,
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#F8F9FB',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#6E7C8D',
    paddingVertical: 30,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#27B647',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    color: 'white',
  },
});
