import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {mock_registration} from '../../const/mockForm';
import {createUser} from '../../store/actions/auth';
import {getRootState} from '../../store/selectors/auth';
import Button from '../Button';
import CustomInput from '../Input';
import style from './style';

class RegistrationForm extends React.Component {
  state = {
    form: null,
    error: [],
    date: new Date(),
    modalVisible: false,
  };

  componentDidMount = () => {
    // TODO remove it
    if (this.props.auth.isLogin) {
    }
    this.setState({
      form: {
        first_name: 'aa',
        last_name: 'aa',
        email: 'mail',
        birth_date: new Date(),
        password: 'aaaaaa',
      },
    });
  };

  _cleanForm = () => {
    this.setState({form: null, error: []});
  };

  _setForm = (name) => (value) => {
    this.setState({form: {...this.state.form, [name]: value}});
    if (this.state.error.length) {
      this.setState({error: []});
    }
  };

  _createUser = () => {
    this.props.createUser(this.state.form);
  };

  _findError = (name) => {
    const error = this.props.auth.error.find((item) => item[0] === name);
    return error ? error[1] : null;
  };

  renderModal = () => (
    <Modal animationType="fade" transparent visible={this.state.modalVisible}>
      <View style={style.modalWrapper}>
        <View style={style.modal}>
          <DatePicker
            date={this.state.date}
            onDateChange={this._setForm('birth_date')}
            mode="date"
          />
          <View style={style.buttonsWrapper}>
            <Button
              onPress={() => {
                this.setState({modalVisible: false});
              }}
              text={'Go back'}
              buttonStyle={style.buttonBack}
            />
            <Button
              onPress={() => {
                this.setState({modalVisible: false});
              }}
              text={'Done'}
              buttonStyle={[style.buttonDark, style.buttonBack]}
              textStyle={style.buttonDarkText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );

  renderDate = (label, text) => (
    <TouchableOpacity
      style={style.dateStyle}
      onPress={() => {
        this.setState({modalVisible: true});
      }}>
      <Text style={style.dateLabel}>{label}</Text>
      <View>
        <Text style={style.dateText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderLabel = (label, isRequired) => (
    <Text>
      <Text style={style.label}>{label}</Text>
      {isRequired ? <Text style={style.required}>*</Text> : null}
    </Text>
  );

  renderBirthDate = (item) => {
    return (
      <View style={style.birthDayContainer}>
        {this.renderLabel(item.label, item.required)}
        <View style={style.birthDayWrapper}>
          {this.renderDate('Day', this.state.date.getDate())}
          {this.renderDate('Mouth', this.state.date.getMonth() + 1)}
          {this.renderDate('Year', this.state.date.getFullYear())}
        </View>
        <Text style={style.errorStyle}>{this._findError(item.name)}</Text>
      </View>
    );
  };

  renderForm = (item) =>
    item.name !== 'birth_date'
      ? this.renderInput(item)
      : this.renderBirthDate(item);

  renderInput = (item) => (
    <CustomInput
      label={item.label}
      keyboardType={item.keyboard}
      isRequired={item.required}
      value={this.state.form ? this.state.form[item.name] : null}
      error={this._findError(item.name)}
      onChangeText={this._setForm(item.name)}
      secureTextEntry={item.name === 'password'}
    />
  );

  render() {
    return (
      <View style={style.wrapper}>
        {this.renderModal()}
        <Button
          onPress={this.props.goBack}
          text={'Go back'}
          buttonStyle={style.buttonBack}
        />
        {mock_registration.map(this.renderForm)}
        <View style={style.buttonsWrapper}>
          <Button onPress={this._cleanForm} text={'Clear'} />
          <Button
            onPress={this._createUser}
            text={'Done'}
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
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(RegistrationForm);
