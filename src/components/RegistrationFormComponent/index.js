import React, {Fragment} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {mock_registration} from '../../const/mockForm';
import {createUser, authClear} from '../../store/actions/auth';
import {getRootState} from '../../store/selectors/auth';
import Button from '../Button';
import CustomInput from '../Input';
import style from './style';

class RegistrationForm extends React.Component {
  state = {
    form: {},
    date: new Date(),
    modalVisible: false,
  };

  _cleanForm = () => {
    this.setState({form: {}, date: new Date()});
  };

  _setForm = (name) => (value) => {
    this.setState({form: {...this.state.form, [name]: value}});
  };

  _modalVisible = (value) => () => {
    this.setState({modalVisible: value});
  };

  _createUser = () => {
    this.props.createUser(this.state.form);
  };

  _findError = (name) => {
    const error = this.props.auth.error.find((item) => item[0] === name);
    return error ? error[1] : null;
  };

  _goBack = () => {
    this.props.goBack();
    this.props.authClear();
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
              onDateChange={this._setForm('birth_date')}
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

  renderInput = (item) => (
    <CustomInput
      label={item.label}
      keyboardType={item.keyboard}
      isRequired={item.required}
      value={this.state.form ? this.state.form[item.name] : null}
      error={this._findError(item.name)}
      errorStyle={style.errorStyle}
      onChangeText={this._setForm(item.name)}
      secureTextEntry={item.name === 'password'}
    />
  );

  renderLabel = (label, isRequired) => (
    <Text>
      <Text style={style.label}>{label}</Text>
      {isRequired ? <Text style={style.required}>*</Text> : null}
    </Text>
  );

  renderDate = (label, text) => (
    <TouchableOpacity
      style={style.dateStyle}
      onPress={this._modalVisible(true)}>
      <Text style={style.dateLabel}>{label}</Text>
      <View>
        <Text style={style.dateText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderBirthDate = (item) => {
    const date = {day: ' ', month: ' ', year: ' '};
    if (this.state.form.birth_date) {
      date.day = this.state.form.birth_date.getDate();
      date.month = this.state.form.birth_date.getMonth() + 1;
      date.year = this.state.form.birth_date.getFullYear();
    }
    return (
      <View style={style.birthDayContainer}>
        {this.renderLabel(item.label, item.required)}
        <View style={style.birthDayWrapper}>
          {this.renderDate('Day', date.day)}
          {this.renderDate('Mouth', date.month)}
          {this.renderDate('Year', date.year)}
        </View>
        <Text style={style.errorStyle}>{this._findError(item.name)}</Text>
      </View>
    );
  };

  renderForm = (item, index) => (
    <React.Fragment key={index}>
      {item.name !== 'birth_date'
        ? this.renderInput(item)
        : this.renderBirthDate(item)}
    </React.Fragment>
  );

  render() {
    return (
      <View style={style.wrapper}>
        {this.renderModal()}
        <Button
          onPress={this._goBack}
          text={'Go back'}
          buttonStyle={style.buttonBack}
        />
        {mock_registration.map(this.renderForm)}
        <Text style={style.errorStyle}>{this._findError('form_error')}</Text>
        <View style={style.buttonsWrapper}>
          <Button onPress={this._cleanForm} text={'Clear'} />
          <Button
            onPress={this._createUser}
            text={'Done'}
            pending={this.props.auth.pending}
            buttonStyle={style.buttonDark}
            textStyle={style.buttonDarkText}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: getRootState(state),
});

const mapDispatchToProps = {
  createUser,
  authClear,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(RegistrationForm);
