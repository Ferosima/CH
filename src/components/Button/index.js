import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

class Button extends React.Component {
  render() {
    const {text, onPress, buttonStyle, textStyle} = this.props;
    return (
      <TouchableOpacity style={[style.button, buttonStyle]} onPress={onPress}>
        <Text style={[style.buttonText, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
export default Button;
