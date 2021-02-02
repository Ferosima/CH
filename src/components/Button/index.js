import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import style from './style';

class Button extends React.Component {
  render() {
    const {text, onPress, pending, buttonStyle, textStyle} = this.props;
    return (
      <TouchableOpacity style={[style.button, buttonStyle]} onPress={onPress}>
        {pending ? (
          <ActivityIndicator size="small" color={textStyle.color} />
        ) : (
          <Text style={[style.buttonText, textStyle]}>{text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}
export default Button;
