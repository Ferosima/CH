import React from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import style from './style';

export default class CustomInput extends React.Component {
  renderLabel = (label, isRequired) => (
    <Text>
      <Text style={style.label}>{label}</Text>
      {isRequired ? <Text style={style.required}>*</Text> : null}
    </Text>
  );

  render() {
    const {
      label,
      onChangeText,
      isRequired,
      value,
      error,
      keyboardType,
      secureTextEntry,
    } = this.props;
    return (
      <Input
        placeholder={label}
        label={this.renderLabel(label, isRequired)}
        inputContainerStyle={style.inputContainerStyle}
        containerStyle={style.containerStyle}
        onChangeText={onChangeText}
        value={value}
        errorMessage={error}
        errorStyle={style.errorStyle}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    );
  }
}
