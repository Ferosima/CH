import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

class NavButton extends React.Component {
  render() {
    const {text, onPress, currentNav} = this.props;
    return (
      <TouchableOpacity
        style={[style.wrapper]}
        onPress={() => onPress(text)}
        activeOpacity={1}>
        <Text style={currentNav == text ? style.active : style.disable}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
export default NavButton;
