import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style';

export class TextIcon extends React.Component {
  render() {
    const {
      label,
      labelStyle,
      text,
      iconName,
      iconType,
      iconSize,
      iconColor,
      textStyle,
      iconStyle,
      containerStyle,
      onPress,
    } = this.props;
    return (
      <View>
        {label ? <Text style={labelStyle}>{label}</Text> : null}
        <TouchableOpacity
          style={[style.row, containerStyle]}
          onPress={onPress}
          disabled={!onPress}>
          <Icon
            name={iconName}
            type={iconType}
            color={iconColor}
            size={iconSize}
            containerStyle={iconStyle}
          />
          <Text style={[style.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
