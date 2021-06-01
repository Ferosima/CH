import React from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Button from '../Button';
import style from './style';
import {colors} from '../../const/colors';

export default class CustomDatePicker extends React.Component {
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
      modalVisible: false,
      date: new Date(),
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

  _modalVisible = (value) => () => {
    this.setState({modalVisible: value});
  };

  renderModal = () => (
    <Modal animationType="fade" transparent visible={this.state.modalVisible}>
      <TouchableOpacity
        style={style.modalWrapper}
        onPress={this._modalVisible(false)}>
        <TouchableWithoutFeedback>
          <View style={style.modal}>
            <DatePicker
              date={this.state.date}
              onDateChange={this.props.onChange}
              mode="date"
            />
            <View style={style.buttonsWrapper}>
              <Button
                onPress={this._modalVisible(false)}
                text={'Go back'}
                buttonStyle={style.buttonBack}
              />
              <Button
                onPress={this._modalVisible(false)}
                text={'Done'}
                buttonStyle={[style.buttonDark, style.buttonBack]}
                textStyle={style.buttonDarkText}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );

  renderLabel = (label, isRequired) => (
    <Text>
      <Animated.Text style={[style.label, {color: this.labelStyle.color}]}>
        {label}
      </Animated.Text>
      {isRequired ? <Text style={style.required}>*</Text> : null}
    </Text>
  );

  render() {
    const {label, isRequired, value, error, errorStyle} = this.props;
    return (
      <View style={style.wrapper}>
        {this.renderModal()}
        <Animated.View style={[this.labelStyle, {paddingHorizontal: 5}]}>
          {this.renderLabel(label, isRequired)}
        </Animated.View>
        <TouchableOpacity
          style={style.dateStyle}
          onPress={this._modalVisible(true)}>
          <View>
            <Text style={style.dateText}>{value}</Text>
          </View>
        </TouchableOpacity>
        <Text style={style.errorStyle}>{error}</Text>
      </View>
    );
  }
}
