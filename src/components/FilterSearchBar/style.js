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
  stickyHeaderWrapper: {
    zIndex: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    marginBottom: 20,
    marginHorizontal: 10,
  },
});
