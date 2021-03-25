import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export default style = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    // overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listStyle: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
  },
  listContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapView: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
});
