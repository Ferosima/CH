import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {BlurView} from '@react-native-community/blur';
import defualt_image from '../../../assets/images/def_img.jpg';
import style from './style';
import {colors} from '../../const/colors';

export class FilterSeachBar extends React.Component {
  state = {modalVisible: false};

  render() {
    const {contentContainer} = this.props;
    return (
      <View style={[style.stickyHeaderWrapper, contentContainer]}>
        <View style={style.row}>
          <Text style={style.stickyHeaderText}>Events</Text>
          <Icon
            name="search"
            type="font-awesome"
            color={colors.blueDark}
            size={24}
            containerStyle={style.stickyHeaderIcon}
            onPress={() => console.log('hello')}
          />
          <Icon
            name="filter"
            type="font-awesome"
            color={colors.blueDark}
            size={24}
            containerStyle={style.stickyHeaderIcon}
            onPress={() => console.log('hello')}
          />
        </View>
      </View>
    );
  }
}
