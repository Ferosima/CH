import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import style from './style';

export default class CustomIcon extends React.Component {
  render() {
    const {name, type, color, size} = this.props;
    return (
      <View
        style={{
          borderColor: color,
          borderWidth: 2,
          padding: 5,
          borderRadius: 25,
          alignContent: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
        }}>
        <Icon name={name} type={type} color={color} size={size} />
      </View>
    );
  }
}
