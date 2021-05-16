import React, {Fragment} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import moment from 'moment';
import {mock_registration} from '../../const/mockForm';
import {createUser, authClear} from '../../store/actions/auth';
import {getRootState} from '../../store/selectors/auth';
import Button from '../Button';
import CustomInput from '../Input';
import style from './style';
import DatePicker from '../DatePicker';

class RegistrationForm extends React.Component {
  state = {
    mock_registration: [],
    form: {},
  };

  componentDidMount = () => {
    if (this.props.data) this.setState({form: this.props.data});
    this.setState({
      mock_registration: this.props.withoutPassword
        ? mock_registration.filter((el) => el.name != 'password')
        : mock_registration,
    });
  };

  _cleanForm = () => {
    this.setState({form: {}});
  };

  _setForm = (name) => (value) => {
    this.setState({form: {...this.state.form, [name]: value}});
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

  renderInput = (item) => (
    <CustomInput
      label={item.label}
      labelBackgroundColor={this.props.labelBackgroundColor}
      keyboardType={item.keyboard}
      isRequired={item.required}
      value={this.state.form ? this.state.form[item.name] : null}
      error={this._findError(item.name)}
      errorStyle={style.errorStyle}
      onChangeText={this._setForm(item.name)}
      secureTextEntry={item.name === 'password'}
    />
  );

  // TODO add maximumDate
  renderBirthDate = (item) => (
    <DatePicker
      label={item.label}
      labelBackgroundColor={this.props.labelBackgroundColor}
      onChange={this._setForm(item.name)}
      isRequired={item.required}
      error={this._findError(item.name)}
      maximumDate={new Date()}
      value={
        this.state.form[item.name]
          ? moment(this.state.form[item.name]).format('DD MMMM YYYY')
          : null
      }
    />
  );

  renderForm = (item, index) => (
    <React.Fragment key={index}>
      {item.name !== 'birth_date'
        ? this.renderInput(item)
        : this.renderBirthDate(item)}
    </React.Fragment>
  );

  render() {
    const {withoutButtons = false} = this.props;
    return (
      <View style={style.wrapper}>
        {withoutButtons ? null : (
          <Button
            onPress={this._goBack}
            text={'Go back'}
            buttonStyle={style.buttonBack}
          />
        )}
        {this.state.mock_registration.map(this.renderForm)}
        <Text style={style.errorStyle}>{this._findError('form_error')}</Text>
        <View style={style.buttonsWrapper}>
          {withoutButtons ? null : (
            <>
              <Button onPress={this._cleanForm} text={'Clear'} />
              <Button
                onPress={this._createUser}
                text={'Done'}
                pending={this.props.auth.pending}
                buttonStyle={style.buttonDark}
                textStyle={style.buttonDarkText}
              />
            </>
          )}
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
