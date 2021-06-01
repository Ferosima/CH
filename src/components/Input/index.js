import React from 'react';
import {Animated, View, Text, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import style from './style';
import {colors} from '../../const/colors';

export default class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this._animatedIsFocused = new Animated.Value(this.props.value ? 1 : 0);
    this.labelStyle = {
      position: 'absolute',
      left: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [5, 15],
      }),
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [12, -10],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 15],
      }),
      backgroundColor: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [
          this.props.labelBackgroundColor
            ? this.props.labelBackgroundColor
            : 'white',
          this.props.labelBackgroundColor
            ? this.props.labelBackgroundColor
            : 'white',
        ],
      }),
      zIndex: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [-1, 2],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['grey', colors.dark],
      }),
    };
    this.state = {
      isFocused: false,
    };
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value ? 1 : 0,
      duration: 80,
      useNativeDriver: false,
    }).start();
  }

  _isFocused = (isFocused) => () => {
    this.setState({isFocused});
  };

  renderLabel = (label, isRequired) => (
    <Text>
      <Animated.Text style={[style.label, {color: this.labelStyle.color}]}>
        {label}
      </Animated.Text>
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
      errorStyle,
      keyboardType,
      secureTextEntry,
      editable,
    } = this.props;
    return (
      <View style={style.wrapper}>
        <Animated.View style={[this.labelStyle, {paddingHorizontal: 5}]}>
          {this.renderLabel(label, isRequired)}
        </Animated.View>
        <Input
          // multiline
          inputContainerStyle={style.inputContainerStyle}
          containerStyle={style.containerStyle}
          onChangeText={onChangeText}
          value={value}
          onFocus={this._isFocused(true)}
          onBlur={this._isFocused(false)}
          errorMessage={error}
          editable={editable}
          errorStyle={[style.errorStyle, errorStyle]}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}
