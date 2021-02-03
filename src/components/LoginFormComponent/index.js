import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {mock_login} from '../../const/mockForm';
import {fetchLogin, authClear} from '../../store/actions/auth';
import {getRootState} from '../../store/selectors/auth';
import Button from '../Button';
import CustomInput from '../Input';
import style from './style';

class RegistrationForm extends React.Component {
  state = {
    form: {},
  };

  _cleanForm = () => {
    this.setState({form: {}});
  };

  _setForm = (name) => (value) => {
    this.setState({form: {...this.state.form, [name]: value}});
  };

  _fetchLogin = () => {
    this.props.fetchLogin(this.state.form);
  };

  _findError = (name) => {
    const error = this.props.auth.error.find((item) => item[0] === name);
    return error ? error[1] : null;
  };

  _goBack = () => {
    this.props.goBack();
    this.props.authClear();
  };

  renderInput = (item, index) => (
    <CustomInput
      key={index}
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

  render() {
    return (
      <View style={style.wrapper}>
        <Button
          onPress={this._goBack}
          text={'Go back'}
          buttonStyle={style.buttonBack}
        />
        {mock_login.map(this.renderInput)}
        <Text style={style.errorStyle}>{this._findError('form_error')}</Text>
        <View style={style.buttonsWrapper}>
          <Button onPress={this._cleanForm} text={'Clear'} />
          <Button
            onPress={this._fetchLogin}
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
  fetchLogin,
  authClear,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(RegistrationForm);
