import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import style from './style';

export class EventButton extends React.Component {
  getText = (state, countOfEvents) => {
    switch (state) {
      case 'success':
        return 'Go to event';
      case 'disabled':
        return `That time is taken by ${
          countOfEvents === 1
            ? 'another event'
            : `${countOfEvents} another events`
        }`;
      case 'danger':
        return 'Leave event';
    }
  };

  render() {
    const {
      state,
      onPressSuccess,
      onPressDisabled,
      onPressDanger,
      countOfEvents = null,
      pending,
      buttonStyle,
      textStyle,
    } = this.props;
    const onPress = {
      success: onPressSuccess,
      disabled: onPressDisabled,
      danger: onPressDanger,
    };
    return (
      <TouchableOpacity
        style={[style.button, style[`${state}Container`], buttonStyle]}
        onPress={!pending ? onPress[state] : null}
        disabled={state === 'disabled'}>
        {pending ? (
          <ActivityIndicator size="small" color={'white'} />
        ) : (
          <Text
            style={[style.buttonText, style[`${state}TextStyle`], textStyle]}>
            {this.getText(state, countOfEvents)}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}
