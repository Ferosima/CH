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
    backgroundColor: '#F2F6FF',
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
    alignItems: 'center',
    width: '100%',
  },
  eventStyle: {
    width: '100%',
  },
  headerWrapper: {
    // height: Dimensions.get('window').height * 0.27,
    height: '30%',
    width: '100%',
    backgroundColor: '#3449C0',
    borderBottomLeftRadius: (Dimensions.get('window').height * 0.2) / 3,
    borderBottomRightRadius: (Dimensions.get('window').height * 0.2) / 3,
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginBottom: 10,
  },
  headerTextContainer: {
    marginHorizontal: 20,
  },
  headerSubtitle: {
    fontFamily: 'Nunito-Light',
    fontSize: 18,
    color: 'white',
  },
  headerTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
    color: 'white',
  },
  countEventsWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  countEventsText: {
    paddingHorizontal: 10,
    fontSize: 12,
    fontFamily: 'Nunito-Light',
  },
  countEventsButton: {
    flexDirection: 'row',
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
  },
  countEventsButtonText: {
    fontSize: 13,
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
  },
  stickyHeaderWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F2F6FF',
  },
  stickyHeaderText: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.blueDark,
  },
  stickyHeaderIcon: {
    paddingHorizontal: 5,
  },
  itemListWrapper: {
    // borderWidth:1
    height:300,width:300
    // marginBottom: 10,
    // marginHorizontal: 20,
  },
  listStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 2,
  },
  listContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
