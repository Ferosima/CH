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
    padding: 20,
    // flex: 1,
    height: '100%',
    backgroundColor: '#F8F8FA',
  },
  row: {
    flexDirection: 'row',
  },
  textWrapper: {
    paddingVertical: 20,
  },
  title: {
    fontFamily: 'Nunito-Semibold',
    fontSize: 20,
    justifyContent: 'flex-start',
    paddingVertical: 5,
    // color: colors.main,
  },
  subtitle: {
    fontFamily: 'Nunito-Light',
    fontSize: 16,
    justifyContent: 'flex-start',
    color: '#273B56',
  },
  wrapperContentStyle: {
    paddingBottom: 10,
    // flex: 1,
    // flexGrow: 1,
    // alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '45%',
    borderRadius: 100,
    aspectRatio: 1,
  },
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  menuHeaderWrapper: {
    borderBottomWidth: 1,
    borderColor: '#8FBAF3',
    width: '100%',
    alignItems: 'flex-start',
  },
  menuHeader: {
    alignSelf: 'flex-end',
    padding: 7,
    alignItems: 'center',
  },
  itemsContainer: {width: '100%', paddingBottom: 20},
  itemWrapper: {
    padding: 7,
    flexDirection: 'row-reverse',
    width: '100%',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  headerRightContainerStyle: {
    alignSelf: 'center',
    paddingRight: 15,
  },
  headerRightButton: {
    color: '#2267C8',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
  },
  fieldStyle: {
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#8FBAF3',
    width: '100%',
  },
  fieldTitle: {},
  fieldInfo: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Nunito-Regular',
  },
});
